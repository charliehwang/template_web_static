import { sum, mult } from "./lib"
// import "./styles/index.css"
import "./styles/index.scss"

window.onload = function() {
  init()
}

function init() {
  outputHtmlDiv("Hello from Webpacks.")
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

//----- HMR (Hot Module Replacement) ------------
// Remove the most recently-added <div> so that when the code runs again and
// adds a new <div>, we don't end up with duplicate divs.
// if (module.hot) {
//   module.hot.dispose(function() {
//   })
// }
