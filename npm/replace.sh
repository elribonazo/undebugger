#!/bin/bash
cwd=`pwd`

is_mac() {
  [[ "$OSTYPE" == "darwin"* ]]
}

cd ..
wasm-pack build --target=web

cd pkg
if is_mac; then
  sed -i '' "/if (typeof input === 'undefined') {/,/}/d" undebugger_wasm.js
else
  sed -i "/if (typeof input === 'undefined') {/,/}/d" undebugger_wasm.js
fi