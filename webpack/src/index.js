import "./styles/main.scss";
import sms from "./tools/saludar.js";

document.querySelector("#app").innerHTML = sms("Bruno")

console.log("Hola mundo desde webpack");