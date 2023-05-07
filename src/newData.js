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

    event.on("newTaskData", pushNewData);

    function pushNewData(newData) {
        newData.id = uuid();
        allTaskData.push(newData);
        event.trigger("showNewTask", newData)
    }

    const trigger = () => {
        event.trigger("newData", allTaskData);
    };

    setTimeout(trigger, 5000);

})();
