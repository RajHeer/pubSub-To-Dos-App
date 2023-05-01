import event from "./events"

export default (function newData() {

    const allTaskData = [ 
        {
            taskTitle: "Mow grass",
            description: "In stripes.",
            dueDate: "Next Sunday",
            rating: "Amber",
            complete: false,
            project: "Garden"
        },
        {
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
        allTaskData.push(newData);
        event.trigger("showNewTask", newData)
    }

    const trigger = () => {
        event.trigger("newData", allTaskData);
    };

    setTimeout(trigger, 5000);

})();
