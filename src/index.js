import { sum, mult } from "./lib"
import "./styles/index.css"

window.onload = function() {
  init()
}

function init() {
  outputHtmlDiv("Hello from WebPack.")
  runLibFunctions()
}

function runLibFunctions() {
  outputHtmlDiv(`Sum Fn: ${sum(1, 2)}`)
  outputHtmlDiv(`Mult Fn: ${mult(9, 9)}`)
}

function outputHtmlDiv(text) {
  const root = document.createElement("div")
  root.innerHTML = text
  document.body.appendChild(root)
}
