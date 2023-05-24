import event from "./events";

export default function projects() {
    event.on("showProjOptions", showProjOptions);

    function showProjOptions(projects) {
        console.log(projects);
    }
}
