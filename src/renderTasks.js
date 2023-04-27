import event from "./events";

export default function renderTasks() {
    const section = document.createElement("section");

    event.on("newData", renderTask);

    function renderTask(data) {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = data["task"];
                
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = data["due"];
                
        const compDiv = document.createElement("div");
        compDiv.innerHTML = data["complete"];

        section.append( taskDiv, dueDiv, compDiv );
    }

    return section;
    
}


