# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/o1-labs/snarkyjs/compare/2375f08...HEAD)

### Added

- Implement recursion
  - RFC: https://github.com/o1-labs/snarkyjs/issues/89
  - Enable smart contract methods to take previous proofs as argument
  - Add new primitive `ZkProgram` which represents a collection of circuits that produce instances of the same proof.  
    Like smart contracts, ZkPrograms can produce execution proofs and merge in previous proofs, but they are more general and suitable for roll-up-type systems.
  - Supported numbers of merged proofs are 0, 1 and 2
  - PRs: https://github.com/o1-labs/snarkyjs/pull/245 https://github.com/o1-labs/snarkyjs/pull/250 https://github.com/o1-labs/snarkyjs/pull/261
- `SmartContract.digest()` to quickly compute a hash of the contract's circuit. This will be used by the zkApp CLI to figure out whether `compile` should be re-run or a cached verification key can be used.

### Changed

- BREAKING CHANGE: Make on-chain state consistent with other preconditions - throw an error when state is not explicitly constrained https://github.com/o1-labs/snarkyjs/pull/267

## [0.4.3](https://github.com/o1-labs/snarkyjs/compare/e66f08d...2375f08)

### Added

- Implement the [precondition RFC](https://github.com/o1-labs/snarkyjs/issues/179#issuecomment-1139413831):
  - new fields `this.account` and `this.network` on both `SmartContract` and `Party`
  - `this.<account|network>.<property>.get()` to use on-chain values in a circuit, e.g. account balance or block height
  - `this.<account|network>.<property>.{assertEqual, assertBetween, assertNothing}()` to constrain what values to allow for these
- `CircuitString`, a snark-compatible string type with methods like `.append()` https://github.com/o1-labs/snarkyjs/pull/155
- `bool.assertTrue()`, `bool.assertFalse()` as convenient aliases for existing functionality
- `Ledger.verifyPartyProof` which can check if a proof on a transaction is valid https://github.com/o1-labs/snarkyjs/pull/208
- Memo field in APIs like `Mina.transaction` to attach arbitrary messages https://github.com/o1-labs/snarkyjs/pull/244
- This changelog

### Changed

- Huge snark performance improvements (2-10x) for most zkApps https://github.com/MinaProtocol/mina/pull/11053
- Performance improvements in node with > 4 CPUs, for all snarks https://github.com/MinaProtocol/mina/pull/11292
- Substantial reduction of snarkyjs' size https://github.com/MinaProtocol/mina/pull/11166

### Removed

- Unused functions `call` and `callUnproved`, which were embryonic versions of what is now the `transaction` API to call smart contract methods
- Some unimplemented fields on `SmartContract`

### Fixed

- zkApp proving on web https://github.com/o1-labs/snarkyjs/issues/226

<!--
  Possible subsections:
    Added for new features.
    Changed for changes in existing functionality.
    Deprecated for soon-to-be removed features.
    Removed for now removed features.
    Fixed for any bug fixes.
    Security in case of vulnerabilities.
 -->
