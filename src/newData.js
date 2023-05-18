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
    
    allTaskData.forEach(task => {
        event.trigger("initData", task);
    })
    

    event.on("dataFromForm", pushData);

    function pushData(taskData) {
        taskData.id 
        ? updateExistingRecord(taskData) 
        : generateIDAndAddNewRecord(taskData);
    }

    function updateExistingRecord(data) {
        console.log(data.id);
        allTaskData.filter(task => {
            if (task.id === data.id) {
                task = { ...task, ...data };
            }
        });
    }

    function generateIDAndAddNewRecord(data) {
        data.id = uuid();
        allTaskData.push(data);
        event.trigger("showNewTask", data);
    }

    function updateTaskRecord (taskData) {
        console.log(taskData);
    };

    event.on("getTaskData", getTask);

    function getTask(taskID) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                event.trigger("showFormWithRetrievedData", task);
            }
        });
    }

})();
