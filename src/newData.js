import event from "./events"

export default (function newData() {

    const data = [ 
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

    event.on("newTaskData", showNewData);

    function showNewData(newData) {
        console.log(newData);
    }

    const trigger = () => {
        event.trigger("newData", data);
    };

    setTimeout(trigger, 5000);

    event.list();

})();
