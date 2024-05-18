# undebugger

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Rust](https://img.shields.io/badge/rust-1.50%2B-blue.svg)
![WASM](https://img.shields.io/badge/wasm-pack-0.10.1-blue.svg)

**undebugger** is a Rust library designed to make it difficult for developers to debug your web application using browser Developer Tools. This library integrates with WebAssembly (Wasm) to disrupt common debugging techniques, such as setting breakpoints and inspecting console logs.

## See working demo
Open your developer tools and then click the link
(Online demo)[https://jsfiddle.net/o5xf6m2t/2/]


## Features

- **Console Log Suppression**: Disables common console methods (`log`, `warn`, `error`, `info`) to prevent inspection of console output.
- **Debugger Detection**: Continuously triggers `debugger` statements to disrupt debugging sessions.
- **Developer Tools Detection**: Uses advanced techniques to detect if Developer Tools are open and responds accordingly.
- **Automatic Integration**: Easily integrates into your existing web application with minimal setup.

## Installation

To use `undebugger` in your project, add it as a dependency in your `Cargo.toml`:

You can directly import the package in your browser through this cdn: https://unpkg.com/undebugger

```bash
npm i undebugger --save
```

```bash
yarn add undebugger
```

## Usage
This library exports an empty package and has no initialisation parameters:
It will use a bundled wasm file to automatically trigger debugger when the devTools open.

Just Import it and you are good to go!

Directly in your browser:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNDEBUGGER</title>
    <script src="https://unpkg.com/undebugger"></script>
</head>
<body>
<h1>Just open your browser developer console to see that's going on</h1>
</body>
</html>
```

In your nodejs app with typescript or es modules:
```typescript
import 'undebugger'
```

In your nodejs app with commonjs:
```typescript
require('undebugger')
```
