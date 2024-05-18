use js_sys::Function;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{window};

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {

    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    js_sys::eval(r#"window.lfunction = function lfunction() {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
        console.info = function() {};
    }"#).expect("Failed to add function to window");
    js_sys::eval(r#"window.kfunction = function kfunction() {
        debugger;
    }"#).expect("Failed to add function to window");
    let l_func = js_sys::Reflect::get(&window().expect("no global `window` exists"), &JsValue::from_str("lfunction"))
        .expect("undebugger function should be defined")
        .dyn_into::<Function>()
        .expect("undebugger should be a function");
    let _l = l_func.call0(&JsValue::NULL);
    fn call_debugger_repeatedly() {
        let k_func = js_sys::Reflect::get(&window().expect("no global `window` exists"), &JsValue::from_str("kfunction"))
            .expect("undebugger function should be defined")
            .dyn_into::<Function>()
            .expect("undebugger should be a function");
        let _ = k_func.call0(&JsValue::NULL);
        let callback = Closure::wrap(Box::new(move || {
            let _ = k_func.call0(&JsValue::NULL);
        }) as Box<dyn FnMut()>);
        window().expect("no global `window` exists")
            .set_interval_with_callback_and_timeout_and_arguments_0(callback.as_ref().unchecked_ref(), 1)
            .expect("Failed to set interval");
        callback.forget();
    }
    call_debugger_repeatedly();
    Ok(())
}
