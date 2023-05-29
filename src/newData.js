import event from "./events";
import { v4 as uuid } from 'uuid';

export default (function newData() {

    const allTaskData = [ 
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
            complete: false,
            project: "Garage"
        }
    ];
    
    // On init displays sample data above
    getAllTasks();
    

    event.on("getAllTasks", getAllTasks);

    function getAllTasks() {
        event.trigger("showManyTasks", allTaskData);
    }
    
    event.on("dataFromForm", pushData);

    function pushData(taskData) {
        taskData.id 
        ? updateExistingRecord(taskData) 
        : generateIDAndAddNewRecord(taskData);
    }

    function updateExistingRecord(data) {
        const indexForUpdate = allTaskData.findIndex(task => task.id === data.id);
        allTaskData[indexForUpdate] = data;
        event.trigger("updateTask", data);
    }

    function generateIDAndAddNewRecord(data) {
        data.id = uuid();
        allTaskData.push(data);
        event.trigger("showTask", data);
    }

    event.on("getTaskData", getTask);

    function getTask(taskID) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                event.trigger("showFormWithRetrievedData", task);
            }
        });
    }

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

    event.on("getTasksByProject", getTasksByProj);

    function getTasksByProj(project) {
        const tasksByProj = [];
        allTaskData.map(task => {
            task.project === project.innerHTML
            ? tasksByProj.push(task)
            : false;
        })
        event.trigger("showManyTasks", tasksByProj);
    }

})();
