import event from "./events";

export default function renderTasks() {
    const section = document.createElement("section");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class","titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    section.append( taskTitle, dueTitle, compTitle );

    event.on("newData", renderTask);

    function renderTask(data) {

        data.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = task["taskTitle"];
                
            const dueDiv = document.createElement("div");
            dueDiv.innerHTML = task["dueDate"];
                
            const compDiv = document.createElement("div");
            compDiv.innerHTML = task["complete"];

            section.append( taskDiv, dueDiv, compDiv );
        });

        event.on("showNewTask", showNewTask)

        function showNewTask(newtaskData) {
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = newtaskData["taskTitle"];
                
            const dueDiv = document.createElement("div");
            dueDiv.innerHTML = newtaskData["dueDate"];
                
            const compDiv = document.createElement("div");
            compDiv.innerHTML = newtaskData["complete"];

            section.append( taskDiv, dueDiv, compDiv );
        }

    }

    return section;
}
