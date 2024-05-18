# undebugger

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Rust](https://img.shields.io/badge/rust-1.50%2B-blue.svg)
![WASM](https://img.shields.io/badge/wasm-pack-0.10.1-blue.svg)

**undebugger** is a Rust library designed to make it difficult for developers to debug your web application using browser Developer Tools. This library integrates with WebAssembly (Wasm) to disrupt common debugging techniques, such as setting breakpoints and inspecting console logs.

## Features

- **Console Log Suppression**: Disables common console methods (`log`, `warn`, `error`, `info`) to prevent inspection of console output.
- **Debugger Detection**: Continuously triggers `debugger` statements to disrupt debugging sessions.
- **Developer Tools Detection**: Uses advanced techniques to detect if Developer Tools are open and responds accordingly.
- **Automatic Integration**: Easily integrates into your existing web application with minimal setup.

## Building the code

```bash
cargo build
wasm-pack build --target web
```

## NPM Package
Click [here](./npm/README.md) to open the NPM package documentation.