# Embedded Zysham SLM

Model: `google/flan-t5-small`, using the Transformers.js ONNX conversion from `Xenova/flan-t5-small`.

- Purpose: locally rewrite an already-grounded Zysham counselling draft in clearer language.
- Runtime: quantized ONNX on CPU through WebAssembly; WebGPU is not required.
- License: Apache License 2.0. A copy is included in `LICENSE`.
- Source model: https://huggingface.co/google/flan-t5-small
- ONNX conversion: https://huggingface.co/Xenova/flan-t5-small
- The model is not treated as an authoritative source and is not allowed to invent eligibility, fees, salaries, rankings, diagnoses, or user facts.

Embedded files were downloaded on 2026-08-08. The deterministic Zysham counselling engine remains the safety fallback if model loading or generation fails.

Checksums:

- `encoder_model_quantized.onnx`: `968ce399b8dcdfd4c36833db51e9f78f327f7272ee9e2777fc2b3c8693208e90`
- `decoder_model_merged_quantized.onnx`: `73e2e942503221d7844715a8d824f68d8a2e878483f1c923849c177f0c441df1`
