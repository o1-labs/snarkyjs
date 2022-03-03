import { isReady, PrivateKey, deploy, shutdown, compile } from 'snarkyjs';
import SimpleSnapp from './simple_snapp';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

await isReady;

// TODO: get keys from somewhere else; for now we assume the account is already funded
let snappPrivateKey = PrivateKey.random();
let snappAddress = snappPrivateKey.toPublicKey();

// read verification key from disk
let artifact = readArtifact(SimpleSnapp);
if (artifact === undefined)
  throw Error('No verification key found! Use compile.ts first');
let { verificationKey } = artifact;

// produce and log the transaction json; the fee payer is a dummy which has to be added later, by the signing logic
let transactionJson = deploy(SimpleSnapp, snappAddress, verificationKey);

console.log(transactionJson);

shutdown();

function readArtifact(SmartContract: Function) {
  let thisFolder = dirname(fileURLToPath(import.meta.url));
  let jsonFile = `${thisFolder}/build/${SmartContract.name}.json`;
  if (!existsSync(`${thisFolder}/build`) || !existsSync(jsonFile)) {
    return undefined;
  }
  return JSON.parse(readFileSync(jsonFile, 'utf-8'));
}
