import events from "./events.js"

function component() {
    const element = document.createElement("div");
  
    element.innerText = "Module loaded";
  
    return element;
  }
  
document.body.appendChild(component());

events.on("updateData", cBack);
events.trigger("updateData", "Hello World");

function cBack(data) {
    console.log(data);
}
