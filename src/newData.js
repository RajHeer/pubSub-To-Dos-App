import event from "./events";
import { v4 as uuid } from 'uuid';

export default (function newData() {

    let allTaskData = [ 
        {
            id: uuid(),
            taskTitle: "Mow grass",
            description: "In stripes.",
            dueDate: "Next Sunday",
            rating: "Amber",
            complete: false,
            project: "Garden"
        },
        {
            id: uuid(),
            taskTitle: "Wash car",
            description: "Wash, wax,",
            dueDate: "Saturday",
            rating: "Red",
            complete: true,
            project: "Garage"
        }
    ];
    
    let storage = window.localStorage;
    // storage.removeItem("allData");
   
    // On init displays sample data above 
    // and sets storage

    initStorage();

    function initStorage() {
        if (storage.length === 0) {
            setStorage();
        } else {
            let retrievedStorage = storage.getItem("allData");
            let allDataParsed = JSON.parse(retrievedStorage);
            allTaskData = allDataParsed;
        }
        getAllTasks();
    }

    function setStorage() {
        let allDataJSON = JSON.stringify(allTaskData);
        storage.setItem("allData", allDataJSON);
    }
    
    event.on("getAllTasks", getAllTasks);

    function getAllTasks() {
        event.trigger("showManyTasks", allTaskData);
    }
    
    
    // When data via form is received
    // checks for an ID then either 
    // looks up existing record and updates
    // or generates a new ID for new record

    event.on("dataFromForm", checkForID);

    function checkForID(taskData) {
        taskData.id 
        ? updateExistingRecord(taskData) 
        : generateIDAndAddNewRecord(taskData);
    }

    function updateExistingRecord(data) {
        const indexForUpdate = allTaskData.findIndex(task => task.id === data.id);
        allTaskData[indexForUpdate] = data;
        setStorage();
        event.trigger("updateTask", data);
    }

    function generateIDAndAddNewRecord(data) {
        data.id = uuid();
        allTaskData.push(data);
        setStorage();
        event.trigger("showTask", {task: data});
    }

    event.on("getTaskData", getDataForEditFormOrDeleteTask);

    function getDataForEditFormOrDeleteTask( { taskID, removeTask = "no", readTask = "no"} ) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                if (removeTask === "no") {
                    if (readTask === "no") {
                        event.trigger("showFormWithRetrievedData", {retrievedTaskData: task});
                    } else {
                        event.trigger("showFormWithRetrievedData", {retrievedTaskData: task, readTask: "yes"});
                    }
                } else {
                    task.remove = "yes";
                    event.trigger("updateTask", task);
                    let taskToRemove = allTaskData.indexOf(task);
                    allTaskData.splice(taskToRemove, 1);
                    setStorage();
                }
            }
        });
    }

    event.on("taskStatusChange", changeTaskStatus);

    function changeTaskStatus( {taskID, complete = false} ) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                task.complete = complete;
                setStorage();
            }
        });
    }

    // Generates list of all projects
    // to then send to corresponding
    // drop down menu

    event.on("getProjectsList", getProjList);

    function getProjList() {
        const projList = [];
        allTaskData.map(task => {
            !projList.includes(task.project) 
            ? projList.push(task.project) 
            : false;
        });
        event.trigger("makeProjDivs", projList);
    }

    // Takes all data (tasks) corresponding 
    // to selected project and then 
    // send just these for rendering
    
    event.on("getTasksByProject", getTasksByProj);

    function getTasksByProj(project) {
        const tasksByProj = [];
        allTaskData.map(task => {
            task.project === project
            ? tasksByProj.push(task)
            : false;
        })
        event.trigger("showManyTasks", tasksByProj);
    }

})();
