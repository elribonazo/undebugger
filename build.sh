#!/bin/bash
cwd=`pwd`

is_mac() {
  [[ "$OSTYPE" == "darwin"* ]]
}

wasm-pack build --target=web --out-dir=pkg

cd pkg
if is_mac; then
  sed -i '' "/if (typeof input === 'undefined') {/,/}/d" undebugger_wasm.js
else
  sed -i "/if (typeof input === 'undefined') {/,/}/d" undebugger_wasm.js
fi