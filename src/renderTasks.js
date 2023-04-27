import event from "./events";

export default function renderTasks() {
    const section = document.createElement("section");


    return section;
    
}

event.on("newData", cBack2);

function cBack2(data) {
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}