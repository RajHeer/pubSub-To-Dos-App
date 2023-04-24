import event from "./events"

export default (function newData() {

    const data =  {
        task: "Mow grass",
        description: "In stripes.",
        due: "Next Sunday",
        rating: "Amber",
        complete: false
    };

    const trigger = () => {
        event.trigger("newData", data);
    };

    setTimeout(trigger, 5000);

    event.list();

})();
