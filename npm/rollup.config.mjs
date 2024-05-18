import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import copy from 'rollup-plugin-copy';
import cleanup from "rollup-plugin-cleanup";
import typescript from "rollup-plugin-typescript2";

const plugins = [

    //commonjs(),
    typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
            compilerOptions: {
                emitDeclarationOnly: false,
            },
        },
    }),
    resolve({
        browser: true,
        preferBuiltins: false,
        resolveOnly: ["undebugger-wasm"],
    }),
    wasm({
        targetEnv: "browser",
        fileName: "[name][extname]",
        maxFileSize: 10000000
    }),
    cleanup(),
];

const entryPoint = './src/index.ts'
export default [
    {
        input: entryPoint,
        output: {
            file: 'umd/index.js',
            format: 'umd',
            name: 'Undebugger',
            sourcemap: true,
            exports: "named",
            inlineDynamicImports: true
        },
        plugins
    },
    {
        input: entryPoint,
        output: {
            dir: 'es',
            format: 'es',
            sourcemap: true,
            entryFileNames: "[name].js",
            inlineDynamicImports: true
        },
        plugins
    },
    {
        input: entryPoint,
        output: {
            dir: 'cjs',
            format: 'cjs',
            sourcemap: true,
            entryFileNames: "[name].js",
            inlineDynamicImports: true

        },
        plugins
    }
];
