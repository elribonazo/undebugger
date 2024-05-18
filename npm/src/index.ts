
async function Undebugger() {
    const Undebugger = await import("undebugger-wasm");
    const pkgWasm = await import("undebugger-wasm/undebugger_wasm_bg.wasm");
    return Undebugger.default(await (pkgWasm as any).default())
}

Undebugger()

export {}