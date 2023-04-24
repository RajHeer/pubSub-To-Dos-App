import event from "./events"
import newData from "./newData"

function component() {
    const element = document.createElement("div");
  
    element.innerText = "Module loaded";
  
    return element;
  }
  
document.body.appendChild(component());

event.on("updateData", cBack);
event.trigger("updateData", "Hello World!!!");

event.on("hmmm", cBack);
event.trigger("hmmm", "Not verk");

event.on("newData", cBack2);

event.list();

function cBack(data) {
    console.log(data);
}

function cBack2(data) {
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}
