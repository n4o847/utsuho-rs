use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(code: String) -> String {
    format!("{:?}", whitespacers::Program::parse(code.into_bytes()))
}
