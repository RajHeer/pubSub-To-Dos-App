import event from "./events";

export default function renderTasks() {
    const section = document.createElement("section");

    const titlesArticle = document.createElement("article");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class","titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK - click item for full detail";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    titlesArticle.append( taskTitle, dueTitle, compTitle );
    section.append( titlesArticle );

    
    event.on("showTask", renderTask);
    event.on("updateTask", firstRemoveOldTask);

    function renderTask(task) {

        const taskArticle = document.createElement("article");
        taskArticle.setAttribute("id", task.id);
        taskArticle.dataset.proj_type = task.project;

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            event.trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
        section.append( taskArticle );
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.querySelectorAll("div");
        taskDivs.forEach( div => div.remove() );

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            event.trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task.dueDate;
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task.complete;

        taskArticle.append( taskDiv, dueDiv, compDiv );

    }

    event.on("showManyTasks", clearOldTasksThenShowNew);

    function clearOldTasksThenShowNew(manyTasks) {
        const allTaskArticles = document.querySelectorAll("article");
        allTaskArticles.forEach( article => article.remove() );
        manyTasks.map(task => {
            event.trigger("showTask", task);
        })
    }

    return section;
}
