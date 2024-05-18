# undebuggme

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Rust](https://img.shields.io/badge/rust-1.50%2B-blue.svg)
![WASM](https://img.shields.io/badge/wasm-pack-0.10.1-blue.svg)

**undebuggme** is a Rust library designed to make it difficult for developers to debug your web application using browser Developer Tools. This library integrates with WebAssembly (Wasm) to disrupt common debugging techniques, such as setting breakpoints and inspecting console logs.

## Features

- **Console Log Suppression**: Disables common console methods (`log`, `warn`, `error`, `info`) to prevent inspection of console output.
- **Debugger Detection**: Continuously triggers `debugger` statements to disrupt debugging sessions.
- **Developer Tools Detection**: Uses advanced techniques to detect if Developer Tools are open and responds accordingly.
- **Automatic Integration**: Easily integrates into your existing web application with minimal setup.

## Installation

To use `undebuggme` in your project, add it as a dependency in your `Cargo.toml`:

```bash
npm i undebuggme --save
```

```bash
yarn add undebuggme
```

## Usage
Just import the library with require or import in HTML, React or whatever is in use:
```html
<script type="module">
    import Undebuggme from 'undebuggme';
    await Undebuggme()
</script>
```