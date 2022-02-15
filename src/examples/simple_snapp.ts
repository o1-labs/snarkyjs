import {
  Field,
  state,
  State,
  method,
  UInt64,
  PrivateKey,
  SmartContract,
  Mina,
  Party,
  isReady,
  serializeVerificationKey,
} from 'snarkyjs';

await isReady;

class SimpleSnapp extends SmartContract {
  @state(Field) x = State<Field>();

  deploy(initialBalance: UInt64, x: Field) {
    super.deploy();
    this.balance.addInPlace(initialBalance);
    this.x.set(x);
  }

  @method update(y: Field) {
    let x = this.x.get();
    console.log('update', { y, x });
    this.x.set(x.add(y));
  }
}

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);

const account1 = Local.testAccounts[0].privateKey;
const account2 = Local.testAccounts[1].privateKey;

const snappPrivKey = PrivateKey.random();
const snappPubKey = snappPrivKey.toPublicKey();

console.log('deploy');
await Mina.transaction(account1, async () => {
  let snapp = new SimpleSnapp(snappPubKey);

  const amount = UInt64.fromNumber(1000000);
  const p = await Party.createSigned(account2);
  p.balance.subInPlace(amount);

  snapp.deploy(amount, Field(1));
})
  .send()
  .wait();

console.log('compile');
let { provers, getVerificationKey } = SimpleSnapp.compile(snappPubKey);

// let vk = getVerificationKey();
// console.log(vk);
// console.log(serializeVerificationKey(vk));

console.log('prove');
let snapp = new SimpleSnapp(snappPubKey);
let proof = snapp.prove(provers, 'update', [Field(3)]);
console.log({ proof });

let snappState = (await Mina.getAccount(snappPubKey)).snapp.appState[0];
console.log('initial state: ' + snappState);

console.log('update');
await Mina.transaction(account1, async () => {
  let snapp = new SimpleSnapp(snappPubKey);
  await snapp.update(Field(3));
})
  .send()
  .wait();

snappState = (await Mina.getAccount(snappPubKey)).snapp.appState[0];
console.log('final state: ' + snappState);