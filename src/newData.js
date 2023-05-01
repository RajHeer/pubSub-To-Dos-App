import event from "./events"

export default (function newData() {

    const allTaskData = [ 
        {
            task: "Mow grass",
            description: "In stripes.",
            due: "Next Sunday",
            rating: "Amber",
            complete: false,
            project: "Garden"
        },
        {
            task: "Wash car",
            description: "Wash, wax,",
            due: "Saturday",
            rating: "Red",
            complete: false,
            project: "Garage"
        }
    ];

    event.on("newTaskData", pushNewData);

    function pushNewData(newData) {
        allTaskData.push(newData);
        console.log(allTaskData);
    }

    const trigger = () => {
        event.trigger("newData", allTaskData);
    };

    setTimeout(trigger, 5000);

    event.list();

})();
