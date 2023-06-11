import event from "./events";

export default function projects() {
    event.on("makeProjDivs", showProjOptions);

    function showProjOptions(projects) {
        const allProjDivs = [];
        projects.forEach(project => {
            const projDiv = document.createElement("div");
            projDiv.setAttribute("class", "proj_div");
            projDiv.addEventListener("click", (e) => {
                e.stopPropagation();
                event.trigger("getTasksByProject", project);
            });
            projDiv.innerHTML = project;
            allProjDivs.push(projDiv);
        })
        event.trigger("showProjDivs", allProjDivs);
    }
}
