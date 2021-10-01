/* tslint:disable */
/* eslint-disable */
/**
* @param {WasmPastaFpPlonkIndex} index
* @param {Uint8Array} primary_input
* @param {Uint8Array} auxiliary_input
* @param {Uint8Array} prev_challenges
* @param {Uint32Array} prev_sgs
* @returns {WasmPastaFpProverProof}
*/
export function caml_pasta_fp_plonk_proof_create(index: WasmPastaFpPlonkIndex, primary_input: Uint8Array, auxiliary_input: Uint8Array, prev_challenges: Uint8Array, prev_sgs: Uint32Array): WasmPastaFpProverProof;
/**
* @param {Uint32Array} lgr_comm
* @param {WasmPastaFpPlonkVerifierIndex} index
* @param {WasmPastaFpProverProof} proof
* @returns {boolean}
*/
export function caml_pasta_fp_plonk_proof_verify(lgr_comm: Uint32Array, index: WasmPastaFpPlonkVerifierIndex, proof: WasmPastaFpProverProof): boolean;
/**
* @param {WasmVecVecVestaPolyComm} lgr_comms
* @param {Uint32Array} indexes
* @param {Uint32Array} proofs
* @returns {boolean}
*/
export function caml_pasta_fp_plonk_proof_batch_verify(lgr_comms: WasmVecVecVestaPolyComm, indexes: Uint32Array, proofs: Uint32Array): boolean;
/**
* @returns {WasmPastaFpProverProof}
*/
export function caml_pasta_fp_plonk_proof_dummy(): WasmPastaFpProverProof;
/**
* @param {WasmPastaFpProverProof} x
* @returns {WasmPastaFpProverProof}
*/
export function caml_pasta_fp_plonk_proof_deep_copy(x: WasmPastaFpProverProof): WasmPastaFpProverProof;
/**
* @param {WasmPastaFqPlonkIndex} index
* @param {Uint8Array} primary_input
* @param {Uint8Array} auxiliary_input
* @param {Uint8Array} prev_challenges
* @param {Uint32Array} prev_sgs
* @returns {WasmPastaFqProverProof}
*/
export function caml_pasta_fq_plonk_proof_create(index: WasmPastaFqPlonkIndex, primary_input: Uint8Array, auxiliary_input: Uint8Array, prev_challenges: Uint8Array, prev_sgs: Uint32Array): WasmPastaFqProverProof;
/**
* @param {Uint32Array} lgr_comm
* @param {WasmPastaFqPlonkVerifierIndex} index
* @param {WasmPastaFqProverProof} proof
* @returns {boolean}
*/
export function caml_pasta_fq_plonk_proof_verify(lgr_comm: Uint32Array, index: WasmPastaFqPlonkVerifierIndex, proof: WasmPastaFqProverProof): boolean;
/**
* @param {WasmVecVecPallasPolyComm} lgr_comms
* @param {Uint32Array} indexes
* @param {Uint32Array} proofs
* @returns {boolean}
*/
export function caml_pasta_fq_plonk_proof_batch_verify(lgr_comms: WasmVecVecPallasPolyComm, indexes: Uint32Array, proofs: Uint32Array): boolean;
/**
* @returns {WasmPastaFqProverProof}
*/
export function caml_pasta_fq_plonk_proof_dummy(): WasmPastaFqProverProof;
/**
* @param {WasmPastaFqProverProof} x
* @returns {WasmPastaFqProverProof}
*/
export function caml_pasta_fq_plonk_proof_deep_copy(x: WasmPastaFqProverProof): WasmPastaFqProverProof;
/**
* @returns {number}
*/
export function caml_pasta_fp_size_in_bits(): number;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fp_size(): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fp_add(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fp_sub(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_negate(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fp_mul(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fp_div(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array | undefined}
*/
export function caml_pasta_fp_inv(x: Uint8Array): Uint8Array | undefined;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_square(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {boolean}
*/
export function caml_pasta_fp_is_square(x: Uint8Array): boolean;
/**
* @param {Uint8Array} x
* @returns {Uint8Array | undefined}
*/
export function caml_pasta_fp_sqrt(x: Uint8Array): Uint8Array | undefined;
/**
* @param {number} i
* @returns {Uint8Array}
*/
export function caml_pasta_fp_of_int(i: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {string}
*/
export function caml_pasta_fp_to_string(x: Uint8Array): string;
/**
* @param {string} s
* @returns {Uint8Array}
*/
export function caml_pasta_fp_of_string(s: string): Uint8Array;
/**
* @param {Uint8Array} x
*/
export function caml_pasta_fp_print(x: Uint8Array): void;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {number}
*/
export function caml_pasta_fp_compare(x: Uint8Array, y: Uint8Array): number;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {boolean}
*/
export function caml_pasta_fp_equal(x: Uint8Array, y: Uint8Array): boolean;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fp_random(): Uint8Array;
/**
* @param {number} i
* @returns {Uint8Array}
*/
export function caml_pasta_fp_rng(i: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_to_bigint(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_of_bigint(x: Uint8Array): Uint8Array;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fp_two_adic_root_of_unity(): Uint8Array;
/**
* @param {number} log2_size
* @returns {Uint8Array}
*/
export function caml_pasta_fp_domain_generator(log2_size: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_to_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_of_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fp_deep_copy(x: Uint8Array): Uint8Array;
/**
* @returns {number}
*/
export function caml_pasta_fq_size_in_bits(): number;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fq_size(): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fq_add(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fq_sub(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_negate(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fq_mul(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_pasta_fq_div(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array | undefined}
*/
export function caml_pasta_fq_inv(x: Uint8Array): Uint8Array | undefined;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_square(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {boolean}
*/
export function caml_pasta_fq_is_square(x: Uint8Array): boolean;
/**
* @param {Uint8Array} x
* @returns {Uint8Array | undefined}
*/
export function caml_pasta_fq_sqrt(x: Uint8Array): Uint8Array | undefined;
/**
* @param {number} i
* @returns {Uint8Array}
*/
export function caml_pasta_fq_of_int(i: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {string}
*/
export function caml_pasta_fq_to_string(x: Uint8Array): string;
/**
* @param {string} s
* @returns {Uint8Array}
*/
export function caml_pasta_fq_of_string(s: string): Uint8Array;
/**
* @param {Uint8Array} x
*/
export function caml_pasta_fq_print(x: Uint8Array): void;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {number}
*/
export function caml_pasta_fq_compare(x: Uint8Array, y: Uint8Array): number;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {boolean}
*/
export function caml_pasta_fq_equal(x: Uint8Array, y: Uint8Array): boolean;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fq_random(): Uint8Array;
/**
* @param {number} i
* @returns {Uint8Array}
*/
export function caml_pasta_fq_rng(i: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_to_bigint(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_of_bigint(x: Uint8Array): Uint8Array;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_fq_two_adic_root_of_unity(): Uint8Array;
/**
* @param {number} log2_size
* @returns {Uint8Array}
*/
export function caml_pasta_fq_domain_generator(log2_size: number): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_to_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_of_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_pasta_fq_deep_copy(x: Uint8Array): Uint8Array;
/**
* @param {Uint32Array} lgr_comm
* @param {WasmPastaFpPlonkVerifierIndex} index
* @param {WasmPastaFpProverProof} proof
* @returns {WasmPastaFpPlonkOracles}
*/
export function caml_pasta_fp_plonk_oracles_create(lgr_comm: Uint32Array, index: WasmPastaFpPlonkVerifierIndex, proof: WasmPastaFpProverProof): WasmPastaFpPlonkOracles;
/**
* @returns {WasmPastaFpPlonkOracles}
*/
export function caml_pasta_fp_plonk_oracles_dummy(): WasmPastaFpPlonkOracles;
/**
* @param {WasmPastaFpPlonkOracles} x
* @returns {WasmPastaFpPlonkOracles}
*/
export function caml_pasta_fp_plonk_oracles_deep_copy(x: WasmPastaFpPlonkOracles): WasmPastaFpPlonkOracles;
/**
* @param {Uint32Array} lgr_comm
* @param {WasmPastaFqPlonkVerifierIndex} index
* @param {WasmPastaFqProverProof} proof
* @returns {WasmPastaFqPlonkOracles}
*/
export function caml_pasta_fq_plonk_oracles_create(lgr_comm: Uint32Array, index: WasmPastaFqPlonkVerifierIndex, proof: WasmPastaFqProverProof): WasmPastaFqPlonkOracles;
/**
* @returns {WasmPastaFqPlonkOracles}
*/
export function caml_pasta_fq_plonk_oracles_dummy(): WasmPastaFqPlonkOracles;
/**
* @param {WasmPastaFqPlonkOracles} x
* @returns {WasmPastaFqPlonkOracles}
*/
export function caml_pasta_fq_plonk_oracles_deep_copy(x: WasmPastaFqPlonkOracles): WasmPastaFqPlonkOracles;
/**
* @param {number | undefined} offset
* @param {WasmPastaFpUrs} urs
* @param {string} path
* @returns {WasmPastaFpPlonkVerifierIndex}
*/
export function caml_pasta_fp_plonk_verifier_index_read(offset: number | undefined, urs: WasmPastaFpUrs, path: string): WasmPastaFpPlonkVerifierIndex;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFpPlonkVerifierIndex} index
* @param {string} path
*/
export function caml_pasta_fp_plonk_verifier_index_write(append: boolean | undefined, index: WasmPastaFpPlonkVerifierIndex, path: string): void;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {WasmPastaFpPlonkVerifierIndex}
*/
export function caml_pasta_fp_plonk_verifier_index_create(index: WasmPastaFpPlonkIndex): WasmPastaFpPlonkVerifierIndex;
/**
* @param {number} log2_size
* @returns {WasmPastaFpPlonkVerificationShifts}
*/
export function caml_pasta_fp_plonk_verifier_index_shifts(log2_size: number): WasmPastaFpPlonkVerificationShifts;
/**
* @returns {WasmPastaFpPlonkVerifierIndex}
*/
export function caml_pasta_fp_plonk_verifier_index_dummy(): WasmPastaFpPlonkVerifierIndex;
/**
* @param {WasmPastaFpPlonkVerifierIndex} x
* @returns {WasmPastaFpPlonkVerifierIndex}
*/
export function caml_pasta_fp_plonk_verifier_index_deep_copy(x: WasmPastaFpPlonkVerifierIndex): WasmPastaFpPlonkVerifierIndex;
/**
* @param {number | undefined} offset
* @param {WasmPastaFqUrs} urs
* @param {string} path
* @returns {WasmPastaFqPlonkVerifierIndex}
*/
export function caml_pasta_fq_plonk_verifier_index_read(offset: number | undefined, urs: WasmPastaFqUrs, path: string): WasmPastaFqPlonkVerifierIndex;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFqPlonkVerifierIndex} index
* @param {string} path
*/
export function caml_pasta_fq_plonk_verifier_index_write(append: boolean | undefined, index: WasmPastaFqPlonkVerifierIndex, path: string): void;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {WasmPastaFqPlonkVerifierIndex}
*/
export function caml_pasta_fq_plonk_verifier_index_create(index: WasmPastaFqPlonkIndex): WasmPastaFqPlonkVerifierIndex;
/**
* @param {number} log2_size
* @returns {WasmPastaFqPlonkVerificationShifts}
*/
export function caml_pasta_fq_plonk_verifier_index_shifts(log2_size: number): WasmPastaFqPlonkVerificationShifts;
/**
* @returns {WasmPastaFqPlonkVerifierIndex}
*/
export function caml_pasta_fq_plonk_verifier_index_dummy(): WasmPastaFqPlonkVerifierIndex;
/**
* @param {WasmPastaFqPlonkVerifierIndex} x
* @returns {WasmPastaFqPlonkVerifierIndex}
*/
export function caml_pasta_fq_plonk_verifier_index_deep_copy(x: WasmPastaFqPlonkVerifierIndex): WasmPastaFqPlonkVerifierIndex;
/**
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_one(): WasmPallasGProjective;
/**
* @param {WasmPallasGProjective} x
* @param {WasmPallasGProjective} y
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_add(x: WasmPallasGProjective, y: WasmPallasGProjective): WasmPallasGProjective;
/**
* @param {WasmPallasGProjective} x
* @param {WasmPallasGProjective} y
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_sub(x: WasmPallasGProjective, y: WasmPallasGProjective): WasmPallasGProjective;
/**
* @param {WasmPallasGProjective} x
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_negate(x: WasmPallasGProjective): WasmPallasGProjective;
/**
* @param {WasmPallasGProjective} x
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_double(x: WasmPallasGProjective): WasmPallasGProjective;
/**
* @param {WasmPallasGProjective} x
* @param {Uint8Array} y
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_scale(x: WasmPallasGProjective, y: Uint8Array): WasmPallasGProjective;
/**
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_random(): WasmPallasGProjective;
/**
* @param {number} i
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_rng(i: number): WasmPallasGProjective;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_pallas_endo_base(): Uint8Array;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_pallas_endo_scalar(): Uint8Array;
/**
* @param {WasmPallasGProjective} x
* @returns {WasmPallasGAffine}
*/
export function caml_pasta_pallas_to_affine(x: WasmPallasGProjective): WasmPallasGAffine;
/**
* @param {WasmPallasGAffine} x
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_of_affine(x: WasmPallasGAffine): WasmPallasGProjective;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {WasmPallasGProjective}
*/
export function caml_pasta_pallas_of_affine_coordinates(x: Uint8Array, y: Uint8Array): WasmPallasGProjective;
/**
* @param {WasmPallasGAffine} x
* @returns {WasmPallasGAffine}
*/
export function caml_pasta_pallas_affine_deep_copy(x: WasmPallasGAffine): WasmPallasGAffine;
/**
* @returns {WasmPallasGAffine}
*/
export function caml_pasta_pallas_affine_one(): WasmPallasGAffine;
/**
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_one(): WasmVestaGProjective;
/**
* @param {WasmVestaGProjective} x
* @param {WasmVestaGProjective} y
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_add(x: WasmVestaGProjective, y: WasmVestaGProjective): WasmVestaGProjective;
/**
* @param {WasmVestaGProjective} x
* @param {WasmVestaGProjective} y
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_sub(x: WasmVestaGProjective, y: WasmVestaGProjective): WasmVestaGProjective;
/**
* @param {WasmVestaGProjective} x
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_negate(x: WasmVestaGProjective): WasmVestaGProjective;
/**
* @param {WasmVestaGProjective} x
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_double(x: WasmVestaGProjective): WasmVestaGProjective;
/**
* @param {WasmVestaGProjective} x
* @param {Uint8Array} y
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_scale(x: WasmVestaGProjective, y: Uint8Array): WasmVestaGProjective;
/**
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_random(): WasmVestaGProjective;
/**
* @param {number} i
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_rng(i: number): WasmVestaGProjective;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_vesta_endo_base(): Uint8Array;
/**
* @returns {Uint8Array}
*/
export function caml_pasta_vesta_endo_scalar(): Uint8Array;
/**
* @param {WasmVestaGProjective} x
* @returns {WasmVestaGAffine}
*/
export function caml_pasta_vesta_to_affine(x: WasmVestaGProjective): WasmVestaGAffine;
/**
* @param {WasmVestaGAffine} x
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_of_affine(x: WasmVestaGAffine): WasmVestaGProjective;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {WasmVestaGProjective}
*/
export function caml_pasta_vesta_of_affine_coordinates(x: Uint8Array, y: Uint8Array): WasmVestaGProjective;
/**
* @param {WasmVestaGAffine} x
* @returns {WasmVestaGAffine}
*/
export function caml_pasta_vesta_affine_deep_copy(x: WasmVestaGAffine): WasmVestaGAffine;
/**
* @returns {WasmVestaGAffine}
*/
export function caml_pasta_vesta_affine_one(): WasmVestaGAffine;
/**
* @param {number} depth
* @returns {WasmPastaFpUrs}
*/
export function caml_pasta_fp_urs_create(depth: number): WasmPastaFpUrs;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFpUrs} urs
* @param {string} path
*/
export function caml_pasta_fp_urs_write(append: boolean | undefined, urs: WasmPastaFpUrs, path: string): void;
/**
* @param {number | undefined} offset
* @param {string} path
* @returns {WasmPastaFpUrs | undefined}
*/
export function caml_pasta_fp_urs_read(offset: number | undefined, path: string): WasmPastaFpUrs | undefined;
/**
* @param {WasmPastaFpUrs} urs
* @param {number} domain_size
* @param {number} i
* @returns {WasmPastaVestaPolyComm}
*/
export function caml_pasta_fp_urs_lagrange_commitment(urs: WasmPastaFpUrs, domain_size: number, i: number): WasmPastaVestaPolyComm;
/**
* @param {WasmPastaFpUrs} urs
* @param {number} domain_size
* @param {Uint8Array} evals
* @returns {WasmPastaVestaPolyComm}
*/
export function caml_pasta_fp_urs_commit_evaluations(urs: WasmPastaFpUrs, domain_size: number, evals: Uint8Array): WasmPastaVestaPolyComm;
/**
* @param {WasmPastaFpUrs} urs
* @param {Uint8Array} chals
* @returns {WasmPastaVestaPolyComm}
*/
export function caml_pasta_fp_urs_b_poly_commitment(urs: WasmPastaFpUrs, chals: Uint8Array): WasmPastaVestaPolyComm;
/**
* @param {WasmPastaFpUrs} urs
* @param {Uint32Array} comms
* @param {Uint8Array} chals
* @returns {boolean}
*/
export function caml_pasta_fp_urs_batch_accumulator_check(urs: WasmPastaFpUrs, comms: Uint32Array, chals: Uint8Array): boolean;
/**
* @param {WasmPastaFpUrs} urs
* @returns {WasmVestaGAffine}
*/
export function caml_pasta_fp_urs_h(urs: WasmPastaFpUrs): WasmVestaGAffine;
/**
* @param {number} depth
* @returns {WasmPastaFqUrs}
*/
export function caml_pasta_fq_urs_create(depth: number): WasmPastaFqUrs;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFqUrs} urs
* @param {string} path
*/
export function caml_pasta_fq_urs_write(append: boolean | undefined, urs: WasmPastaFqUrs, path: string): void;
/**
* @param {number | undefined} offset
* @param {string} path
* @returns {WasmPastaFqUrs | undefined}
*/
export function caml_pasta_fq_urs_read(offset: number | undefined, path: string): WasmPastaFqUrs | undefined;
/**
* @param {WasmPastaFqUrs} urs
* @param {number} domain_size
* @param {number} i
* @returns {WasmPastaPallasPolyComm}
*/
export function caml_pasta_fq_urs_lagrange_commitment(urs: WasmPastaFqUrs, domain_size: number, i: number): WasmPastaPallasPolyComm;
/**
* @param {WasmPastaFqUrs} urs
* @param {number} domain_size
* @param {Uint8Array} evals
* @returns {WasmPastaPallasPolyComm}
*/
export function caml_pasta_fq_urs_commit_evaluations(urs: WasmPastaFqUrs, domain_size: number, evals: Uint8Array): WasmPastaPallasPolyComm;
/**
* @param {WasmPastaFqUrs} urs
* @param {Uint8Array} chals
* @returns {WasmPastaPallasPolyComm}
*/
export function caml_pasta_fq_urs_b_poly_commitment(urs: WasmPastaFqUrs, chals: Uint8Array): WasmPastaPallasPolyComm;
/**
* @param {WasmPastaFqUrs} urs
* @param {Uint32Array} comms
* @param {Uint8Array} chals
* @returns {boolean}
*/
export function caml_pasta_fq_urs_batch_accumulator_check(urs: WasmPastaFqUrs, comms: Uint32Array, chals: Uint8Array): boolean;
/**
* @param {WasmPastaFqUrs} urs
* @returns {WasmPallasGAffine}
*/
export function caml_pasta_fq_urs_h(urs: WasmPastaFqUrs): WasmPallasGAffine;
/**
* @returns {WasmPastaFqPlonkGateVector}
*/
export function caml_pasta_fq_plonk_gate_vector_create(): WasmPastaFqPlonkGateVector;
/**
* @param {WasmPastaFqPlonkGateVector} v
* @param {WasmPastaFqPlonkGate} gate
*/
export function caml_pasta_fq_plonk_gate_vector_add(v: WasmPastaFqPlonkGateVector, gate: WasmPastaFqPlonkGate): void;
/**
* @param {WasmPastaFqPlonkGateVector} v
* @param {number} i
* @returns {WasmPastaFqPlonkGate}
*/
export function caml_pasta_fq_plonk_gate_vector_get(v: WasmPastaFqPlonkGateVector, i: number): WasmPastaFqPlonkGate;
/**
* @param {WasmPastaFqPlonkGateVector} v
* @param {WasmPlonkWire} t
* @param {WasmPlonkWire} h
*/
export function caml_pasta_fq_plonk_gate_vector_wrap(v: WasmPastaFqPlonkGateVector, t: WasmPlonkWire, h: WasmPlonkWire): void;
/**
* @param {WasmPastaFqPlonkGateVector} gates
* @param {number} public_
* @param {WasmPastaFqUrs} urs
* @returns {WasmPastaFqPlonkIndex}
*/
export function caml_pasta_fq_plonk_index_create(gates: WasmPastaFqPlonkGateVector, public_: number, urs: WasmPastaFqUrs): WasmPastaFqPlonkIndex;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fq_plonk_index_max_degree(index: WasmPastaFqPlonkIndex): number;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fq_plonk_index_public_inputs(index: WasmPastaFqPlonkIndex): number;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fq_plonk_index_domain_d1_size(index: WasmPastaFqPlonkIndex): number;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fq_plonk_index_domain_d4_size(index: WasmPastaFqPlonkIndex): number;
/**
* @param {WasmPastaFqPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fq_plonk_index_domain_d8_size(index: WasmPastaFqPlonkIndex): number;
/**
* @param {number | undefined} offset
* @param {WasmPastaFqUrs} urs
* @param {string} path
* @returns {WasmPastaFqPlonkIndex}
*/
export function caml_pasta_fq_plonk_index_read(offset: number | undefined, urs: WasmPastaFqUrs, path: string): WasmPastaFqPlonkIndex;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFqPlonkIndex} index
* @param {string} path
*/
export function caml_pasta_fq_plonk_index_write(append: boolean | undefined, index: WasmPastaFqPlonkIndex, path: string): void;
/**
* @returns {WasmPastaFpPlonkGateVector}
*/
export function caml_pasta_fp_plonk_gate_vector_create(): WasmPastaFpPlonkGateVector;
/**
* @param {WasmPastaFpPlonkGateVector} v
* @param {WasmPastaFpPlonkGate} gate
*/
export function caml_pasta_fp_plonk_gate_vector_add(v: WasmPastaFpPlonkGateVector, gate: WasmPastaFpPlonkGate): void;
/**
* @param {WasmPastaFpPlonkGateVector} v
* @param {number} i
* @returns {WasmPastaFpPlonkGate}
*/
export function caml_pasta_fp_plonk_gate_vector_get(v: WasmPastaFpPlonkGateVector, i: number): WasmPastaFpPlonkGate;
/**
* @param {WasmPastaFpPlonkGateVector} v
* @param {WasmPlonkWire} t
* @param {WasmPlonkWire} h
*/
export function caml_pasta_fp_plonk_gate_vector_wrap(v: WasmPastaFpPlonkGateVector, t: WasmPlonkWire, h: WasmPlonkWire): void;
/**
* @param {WasmPastaFpPlonkGateVector} gates
* @param {number} public_
* @param {WasmPastaFpUrs} urs
* @returns {WasmPastaFpPlonkIndex}
*/
export function caml_pasta_fp_plonk_index_create(gates: WasmPastaFpPlonkGateVector, public_: number, urs: WasmPastaFpUrs): WasmPastaFpPlonkIndex;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fp_plonk_index_max_degree(index: WasmPastaFpPlonkIndex): number;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fp_plonk_index_public_inputs(index: WasmPastaFpPlonkIndex): number;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fp_plonk_index_domain_d1_size(index: WasmPastaFpPlonkIndex): number;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fp_plonk_index_domain_d4_size(index: WasmPastaFpPlonkIndex): number;
/**
* @param {WasmPastaFpPlonkIndex} index
* @returns {number}
*/
export function caml_pasta_fp_plonk_index_domain_d8_size(index: WasmPastaFpPlonkIndex): number;
/**
* @param {number | undefined} offset
* @param {WasmPastaFpUrs} urs
* @param {string} path
* @returns {WasmPastaFpPlonkIndex}
*/
export function caml_pasta_fp_plonk_index_read(offset: number | undefined, urs: WasmPastaFpUrs, path: string): WasmPastaFpPlonkIndex;
/**
* @param {boolean | undefined} append
* @param {WasmPastaFpPlonkIndex} index
* @param {string} path
*/
export function caml_pasta_fp_plonk_index_write(append: boolean | undefined, index: WasmPastaFpPlonkIndex, path: string): void;
/**
* @param {string} s
* @param {number} _len
* @param {number} base
* @returns {Uint8Array}
*/
export function caml_bigint_256_of_numeral(s: string, _len: number, base: number): Uint8Array;
/**
* @param {string} s
* @returns {Uint8Array}
*/
export function caml_bigint_256_of_decimal_string(s: string): Uint8Array;
/**
* @returns {number}
*/
export function caml_bigint_256_num_limbs(): number;
/**
* @returns {number}
*/
export function caml_bigint_256_bytes_per_limb(): number;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {Uint8Array}
*/
export function caml_bigint_256_div(x: Uint8Array, y: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @param {Uint8Array} y
* @returns {number}
*/
export function caml_bigint_256_compare(x: Uint8Array, y: Uint8Array): number;
/**
* @param {Uint8Array} x
*/
export function caml_bigint_256_print(x: Uint8Array): void;
/**
* @param {Uint8Array} x
* @returns {string}
*/
export function caml_bigint_256_to_string(x: Uint8Array): string;
/**
* @param {Uint8Array} x
* @param {number} i
* @returns {boolean}
*/
export function caml_bigint_256_test_bit(x: Uint8Array, i: number): boolean;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_bigint_256_to_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_bigint_256_of_bytes(x: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} x
* @returns {Uint8Array}
*/
export function caml_bigint_256_deep_copy(x: Uint8Array): Uint8Array;
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @param {string} s
*/
export function console_log(s: string): void;
/**
* @returns {number}
*/
export function create_zero_u32_ptr(): number;
/**
* @param {number} ptr
*/
export function free_u32_ptr(ptr: number): void;
/**
* @param {number} ptr
* @param {number} arg
*/
export function set_u32_ptr(ptr: number, arg: number): void;
/**
* @param {number} ptr
* @returns {number}
*/
export function wait_until_non_zero(ptr: number): number;
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
export function initThreadPool(num_threads: number): Promise<any>;
/**
* @param {number} receiver
*/
export function wbg_rayon_start_worker(receiver: number): void;
/**
*/
export enum WasmPlonkGateType {
  Zero,
  Generic,
  Poseidon,
  Add1,
  Add2,
  Vbmul1,
  Vbmul2,
  Vbmul3,
  Endomul1,
  Endomul2,
  Endomul3,
  Endomul4,
}
/**
*/
export enum WasmPlonkCol {
  L,
  R,
  O,
}
/**
*/
export class WasmPallasGAffine {
  free(): void;
/**
*/
  infinity: boolean;
/**
*/
  x: Uint8Array;
/**
*/
  y: Uint8Array;
}
/**
*/
export class WasmPallasGProjective {
  free(): void;
}
/**
*/
export class WasmPastaFpOpeningProof {
  free(): void;
/**
* @param {Uint32Array} lr_0
* @param {Uint32Array} lr_1
* @param {WasmVestaGAffine} delta
* @param {Uint8Array} z1
* @param {Uint8Array} z2
* @param {WasmVestaGAffine} sg
*/
  constructor(lr_0: Uint32Array, lr_1: Uint32Array, delta: WasmVestaGAffine, z1: Uint8Array, z2: Uint8Array, sg: WasmVestaGAffine);
/**
* @returns {WasmVestaGAffine}
*/
  delta: WasmVestaGAffine;
/**
* @returns {Uint32Array}
*/
  lr_0: Uint32Array;
/**
* @returns {Uint32Array}
*/
  lr_1: Uint32Array;
/**
* @returns {WasmVestaGAffine}
*/
  sg: WasmVestaGAffine;
/**
*/
  z1: Uint8Array;
/**
*/
  z2: Uint8Array;
}
/**
*/
export class WasmPastaFpPlonkDomain {
  free(): void;
/**
* @param {number} log_size_of_group
* @param {Uint8Array} group_gen
*/
  constructor(log_size_of_group: number, group_gen: Uint8Array);
/**
*/
  group_gen: Uint8Array;
/**
*/
  log_size_of_group: number;
}
/**
*/
export class WasmPastaFpPlonkGate {
  free(): void;
/**
* @param {number} typ
* @param {WasmPlonkWires} wires
* @param {Uint8Array} c
*/
  constructor(typ: number, wires: WasmPlonkWires, c: Uint8Array);
/**
* @returns {Uint8Array}
*/
  c: Uint8Array;
/**
*/
  typ: number;
/**
*/
  wires: WasmPlonkWires;
}
/**
*/
export class WasmPastaFpPlonkGateVector {
  free(): void;
}
/**
*/
export class WasmPastaFpPlonkIndex {
  free(): void;
}
/**
*/
export class WasmPastaFpPlonkOracles {
  free(): void;
/**
* @param {Uint8Array} o
* @param {Uint8Array} p_eval0
* @param {Uint8Array} p_eval1
* @param {Uint8Array} opening_prechallenges
* @param {Uint8Array} digest_before_evaluations
*/
  constructor(o: Uint8Array, p_eval0: Uint8Array, p_eval1: Uint8Array, opening_prechallenges: Uint8Array, digest_before_evaluations: Uint8Array);
/**
*/
  digest_before_evaluations: Uint8Array;
/**
*/
  o: Uint8Array;
/**
* @returns {Uint8Array}
*/
  opening_prechallenges: Uint8Array;
/**
*/
  p_eval0: Uint8Array;
/**
*/
  p_eval1: Uint8Array;
}
/**
*/
export class WasmPastaFpPlonkVerificationEvals {
  free(): void;
/**
* @param {WasmPastaVestaPolyComm} sigma_comm0
* @param {WasmPastaVestaPolyComm} sigma_comm1
* @param {WasmPastaVestaPolyComm} sigma_comm2
* @param {WasmPastaVestaPolyComm} ql_comm
* @param {WasmPastaVestaPolyComm} qr_comm
* @param {WasmPastaVestaPolyComm} qo_comm
* @param {WasmPastaVestaPolyComm} qm_comm
* @param {WasmPastaVestaPolyComm} qc_comm
* @param {WasmPastaVestaPolyComm} rcm_comm0
* @param {WasmPastaVestaPolyComm} rcm_comm1
* @param {WasmPastaVestaPolyComm} rcm_comm2
* @param {WasmPastaVestaPolyComm} psm_comm
* @param {WasmPastaVestaPolyComm} add_comm
* @param {WasmPastaVestaPolyComm} mul1_comm
* @param {WasmPastaVestaPolyComm} mul2_comm
* @param {WasmPastaVestaPolyComm} emul1_comm
* @param {WasmPastaVestaPolyComm} emul2_comm
* @param {WasmPastaVestaPolyComm} emul3_comm
*/
  constructor(sigma_comm0: WasmPastaVestaPolyComm, sigma_comm1: WasmPastaVestaPolyComm, sigma_comm2: WasmPastaVestaPolyComm, ql_comm: WasmPastaVestaPolyComm, qr_comm: WasmPastaVestaPolyComm, qo_comm: WasmPastaVestaPolyComm, qm_comm: WasmPastaVestaPolyComm, qc_comm: WasmPastaVestaPolyComm, rcm_comm0: WasmPastaVestaPolyComm, rcm_comm1: WasmPastaVestaPolyComm, rcm_comm2: WasmPastaVestaPolyComm, psm_comm: WasmPastaVestaPolyComm, add_comm: WasmPastaVestaPolyComm, mul1_comm: WasmPastaVestaPolyComm, mul2_comm: WasmPastaVestaPolyComm, emul1_comm: WasmPastaVestaPolyComm, emul2_comm: WasmPastaVestaPolyComm, emul3_comm: WasmPastaVestaPolyComm);
/**
* @returns {WasmPastaVestaPolyComm}
*/
  add_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  emul1_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  emul2_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  emul3_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  mul1_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  mul2_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  psm_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  qc_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  ql_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  qm_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  qo_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  qr_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  rcm_comm0: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  rcm_comm1: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  rcm_comm2: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  sigma_comm0: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  sigma_comm1: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  sigma_comm2: WasmPastaVestaPolyComm;
}
/**
*/
export class WasmPastaFpPlonkVerificationShifts {
  free(): void;
/**
* @param {Uint8Array} r
* @param {Uint8Array} o
*/
  constructor(r: Uint8Array, o: Uint8Array);
/**
*/
  o: Uint8Array;
/**
*/
  r: Uint8Array;
}
/**
*/
export class WasmPastaFpPlonkVerifierIndex {
  free(): void;
/**
* @param {WasmPastaFpPlonkDomain} domain
* @param {number} max_poly_size
* @param {number} max_quot_size
* @param {WasmPastaFpUrs} urs
* @param {WasmPastaFpPlonkVerificationEvals} evals
* @param {WasmPastaFpPlonkVerificationShifts} shifts
*/
  constructor(domain: WasmPastaFpPlonkDomain, max_poly_size: number, max_quot_size: number, urs: WasmPastaFpUrs, evals: WasmPastaFpPlonkVerificationEvals, shifts: WasmPastaFpPlonkVerificationShifts);
/**
*/
  domain: WasmPastaFpPlonkDomain;
/**
* @returns {WasmPastaFpPlonkVerificationEvals}
*/
  evals: WasmPastaFpPlonkVerificationEvals;
/**
*/
  max_poly_size: number;
/**
*/
  max_quot_size: number;
/**
*/
  shifts: WasmPastaFpPlonkVerificationShifts;
/**
* @returns {WasmPastaFpUrs}
*/
  urs: WasmPastaFpUrs;
}
/**
*/
export class WasmPastaFpProofEvaluations {
  free(): void;
/**
* @param {Uint8Array} l
* @param {Uint8Array} r
* @param {Uint8Array} o
* @param {Uint8Array} z
* @param {Uint8Array} t
* @param {Uint8Array} f
* @param {Uint8Array} sigma1
* @param {Uint8Array} sigma2
*/
  constructor(l: Uint8Array, r: Uint8Array, o: Uint8Array, z: Uint8Array, t: Uint8Array, f: Uint8Array, sigma1: Uint8Array, sigma2: Uint8Array);
/**
* @returns {Uint8Array}
*/
  f: Uint8Array;
/**
* @returns {Uint8Array}
*/
  l: Uint8Array;
/**
* @returns {Uint8Array}
*/
  o: Uint8Array;
/**
* @returns {Uint8Array}
*/
  r: Uint8Array;
/**
* @returns {Uint8Array}
*/
  sigma1: Uint8Array;
/**
* @returns {Uint8Array}
*/
  sigma2: Uint8Array;
/**
* @returns {Uint8Array}
*/
  t: Uint8Array;
/**
* @returns {Uint8Array}
*/
  z: Uint8Array;
}
/**
*/
export class WasmPastaFpProverCommitments {
  free(): void;
/**
* @param {WasmPastaVestaPolyComm} l_comm
* @param {WasmPastaVestaPolyComm} r_comm
* @param {WasmPastaVestaPolyComm} o_comm
* @param {WasmPastaVestaPolyComm} z_comm
* @param {WasmPastaVestaPolyComm} t_comm
*/
  constructor(l_comm: WasmPastaVestaPolyComm, r_comm: WasmPastaVestaPolyComm, o_comm: WasmPastaVestaPolyComm, z_comm: WasmPastaVestaPolyComm, t_comm: WasmPastaVestaPolyComm);
/**
* @returns {WasmPastaVestaPolyComm}
*/
  l_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  o_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  r_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  t_comm: WasmPastaVestaPolyComm;
/**
* @returns {WasmPastaVestaPolyComm}
*/
  z_comm: WasmPastaVestaPolyComm;
}
/**
*/
export class WasmPastaFpProverProof {
  free(): void;
/**
* @param {WasmPastaFpProverCommitments} commitments
* @param {WasmPastaFpOpeningProof} proof
* @param {WasmPastaFpProofEvaluations} evals0
* @param {WasmPastaFpProofEvaluations} evals1
* @param {Uint8Array} public_
* @param {WasmVecVecPastaFp} prev_challenges_scalars
* @param {Uint32Array} prev_challenges_comms
*/
  constructor(commitments: WasmPastaFpProverCommitments, proof: WasmPastaFpOpeningProof, evals0: WasmPastaFpProofEvaluations, evals1: WasmPastaFpProofEvaluations, public_: Uint8Array, prev_challenges_scalars: WasmVecVecPastaFp, prev_challenges_comms: Uint32Array);
/**
* @returns {WasmPastaFpProverCommitments}
*/
  commitments: WasmPastaFpProverCommitments;
/**
* @returns {WasmPastaFpProofEvaluations}
*/
  evals0: WasmPastaFpProofEvaluations;
/**
* @returns {WasmPastaFpProofEvaluations}
*/
  evals1: WasmPastaFpProofEvaluations;
/**
* @returns {Uint32Array}
*/
  prev_challenges_comms: Uint32Array;
/**
* @returns {WasmVecVecPastaFp}
*/
  prev_challenges_scalars: WasmVecVecPastaFp;
/**
* @returns {WasmPastaFpOpeningProof}
*/
  proof: WasmPastaFpOpeningProof;
/**
* @returns {Uint8Array}
*/
  public_: Uint8Array;
}
/**
*/
export class WasmPastaFpUrs {
  free(): void;
}
/**
*/
export class WasmPastaFqOpeningProof {
  free(): void;
/**
* @param {Uint32Array} lr_0
* @param {Uint32Array} lr_1
* @param {WasmPallasGAffine} delta
* @param {Uint8Array} z1
* @param {Uint8Array} z2
* @param {WasmPallasGAffine} sg
*/
  constructor(lr_0: Uint32Array, lr_1: Uint32Array, delta: WasmPallasGAffine, z1: Uint8Array, z2: Uint8Array, sg: WasmPallasGAffine);
/**
* @returns {WasmPallasGAffine}
*/
  delta: WasmPallasGAffine;
/**
* @returns {Uint32Array}
*/
  lr_0: Uint32Array;
/**
* @returns {Uint32Array}
*/
  lr_1: Uint32Array;
/**
* @returns {WasmPallasGAffine}
*/
  sg: WasmPallasGAffine;
/**
*/
  z1: Uint8Array;
/**
*/
  z2: Uint8Array;
}
/**
*/
export class WasmPastaFqPlonkDomain {
  free(): void;
/**
* @param {number} log_size_of_group
* @param {Uint8Array} group_gen
*/
  constructor(log_size_of_group: number, group_gen: Uint8Array);
/**
*/
  group_gen: Uint8Array;
/**
*/
  log_size_of_group: number;
}
/**
*/
export class WasmPastaFqPlonkGate {
  free(): void;
/**
* @param {number} typ
* @param {WasmPlonkWires} wires
* @param {Uint8Array} c
*/
  constructor(typ: number, wires: WasmPlonkWires, c: Uint8Array);
/**
* @returns {Uint8Array}
*/
  c: Uint8Array;
/**
*/
  typ: number;
/**
*/
  wires: WasmPlonkWires;
}
/**
*/
export class WasmPastaFqPlonkGateVector {
  free(): void;
}
/**
*/
export class WasmPastaFqPlonkIndex {
  free(): void;
}
/**
*/
export class WasmPastaFqPlonkOracles {
  free(): void;
/**
* @param {Uint8Array} o
* @param {Uint8Array} p_eval0
* @param {Uint8Array} p_eval1
* @param {Uint8Array} opening_prechallenges
* @param {Uint8Array} digest_before_evaluations
*/
  constructor(o: Uint8Array, p_eval0: Uint8Array, p_eval1: Uint8Array, opening_prechallenges: Uint8Array, digest_before_evaluations: Uint8Array);
/**
*/
  digest_before_evaluations: Uint8Array;
/**
*/
  o: Uint8Array;
/**
* @returns {Uint8Array}
*/
  opening_prechallenges: Uint8Array;
/**
*/
  p_eval0: Uint8Array;
/**
*/
  p_eval1: Uint8Array;
}
/**
*/
export class WasmPastaFqPlonkVerificationEvals {
  free(): void;
/**
* @param {WasmPastaPallasPolyComm} sigma_comm0
* @param {WasmPastaPallasPolyComm} sigma_comm1
* @param {WasmPastaPallasPolyComm} sigma_comm2
* @param {WasmPastaPallasPolyComm} ql_comm
* @param {WasmPastaPallasPolyComm} qr_comm
* @param {WasmPastaPallasPolyComm} qo_comm
* @param {WasmPastaPallasPolyComm} qm_comm
* @param {WasmPastaPallasPolyComm} qc_comm
* @param {WasmPastaPallasPolyComm} rcm_comm0
* @param {WasmPastaPallasPolyComm} rcm_comm1
* @param {WasmPastaPallasPolyComm} rcm_comm2
* @param {WasmPastaPallasPolyComm} psm_comm
* @param {WasmPastaPallasPolyComm} add_comm
* @param {WasmPastaPallasPolyComm} mul1_comm
* @param {WasmPastaPallasPolyComm} mul2_comm
* @param {WasmPastaPallasPolyComm} emul1_comm
* @param {WasmPastaPallasPolyComm} emul2_comm
* @param {WasmPastaPallasPolyComm} emul3_comm
*/
  constructor(sigma_comm0: WasmPastaPallasPolyComm, sigma_comm1: WasmPastaPallasPolyComm, sigma_comm2: WasmPastaPallasPolyComm, ql_comm: WasmPastaPallasPolyComm, qr_comm: WasmPastaPallasPolyComm, qo_comm: WasmPastaPallasPolyComm, qm_comm: WasmPastaPallasPolyComm, qc_comm: WasmPastaPallasPolyComm, rcm_comm0: WasmPastaPallasPolyComm, rcm_comm1: WasmPastaPallasPolyComm, rcm_comm2: WasmPastaPallasPolyComm, psm_comm: WasmPastaPallasPolyComm, add_comm: WasmPastaPallasPolyComm, mul1_comm: WasmPastaPallasPolyComm, mul2_comm: WasmPastaPallasPolyComm, emul1_comm: WasmPastaPallasPolyComm, emul2_comm: WasmPastaPallasPolyComm, emul3_comm: WasmPastaPallasPolyComm);
/**
* @returns {WasmPastaPallasPolyComm}
*/
  add_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  emul1_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  emul2_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  emul3_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  mul1_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  mul2_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  psm_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  qc_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  ql_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  qm_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  qo_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  qr_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  rcm_comm0: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  rcm_comm1: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  rcm_comm2: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  sigma_comm0: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  sigma_comm1: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  sigma_comm2: WasmPastaPallasPolyComm;
}
/**
*/
export class WasmPastaFqPlonkVerificationShifts {
  free(): void;
/**
* @param {Uint8Array} r
* @param {Uint8Array} o
*/
  constructor(r: Uint8Array, o: Uint8Array);
/**
*/
  o: Uint8Array;
/**
*/
  r: Uint8Array;
}
/**
*/
export class WasmPastaFqPlonkVerifierIndex {
  free(): void;
/**
* @param {WasmPastaFqPlonkDomain} domain
* @param {number} max_poly_size
* @param {number} max_quot_size
* @param {WasmPastaFqUrs} urs
* @param {WasmPastaFqPlonkVerificationEvals} evals
* @param {WasmPastaFqPlonkVerificationShifts} shifts
*/
  constructor(domain: WasmPastaFqPlonkDomain, max_poly_size: number, max_quot_size: number, urs: WasmPastaFqUrs, evals: WasmPastaFqPlonkVerificationEvals, shifts: WasmPastaFqPlonkVerificationShifts);
/**
*/
  domain: WasmPastaFqPlonkDomain;
/**
* @returns {WasmPastaFqPlonkVerificationEvals}
*/
  evals: WasmPastaFqPlonkVerificationEvals;
/**
*/
  max_poly_size: number;
/**
*/
  max_quot_size: number;
/**
*/
  shifts: WasmPastaFqPlonkVerificationShifts;
/**
* @returns {WasmPastaFqUrs}
*/
  urs: WasmPastaFqUrs;
}
/**
*/
export class WasmPastaFqProofEvaluations {
  free(): void;
/**
* @param {Uint8Array} l
* @param {Uint8Array} r
* @param {Uint8Array} o
* @param {Uint8Array} z
* @param {Uint8Array} t
* @param {Uint8Array} f
* @param {Uint8Array} sigma1
* @param {Uint8Array} sigma2
*/
  constructor(l: Uint8Array, r: Uint8Array, o: Uint8Array, z: Uint8Array, t: Uint8Array, f: Uint8Array, sigma1: Uint8Array, sigma2: Uint8Array);
/**
* @returns {Uint8Array}
*/
  f: Uint8Array;
/**
* @returns {Uint8Array}
*/
  l: Uint8Array;
/**
* @returns {Uint8Array}
*/
  o: Uint8Array;
/**
* @returns {Uint8Array}
*/
  r: Uint8Array;
/**
* @returns {Uint8Array}
*/
  sigma1: Uint8Array;
/**
* @returns {Uint8Array}
*/
  sigma2: Uint8Array;
/**
* @returns {Uint8Array}
*/
  t: Uint8Array;
/**
* @returns {Uint8Array}
*/
  z: Uint8Array;
}
/**
*/
export class WasmPastaFqProverCommitments {
  free(): void;
/**
* @param {WasmPastaPallasPolyComm} l_comm
* @param {WasmPastaPallasPolyComm} r_comm
* @param {WasmPastaPallasPolyComm} o_comm
* @param {WasmPastaPallasPolyComm} z_comm
* @param {WasmPastaPallasPolyComm} t_comm
*/
  constructor(l_comm: WasmPastaPallasPolyComm, r_comm: WasmPastaPallasPolyComm, o_comm: WasmPastaPallasPolyComm, z_comm: WasmPastaPallasPolyComm, t_comm: WasmPastaPallasPolyComm);
/**
* @returns {WasmPastaPallasPolyComm}
*/
  l_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  o_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  r_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  t_comm: WasmPastaPallasPolyComm;
/**
* @returns {WasmPastaPallasPolyComm}
*/
  z_comm: WasmPastaPallasPolyComm;
}
/**
*/
export class WasmPastaFqProverProof {
  free(): void;
/**
* @param {WasmPastaFqProverCommitments} commitments
* @param {WasmPastaFqOpeningProof} proof
* @param {WasmPastaFqProofEvaluations} evals0
* @param {WasmPastaFqProofEvaluations} evals1
* @param {Uint8Array} public_
* @param {WasmVecVecPastaFq} prev_challenges_scalars
* @param {Uint32Array} prev_challenges_comms
*/
  constructor(commitments: WasmPastaFqProverCommitments, proof: WasmPastaFqOpeningProof, evals0: WasmPastaFqProofEvaluations, evals1: WasmPastaFqProofEvaluations, public_: Uint8Array, prev_challenges_scalars: WasmVecVecPastaFq, prev_challenges_comms: Uint32Array);
/**
* @returns {WasmPastaFqProverCommitments}
*/
  commitments: WasmPastaFqProverCommitments;
/**
* @returns {WasmPastaFqProofEvaluations}
*/
  evals0: WasmPastaFqProofEvaluations;
/**
* @returns {WasmPastaFqProofEvaluations}
*/
  evals1: WasmPastaFqProofEvaluations;
/**
* @returns {Uint32Array}
*/
  prev_challenges_comms: Uint32Array;
/**
* @returns {WasmVecVecPastaFq}
*/
  prev_challenges_scalars: WasmVecVecPastaFq;
/**
* @returns {WasmPastaFqOpeningProof}
*/
  proof: WasmPastaFqOpeningProof;
/**
* @returns {Uint8Array}
*/
  public_: Uint8Array;
}
/**
*/
export class WasmPastaFqUrs {
  free(): void;
}
/**
*/
export class WasmPastaPallasPolyComm {
  free(): void;
/**
* @param {Uint32Array} unshifted
* @param {WasmPallasGAffine | undefined} shifted
*/
  constructor(unshifted: Uint32Array, shifted?: WasmPallasGAffine);
/**
*/
  shifted?: WasmPallasGAffine;
/**
* @returns {Uint32Array}
*/
  unshifted: Uint32Array;
}
/**
*/
export class WasmPastaVestaPolyComm {
  free(): void;
/**
* @param {Uint32Array} unshifted
* @param {WasmVestaGAffine | undefined} shifted
*/
  constructor(unshifted: Uint32Array, shifted?: WasmVestaGAffine);
/**
*/
  shifted?: WasmVestaGAffine;
/**
* @returns {Uint32Array}
*/
  unshifted: Uint32Array;
}
/**
*/
export class WasmPlonkWire {
  free(): void;
/**
* @param {number} row
* @param {number} col
*/
  constructor(row: number, col: number);
/**
*/
  col: number;
/**
*/
  row: number;
}
/**
*/
export class WasmPlonkWires {
  free(): void;
/**
* @param {number} row
* @param {WasmPlonkWire} l
* @param {WasmPlonkWire} r
* @param {WasmPlonkWire} o
*/
  constructor(row: number, l: WasmPlonkWire, r: WasmPlonkWire, o: WasmPlonkWire);
/**
*/
  l: WasmPlonkWire;
/**
*/
  o: WasmPlonkWire;
/**
*/
  r: WasmPlonkWire;
/**
*/
  row: number;
}
/**
*/
export class WasmVecVecPallasPolyComm {
  free(): void;
/**
* @param {number} n
*/
  constructor(n: number);
/**
* @param {Uint32Array} x
*/
  push(x: Uint32Array): void;
}
/**
*/
export class WasmVecVecPastaFp {
  free(): void;
/**
* @param {number} n
*/
  constructor(n: number);
/**
* @param {Uint8Array} x
*/
  push(x: Uint8Array): void;
/**
* @param {number} i
* @returns {Uint8Array}
*/
  get(i: number): Uint8Array;
/**
* @param {number} i
* @param {Uint8Array} x
*/
  set(i: number, x: Uint8Array): void;
}
/**
*/
export class WasmVecVecPastaFq {
  free(): void;
/**
* @param {number} n
*/
  constructor(n: number);
/**
* @param {Uint8Array} x
*/
  push(x: Uint8Array): void;
/**
* @param {number} i
* @returns {Uint8Array}
*/
  get(i: number): Uint8Array;
/**
* @param {number} i
* @param {Uint8Array} x
*/
  set(i: number, x: Uint8Array): void;
}
/**
*/
export class WasmVecVecVestaPolyComm {
  free(): void;
/**
* @param {number} n
*/
  constructor(n: number);
/**
* @param {Uint32Array} x
*/
  push(x: Uint32Array): void;
}
/**
*/
export class WasmVestaGAffine {
  free(): void;
/**
*/
  infinity: boolean;
/**
*/
  x: Uint8Array;
/**
*/
  y: Uint8Array;
}
/**
*/
export class WasmVestaGProjective {
  free(): void;
}
/**
*/
export class wbg_rayon_PoolBuilder {
  free(): void;
/**
* @returns {string}
*/
  mainJS(): string;
/**
* @returns {number}
*/
  numThreads(): number;
/**
* @returns {number}
*/
  receiver(): number;
/**
*/
  build(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly __wasm_init_memory: () => void;
  readonly __wbg_wasmpastafpproofevaluations_free: (a: number) => void;
  readonly wasmpastafpproofevaluations_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => number;
  readonly wasmpastafpproofevaluations_l: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_r: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_o: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_z: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_t: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_f: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_sigma1: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_sigma2: (a: number, b: number) => void;
  readonly wasmpastafpproofevaluations_set_l: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_r: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_o: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_z: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_t: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_f: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_sigma1: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproofevaluations_set_sigma2: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmpastafpopeningproof_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpopeningproof_z1: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpopeningproof_z1: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafpopeningproof_z2: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpopeningproof_z2: (a: number, b: number, c: number) => void;
  readonly wasmpastafpopeningproof_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly wasmpastafpopeningproof_lr_0: (a: number, b: number) => void;
  readonly wasmpastafpopeningproof_lr_1: (a: number, b: number) => void;
  readonly wasmpastafpopeningproof_delta: (a: number) => number;
  readonly wasmpastafpopeningproof_sg: (a: number) => number;
  readonly wasmpastafpopeningproof_set_lr_0: (a: number, b: number, c: number) => void;
  readonly wasmpastafpopeningproof_set_lr_1: (a: number, b: number, c: number) => void;
  readonly wasmpastafpopeningproof_set_delta: (a: number, b: number) => void;
  readonly wasmpastafpopeningproof_set_sg: (a: number, b: number) => void;
  readonly __wbg_wasmpastafpprovercommitments_free: (a: number) => void;
  readonly wasmpastafpprovercommitments_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly wasmpastafpprovercommitments_l_comm: (a: number) => number;
  readonly wasmpastafpprovercommitments_r_comm: (a: number) => number;
  readonly wasmpastafpprovercommitments_o_comm: (a: number) => number;
  readonly wasmpastafpprovercommitments_z_comm: (a: number) => number;
  readonly wasmpastafpprovercommitments_t_comm: (a: number) => number;
  readonly wasmpastafpprovercommitments_set_l_comm: (a: number, b: number) => void;
  readonly wasmpastafpprovercommitments_set_r_comm: (a: number, b: number) => void;
  readonly wasmpastafpprovercommitments_set_o_comm: (a: number, b: number) => void;
  readonly wasmpastafpprovercommitments_set_z_comm: (a: number, b: number) => void;
  readonly wasmpastafpprovercommitments_set_t_comm: (a: number, b: number) => void;
  readonly __wbg_wasmvecvecpastafp_free: (a: number) => void;
  readonly wasmvecvecpastafp_push: (a: number, b: number, c: number) => void;
  readonly wasmvecvecpastafp_get: (a: number, b: number, c: number) => void;
  readonly wasmvecvecpastafp_set: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_wasmpastafpproverproof_free: (a: number) => void;
  readonly wasmpastafpproverproof_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly wasmpastafpproverproof_commitments: (a: number) => number;
  readonly wasmpastafpproverproof_proof: (a: number) => number;
  readonly wasmpastafpproverproof_evals0: (a: number) => number;
  readonly wasmpastafpproverproof_evals1: (a: number) => number;
  readonly wasmpastafpproverproof_public_: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_prev_challenges_scalars: (a: number) => number;
  readonly wasmpastafpproverproof_prev_challenges_comms: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_commitments: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_proof: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_evals0: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_evals1: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_public_: (a: number, b: number, c: number) => void;
  readonly wasmpastafpproverproof_set_prev_challenges_scalars: (a: number, b: number) => void;
  readonly wasmpastafpproverproof_set_prev_challenges_comms: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_plonk_proof_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly caml_pasta_fp_plonk_proof_verify: (a: number, b: number, c: number, d: number) => number;
  readonly wasmvecvecvestapolycomm_push: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_plonk_proof_batch_verify: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fp_plonk_proof_dummy: () => number;
  readonly caml_pasta_fp_plonk_proof_deep_copy: (a: number) => number;
  readonly wasmpastafqproofevaluations_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => number;
  readonly wasmpastafqproofevaluations_l: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_r: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_o: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_z: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_t: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_f: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_sigma1: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_sigma2: (a: number, b: number) => void;
  readonly wasmpastafqproofevaluations_set_l: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_r: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_o: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_z: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_t: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_f: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_sigma1: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproofevaluations_set_sigma2: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafqopeningproof_z1: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqopeningproof_z1: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafqopeningproof_z2: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqopeningproof_z2: (a: number, b: number, c: number) => void;
  readonly wasmpastafqopeningproof_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly wasmpastafqopeningproof_lr_0: (a: number, b: number) => void;
  readonly wasmpastafqopeningproof_lr_1: (a: number, b: number) => void;
  readonly wasmpastafqopeningproof_set_lr_0: (a: number, b: number, c: number) => void;
  readonly wasmpastafqopeningproof_set_lr_1: (a: number, b: number, c: number) => void;
  readonly wasmvecvecpastafq_push: (a: number, b: number, c: number) => void;
  readonly wasmvecvecpastafq_get: (a: number, b: number, c: number) => void;
  readonly wasmvecvecpastafq_set: (a: number, b: number, c: number, d: number) => void;
  readonly wasmpastafqproverproof_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly wasmpastafqproverproof_public_: (a: number, b: number) => void;
  readonly wasmpastafqproverproof_prev_challenges_scalars: (a: number) => number;
  readonly wasmpastafqproverproof_prev_challenges_comms: (a: number, b: number) => void;
  readonly wasmpastafqproverproof_set_public_: (a: number, b: number, c: number) => void;
  readonly wasmpastafqproverproof_set_prev_challenges_comms: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_plonk_proof_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly caml_pasta_fq_plonk_proof_verify: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_wasmvecvecpallaspolycomm_free: (a: number) => void;
  readonly wasmvecvecpallaspolycomm_create: (a: number) => number;
  readonly wasmvecvecpallaspolycomm_push: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_plonk_proof_batch_verify: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fq_plonk_proof_dummy: () => number;
  readonly wasmpastafqopeningproof_set_delta: (a: number, b: number) => void;
  readonly wasmpastafqprovercommitments_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly wasmpastafqopeningproof_set_sg: (a: number, b: number) => void;
  readonly wasmpastafqproverproof_evals0: (a: number) => number;
  readonly wasmpastafqproverproof_evals1: (a: number) => number;
  readonly wasmpastafqproverproof_commitments: (a: number) => number;
  readonly wasmpastafqprovercommitments_r_comm: (a: number) => number;
  readonly wasmpastafqprovercommitments_o_comm: (a: number) => number;
  readonly wasmpastafqprovercommitments_z_comm: (a: number) => number;
  readonly wasmpastafqprovercommitments_t_comm: (a: number) => number;
  readonly wasmpastafqopeningproof_delta: (a: number) => number;
  readonly __wbg_wasmpastafqproofevaluations_free: (a: number) => void;
  readonly __wbg_wasmpastafqopeningproof_free: (a: number) => void;
  readonly wasmpastafqprovercommitments_set_r_comm: (a: number, b: number) => void;
  readonly wasmpastafqprovercommitments_set_o_comm: (a: number, b: number) => void;
  readonly wasmpastafqprovercommitments_set_z_comm: (a: number, b: number) => void;
  readonly wasmpastafqprovercommitments_set_t_comm: (a: number, b: number) => void;
  readonly wasmpastafqprovercommitments_l_comm: (a: number) => number;
  readonly wasmpastafqproverproof_set_commitments: (a: number, b: number) => void;
  readonly wasmpastafqopeningproof_sg: (a: number) => number;
  readonly __wbg_wasmvecvecvestapolycomm_free: (a: number) => void;
  readonly __wbg_wasmpastafqprovercommitments_free: (a: number) => void;
  readonly wasmpastafqproverproof_set_prev_challenges_scalars: (a: number, b: number) => void;
  readonly __wbg_wasmpastafqproverproof_free: (a: number) => void;
  readonly wasmpastafqproverproof_set_proof: (a: number, b: number) => void;
  readonly caml_pasta_fq_plonk_proof_deep_copy: (a: number) => number;
  readonly wasmpastafqprovercommitments_set_l_comm: (a: number, b: number) => void;
  readonly __wbg_wasmvecvecpastafq_free: (a: number) => void;
  readonly wasmpastafqproverproof_set_evals0: (a: number, b: number) => void;
  readonly wasmpastafqproverproof_set_evals1: (a: number, b: number) => void;
  readonly wasmvecvecvestapolycomm_create: (a: number) => number;
  readonly wasmvecvecpastafq_create: (a: number) => number;
  readonly wasmvecvecpastafp_create: (a: number) => number;
  readonly wasmpastafqproverproof_proof: (a: number) => number;
  readonly caml_pasta_fp_size_in_bits: () => number;
  readonly caml_pasta_fp_size: (a: number) => void;
  readonly caml_pasta_fp_add: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fp_sub: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fp_negate: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_mul: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fp_div: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fp_inv: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_square: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_is_square: (a: number, b: number) => number;
  readonly caml_pasta_fp_sqrt: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_of_int: (a: number, b: number) => void;
  readonly caml_pasta_fp_to_string: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_of_string: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_print: (a: number, b: number) => void;
  readonly caml_pasta_fp_compare: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fp_equal: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fp_random: (a: number) => void;
  readonly caml_pasta_fp_rng: (a: number, b: number) => void;
  readonly caml_pasta_fp_to_bigint: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_of_bigint: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_two_adic_root_of_unity: (a: number) => void;
  readonly caml_pasta_fp_domain_generator: (a: number, b: number) => void;
  readonly caml_pasta_fp_to_bytes: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_of_bytes: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_deep_copy: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_size: (a: number) => void;
  readonly caml_pasta_fq_add: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fq_sub: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fq_negate: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_mul: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fq_div: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_pasta_fq_inv: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_square: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_is_square: (a: number, b: number) => number;
  readonly caml_pasta_fq_sqrt: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_of_int: (a: number, b: number) => void;
  readonly caml_pasta_fq_to_string: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_of_string: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_print: (a: number, b: number) => void;
  readonly caml_pasta_fq_compare: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fq_equal: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fq_random: (a: number) => void;
  readonly caml_pasta_fq_rng: (a: number, b: number) => void;
  readonly caml_pasta_fq_to_bigint: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_of_bigint: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_two_adic_root_of_unity: (a: number) => void;
  readonly caml_pasta_fq_domain_generator: (a: number, b: number) => void;
  readonly caml_pasta_fq_to_bytes: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_of_bytes: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_deep_copy: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmpastafpplonkoracles_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpplonkoracles_o: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkoracles_o: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafpplonkoracles_p_eval0: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkoracles_p_eval0: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafpplonkoracles_p_eval1: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkoracles_p_eval1: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafpplonkoracles_digest_before_evaluations: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkoracles_digest_before_evaluations: (a: number, b: number, c: number) => void;
  readonly wasmpastafpplonkoracles_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly wasmpastafpplonkoracles_opening_prechallenges: (a: number, b: number) => void;
  readonly wasmpastafpplonkoracles_set_opening_prechallenges: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_plonk_oracles_create: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fp_plonk_oracles_dummy: () => number;
  readonly caml_pasta_fp_plonk_oracles_deep_copy: (a: number) => number;
  readonly __wbg_get_wasmpastafqplonkoracles_o: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkoracles_o: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafqplonkoracles_p_eval0: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkoracles_p_eval0: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafqplonkoracles_p_eval1: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkoracles_p_eval1: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpastafqplonkoracles_digest_before_evaluations: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkoracles_digest_before_evaluations: (a: number, b: number, c: number) => void;
  readonly wasmpastafqplonkoracles_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly wasmpastafqplonkoracles_opening_prechallenges: (a: number, b: number) => void;
  readonly wasmpastafqplonkoracles_set_opening_prechallenges: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_plonk_oracles_create: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_wasmpastafqplonkoracles_free: (a: number) => void;
  readonly caml_pasta_fq_plonk_oracles_dummy: () => number;
  readonly caml_pasta_fq_plonk_oracles_deep_copy: (a: number) => number;
  readonly caml_pasta_fq_size_in_bits: () => number;
  readonly __wbg_wasmpastafpplonkdomain_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpplonkdomain_log_size_of_group: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkdomain_log_size_of_group: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafpplonkdomain_group_gen: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkdomain_group_gen: (a: number, b: number, c: number) => void;
  readonly wasmpastafpplonkdomain_new: (a: number, b: number, c: number) => number;
  readonly __wbg_wasmpastafpplonkverificationevals_free: (a: number) => void;
  readonly wasmpastafpplonkverificationevals_sigma_comm0: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_sigma_comm1: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_sigma_comm2: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_ql_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_qr_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_qo_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_qm_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_qc_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_rcm_comm0: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_rcm_comm1: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_rcm_comm2: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_psm_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_add_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_mul1_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_mul2_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_emul1_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_emul2_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_emul3_comm: (a: number) => number;
  readonly wasmpastafpplonkverificationevals_set_sigma_comm0: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_sigma_comm1: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_sigma_comm2: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_ql_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_qr_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_qo_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_qm_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_qc_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_rcm_comm0: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_rcm_comm1: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_rcm_comm2: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_psm_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_add_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_mul1_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_mul2_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_emul1_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_emul2_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_set_emul3_comm: (a: number, b: number) => void;
  readonly wasmpastafpplonkverificationevals_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number) => number;
  readonly __wbg_wasmpastafpplonkverificationshifts_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpplonkverificationshifts_o: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafpplonkverificationshifts_o: (a: number, b: number, c: number) => void;
  readonly wasmpastafpplonkverificationshifts_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_wasmpastafpplonkverifierindex_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpplonkverifierindex_domain: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkverifierindex_domain: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafpplonkverifierindex_max_poly_size: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkverifierindex_max_poly_size: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafpplonkverifierindex_max_quot_size: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkverifierindex_max_quot_size: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafpplonkverifierindex_shifts: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkverifierindex_shifts: (a: number, b: number) => void;
  readonly wasmpastafpplonkverifierindex_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly wasmpastafpplonkverifierindex_urs: (a: number) => number;
  readonly wasmpastafpplonkverifierindex_set_urs: (a: number, b: number) => void;
  readonly wasmpastafpplonkverifierindex_evals: (a: number) => number;
  readonly wasmpastafpplonkverifierindex_set_evals: (a: number, b: number) => void;
  readonly caml_pasta_fp_plonk_verifier_index_read: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fp_plonk_verifier_index_write: (a: number, b: number, c: number, d: number) => void;
  readonly caml_pasta_fp_plonk_verifier_index_create: (a: number) => number;
  readonly caml_pasta_fp_plonk_verifier_index_shifts: (a: number) => number;
  readonly caml_pasta_fp_plonk_verifier_index_dummy: () => number;
  readonly caml_pasta_fp_plonk_verifier_index_deep_copy: (a: number) => number;
  readonly __wbg_get_wasmpastafqplonkdomain_group_gen: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkdomain_group_gen: (a: number, b: number, c: number) => void;
  readonly wasmpastafqplonkdomain_new: (a: number, b: number, c: number) => number;
  readonly __wbg_wasmpastafqplonkverificationevals_free: (a: number) => void;
  readonly __wbg_get_wasmpastafqplonkverificationshifts_o: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkverificationshifts_o: (a: number, b: number, c: number) => void;
  readonly wasmpastafqplonkverificationshifts_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_wasmpastafqplonkverifierindex_free: (a: number) => void;
  readonly wasmpastafqplonkverifierindex_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly wasmpastafqplonkverifierindex_evals: (a: number) => number;
  readonly wasmpastafqplonkverifierindex_set_evals: (a: number, b: number) => void;
  readonly caml_pasta_fq_plonk_verifier_index_read: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fq_plonk_verifier_index_write: (a: number, b: number, c: number, d: number) => void;
  readonly caml_pasta_fq_plonk_verifier_index_create: (a: number) => number;
  readonly caml_pasta_fq_plonk_verifier_index_shifts: (a: number) => number;
  readonly caml_pasta_fq_plonk_verifier_index_dummy: () => number;
  readonly caml_pasta_fq_plonk_verifier_index_deep_copy: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_sigma_comm1: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_sigma_comm2: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_ql_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_qr_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_qo_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_qm_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_qc_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_rcm_comm0: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_rcm_comm1: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_rcm_comm2: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_psm_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_add_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_mul1_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_mul2_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_emul1_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_emul2_comm: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_emul3_comm: (a: number) => number;
  readonly __wbg_set_wasmpastafqplonkdomain_log_size_of_group: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkverifierindex_max_poly_size: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafqplonkverifierindex_shifts: (a: number) => number;
  readonly __wbg_get_wasmpastafqplonkverifierindex_max_quot_size: (a: number) => number;
  readonly wasmpastafqplonkverifierindex_urs: (a: number) => number;
  readonly wasmpastafqplonkverificationevals_set_sigma_comm1: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_sigma_comm2: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_ql_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_qr_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_qo_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_qm_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_qc_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_rcm_comm0: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_rcm_comm1: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_rcm_comm2: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_psm_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_add_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_mul1_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_mul2_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_emul1_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_emul2_comm: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_set_emul3_comm: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkverifierindex_domain: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_sigma_comm0: (a: number) => number;
  readonly __wbg_get_wasmpastafqplonkdomain_log_size_of_group: (a: number) => number;
  readonly __wbg_get_wasmpastafqplonkverifierindex_max_poly_size: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkverificationshifts_r: (a: number, b: number, c: number) => void;
  readonly __wbg_set_wasmpastafqplonkverificationshifts_r: (a: number, b: number, c: number) => void;
  readonly wasmpastafqplonkverificationevals_set_sigma_comm0: (a: number, b: number) => void;
  readonly __wbg_set_wasmpastafqplonkverifierindex_shifts: (a: number, b: number) => void;
  readonly __wbg_wasmpastafqplonkdomain_free: (a: number) => void;
  readonly __wbg_wasmpastafqplonkverificationshifts_free: (a: number) => void;
  readonly __wbg_set_wasmpastafqplonkverifierindex_max_quot_size: (a: number, b: number) => void;
  readonly wasmpastafqplonkverifierindex_set_urs: (a: number, b: number) => void;
  readonly wasmpastafqplonkverificationevals_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number) => number;
  readonly __wbg_get_wasmpastafpplonkverificationshifts_r: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafqplonkverificationshifts_r: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafqplonkverifierindex_domain: (a: number) => number;
  readonly __wbg_wasmpallasgprojective_free: (a: number) => void;
  readonly __wbg_wasmpallasgaffine_free: (a: number) => void;
  readonly __wbg_get_wasmpallasgaffine_x: (a: number, b: number) => void;
  readonly __wbg_set_wasmpallasgaffine_x: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpallasgaffine_y: (a: number, b: number) => void;
  readonly __wbg_set_wasmpallasgaffine_y: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmpallasgaffine_infinity: (a: number) => number;
  readonly __wbg_set_wasmpallasgaffine_infinity: (a: number, b: number) => void;
  readonly caml_pasta_pallas_one: () => number;
  readonly caml_pasta_pallas_add: (a: number, b: number) => number;
  readonly caml_pasta_pallas_sub: (a: number, b: number) => number;
  readonly caml_pasta_pallas_negate: (a: number) => number;
  readonly caml_pasta_pallas_double: (a: number) => number;
  readonly caml_pasta_pallas_scale: (a: number, b: number, c: number) => number;
  readonly caml_pasta_pallas_random: () => number;
  readonly caml_pasta_pallas_rng: (a: number) => number;
  readonly caml_pasta_pallas_endo_base: (a: number) => void;
  readonly caml_pasta_pallas_endo_scalar: (a: number) => void;
  readonly caml_pasta_pallas_to_affine: (a: number) => number;
  readonly caml_pasta_pallas_of_affine: (a: number) => number;
  readonly caml_pasta_pallas_of_affine_coordinates: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_pallas_affine_deep_copy: (a: number) => number;
  readonly caml_pasta_pallas_affine_one: () => number;
  readonly __wbg_get_wasmvestagaffine_x: (a: number, b: number) => void;
  readonly __wbg_set_wasmvestagaffine_x: (a: number, b: number, c: number) => void;
  readonly __wbg_get_wasmvestagaffine_y: (a: number, b: number) => void;
  readonly __wbg_set_wasmvestagaffine_y: (a: number, b: number, c: number) => void;
  readonly caml_pasta_vesta_one: () => number;
  readonly caml_pasta_vesta_add: (a: number, b: number) => number;
  readonly caml_pasta_vesta_sub: (a: number, b: number) => number;
  readonly caml_pasta_vesta_negate: (a: number) => number;
  readonly caml_pasta_vesta_double: (a: number) => number;
  readonly caml_pasta_vesta_scale: (a: number, b: number, c: number) => number;
  readonly caml_pasta_vesta_random: () => number;
  readonly caml_pasta_vesta_rng: (a: number) => number;
  readonly caml_pasta_vesta_endo_base: (a: number) => void;
  readonly caml_pasta_vesta_endo_scalar: (a: number) => void;
  readonly caml_pasta_vesta_to_affine: (a: number) => number;
  readonly caml_pasta_vesta_of_affine: (a: number) => number;
  readonly caml_pasta_vesta_of_affine_coordinates: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_vesta_affine_one: () => number;
  readonly __wbg_set_wasmvestagaffine_infinity: (a: number, b: number) => void;
  readonly __wbg_get_wasmvestagaffine_infinity: (a: number) => number;
  readonly caml_pasta_vesta_affine_deep_copy: (a: number) => number;
  readonly __wbg_wasmvestagprojective_free: (a: number) => void;
  readonly __wbg_wasmvestagaffine_free: (a: number) => void;
  readonly __wbg_wasmpastafpurs_free: (a: number) => void;
  readonly caml_pasta_fp_urs_create: (a: number) => number;
  readonly caml_pasta_fp_urs_write: (a: number, b: number, c: number, d: number) => void;
  readonly caml_pasta_fp_urs_read: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fp_urs_lagrange_commitment: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fp_urs_commit_evaluations: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fp_urs_b_poly_commitment: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fp_urs_batch_accumulator_check: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fp_urs_h: (a: number) => number;
  readonly caml_pasta_fq_urs_create: (a: number) => number;
  readonly caml_pasta_fq_urs_write: (a: number, b: number, c: number, d: number) => void;
  readonly caml_pasta_fq_urs_read: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fq_urs_lagrange_commitment: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fq_urs_commit_evaluations: (a: number, b: number, c: number, d: number) => number;
  readonly caml_pasta_fq_urs_b_poly_commitment: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fq_urs_batch_accumulator_check: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_wasmpastafqplonkgatevector_free: (a: number) => void;
  readonly __wbg_wasmpastafqplonkgate_free: (a: number) => void;
  readonly __wbg_get_wasmpastafqplonkgate_typ: (a: number) => number;
  readonly __wbg_set_wasmpastafqplonkgate_typ: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafqplonkgate_wires: (a: number) => number;
  readonly __wbg_set_wasmpastafqplonkgate_wires: (a: number, b: number) => void;
  readonly wasmpastafqplonkgate_new: (a: number, b: number, c: number, d: number) => number;
  readonly wasmpastafqplonkgate_c: (a: number, b: number) => void;
  readonly wasmpastafqplonkgate_set_c: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fq_plonk_gate_vector_create: () => number;
  readonly caml_pasta_fq_plonk_gate_vector_add: (a: number, b: number) => void;
  readonly caml_pasta_fq_plonk_gate_vector_get: (a: number, b: number) => number;
  readonly caml_pasta_fq_plonk_gate_vector_wrap: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmpastafqplonkindex_free: (a: number) => void;
  readonly caml_pasta_fq_plonk_index_create: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fq_plonk_index_max_degree: (a: number) => number;
  readonly caml_pasta_fq_plonk_index_public_inputs: (a: number) => number;
  readonly caml_pasta_fq_plonk_index_domain_d1_size: (a: number) => number;
  readonly caml_pasta_fq_plonk_index_domain_d4_size: (a: number) => number;
  readonly caml_pasta_fq_plonk_index_domain_d8_size: (a: number) => number;
  readonly caml_pasta_fq_plonk_index_read: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fq_plonk_index_write: (a: number, b: number, c: number, d: number) => void;
  readonly caml_pasta_fq_urs_h: (a: number) => number;
  readonly __wbg_wasmpastafqurs_free: (a: number) => void;
  readonly __wbg_wasmpastafpplonkgatevector_free: (a: number) => void;
  readonly __wbg_wasmpastafpplonkgate_free: (a: number) => void;
  readonly __wbg_get_wasmpastafpplonkgate_typ: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkgate_typ: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastafpplonkgate_wires: (a: number) => number;
  readonly __wbg_set_wasmpastafpplonkgate_wires: (a: number, b: number) => void;
  readonly wasmpastafpplonkgate_new: (a: number, b: number, c: number, d: number) => number;
  readonly wasmpastafpplonkgate_c: (a: number, b: number) => void;
  readonly wasmpastafpplonkgate_set_c: (a: number, b: number, c: number) => void;
  readonly caml_pasta_fp_plonk_gate_vector_create: () => number;
  readonly caml_pasta_fp_plonk_gate_vector_add: (a: number, b: number) => void;
  readonly caml_pasta_fp_plonk_gate_vector_get: (a: number, b: number) => number;
  readonly caml_pasta_fp_plonk_gate_vector_wrap: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmpastafpplonkindex_free: (a: number) => void;
  readonly caml_pasta_fp_plonk_index_create: (a: number, b: number, c: number) => number;
  readonly caml_pasta_fp_plonk_index_max_degree: (a: number) => number;
  readonly caml_pasta_fp_plonk_index_public_inputs: (a: number) => number;
  readonly caml_pasta_fp_plonk_index_domain_d1_size: (a: number) => number;
  readonly caml_pasta_fp_plonk_index_domain_d4_size: (a: number) => number;
  readonly caml_pasta_fp_plonk_index_domain_d8_size: (a: number) => number;
  readonly caml_pasta_fp_plonk_index_read: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly caml_pasta_fp_plonk_index_write: (a: number, b: number, c: number, d: number) => void;
  readonly wasmpastavestapolycomm_new: (a: number, b: number, c: number) => number;
  readonly wasmpastavestapolycomm_unshifted: (a: number, b: number) => void;
  readonly wasmpastavestapolycomm_set_unshifted: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmpastapallaspolycomm_free: (a: number) => void;
  readonly __wbg_get_wasmpastapallaspolycomm_shifted: (a: number) => number;
  readonly __wbg_set_wasmpastapallaspolycomm_shifted: (a: number, b: number) => void;
  readonly wasmpastapallaspolycomm_new: (a: number, b: number, c: number) => number;
  readonly wasmpastapallaspolycomm_unshifted: (a: number, b: number) => void;
  readonly wasmpastapallaspolycomm_set_unshifted: (a: number, b: number, c: number) => void;
  readonly __wbg_wasmplonkwire_free: (a: number) => void;
  readonly __wbg_get_wasmplonkwire_row: (a: number) => number;
  readonly __wbg_set_wasmplonkwire_row: (a: number, b: number) => void;
  readonly __wbg_get_wasmplonkwire_col: (a: number) => number;
  readonly __wbg_set_wasmplonkwire_col: (a: number, b: number) => void;
  readonly wasmplonkwire_new: (a: number, b: number) => number;
  readonly __wbg_wasmplonkwires_free: (a: number) => void;
  readonly __wbg_get_wasmplonkwires_l: (a: number) => number;
  readonly __wbg_set_wasmplonkwires_l: (a: number, b: number) => void;
  readonly __wbg_get_wasmplonkwires_r: (a: number) => number;
  readonly __wbg_set_wasmplonkwires_r: (a: number, b: number) => void;
  readonly __wbg_get_wasmplonkwires_o: (a: number) => number;
  readonly __wbg_set_wasmplonkwires_o: (a: number, b: number) => void;
  readonly wasmplonkwires_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_wasmpastavestapolycomm_free: (a: number) => void;
  readonly __wbg_set_wasmpastavestapolycomm_shifted: (a: number, b: number) => void;
  readonly __wbg_get_wasmpastavestapolycomm_shifted: (a: number) => number;
  readonly __wbg_get_wasmplonkwires_row: (a: number) => number;
  readonly __wbg_set_wasmplonkwires_row: (a: number, b: number) => void;
  readonly caml_bigint_256_of_numeral: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_bigint_256_of_decimal_string: (a: number, b: number, c: number) => void;
  readonly caml_bigint_256_num_limbs: () => number;
  readonly caml_bigint_256_bytes_per_limb: () => number;
  readonly caml_bigint_256_div: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly caml_bigint_256_compare: (a: number, b: number, c: number, d: number) => number;
  readonly caml_bigint_256_print: (a: number, b: number) => void;
  readonly caml_bigint_256_to_string: (a: number, b: number, c: number) => void;
  readonly caml_bigint_256_test_bit: (a: number, b: number, c: number) => number;
  readonly caml_bigint_256_to_bytes: (a: number, b: number, c: number) => void;
  readonly caml_bigint_256_of_bytes: (a: number, b: number, c: number) => void;
  readonly caml_bigint_256_deep_copy: (a: number, b: number, c: number) => void;
  readonly greet: (a: number, b: number) => void;
  readonly console_log: (a: number, b: number) => void;
  readonly create_zero_u32_ptr: () => number;
  readonly free_u32_ptr: (a: number) => void;
  readonly set_u32_ptr: (a: number, b: number) => void;
  readonly wait_until_non_zero: (a: number) => number;
  readonly __wbg_wbg_rayon_poolbuilder_free: (a: number) => void;
  readonly wbg_rayon_poolbuilder_mainJS: (a: number) => number;
  readonly wbg_rayon_poolbuilder_numThreads: (a: number) => number;
  readonly wbg_rayon_poolbuilder_receiver: (a: number) => number;
  readonly wbg_rayon_poolbuilder_build: (a: number) => void;
  readonly initThreadPool: (a: number) => number;
  readonly wbg_rayon_start_worker: (a: number) => void;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>, maybe_memory?: WebAssembly.Memory): Promise<InitOutput>;
