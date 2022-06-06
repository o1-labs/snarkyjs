export default function workerRun() {
  function workerSpec(wasm) {
    let bool = {
      // We avoid returning zero for false to ensure that the
      // wait_until_non_zero call below terminates.
      there: (bool) => (bool ? 2 : 1),
      back: (u32) => u32 !== 1,
    };
    return {
      caml_pasta_fp_plonk_index_create: {
        args: [wasm.WasmFpGateVector, undefined /* number */, wasm.WasmFpSrs],
        res: wasm.WasmPastaFpPlonkIndex,
      },
      caml_pasta_fq_plonk_index_create: {
        args: [wasm.WasmFqGateVector, undefined /* number */, wasm.WasmFqSrs],
        res: wasm.WasmPastaFqPlonkIndex,
      },
      caml_pasta_fp_plonk_verifier_index_create: {
        args: [wasm.WasmPastaFpPlonkIndex],
        res: wasm.WasmFpPlonkVerifierIndex,
      },
      caml_pasta_fq_plonk_verifier_index_create: {
        args: [wasm.WasmPastaFqPlonkIndex],
        res: wasm.WasmFqPlonkVerifierIndex,
      },
      caml_pasta_fp_plonk_proof_create: {
        args: [
          wasm.WasmPastaFpPlonkIndex,
          wasm.WasmVecVecFp,
          undefined /*Uint8Array*/,
          undefined /*Uint32Array*/,
        ],
        res: wasm.WasmFpProverProof,
      },
      caml_pasta_fq_plonk_proof_create: {
        args: [
          wasm.WasmPastaFqPlonkIndex,
          wasm.WasmVecVecFq,
          undefined /*Uint8Array*/,
          undefined /*Uint32Array*/,
        ],
        res: wasm.WasmFqProverProof,
      },
      caml_pasta_fp_plonk_proof_verify: {
        args: [
          undefined /*Uint32Array*/,
          wasm.WasmFpPlonkVerifierIndex,
          wasm.WasmFpProverProof,
        ],
        res: bool,
      },
      caml_pasta_fq_plonk_proof_verify: {
        args: [
          undefined /*Uint32Array*/,
          wasm.WasmFqPlonkVerifierIndex,
          wasm.WasmFqProverProof,
        ],
        res: bool,
      },
    };
  }

  function overrideBindings(plonk_wasm, worker) {
    let spec = workerSpec(plonk_wasm);
    // Copied object so that we don't modify any const bindings.
    let plonk_wasm_ = {};
    for (let key in plonk_wasm) {
      plonk_wasm_[key] = plonk_wasm[key];
    }
    for (let key in spec) {
      plonk_wasm_[key] = (...args) => {
        console.log(`running ${key}() with args`, args);
        let u32_ptr = plonk_wasm.create_zero_u32_ptr();
        worker.postMessage({ type: 'run', name: key, args, u32_ptr });
        /* Here be undefined behavior dragons. */
        let res = plonk_wasm.wait_until_non_zero(u32_ptr);
        plonk_wasm.free_u32_ptr(u32_ptr);
        // worker.onmessage = old_onmessage;
        let res_spec = spec[key].res;
        if (res_spec && res_spec.__wrap) {
          return spec[key].res.__wrap(res);
        } else if (res_spec && res_spec.back) {
          return res_spec.back(res);
        } else {
          return res;
        }
      };
    }
    return plonk_wasm_;
  }
  return { worker_spec: workerSpec, override_bindings: overrideBindings };
}
