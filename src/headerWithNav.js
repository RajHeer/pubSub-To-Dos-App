import honeycomb from "./honeycomb.png";
import event from "./events";
import projects from "./projects";

export default function headerWithNav() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = honeycomb;
    logo.setAttribute("id", "icon");
    
    // CREATE VIEW TABS
    projects();
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.setAttribute("class", "hexagon");
    divProjects.innerText = "Projects";
    divProjects.addEventListener("click", (e) => {
        divProjects.children.length > 0
        ? removeProjDivs(e.target)
        : event.trigger("getProjectsData");
    });

    function removeProjDivs(target) {
        if (target.className === "proj_div") {
            console.log(target);
        } else {
            while (divProjects.firstChild) {
                divProjects.removeChild(divProjects.firstChild);
            }
            divProjects.innerText = "Projects";
        }
    }

    event.on("showProjDivs", showProjDivs);

    function showProjDivs(allProjDivs) {
        divProjects.append(...allProjDivs);
    }

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("class", "hexagon");
    divTasks.innerText = "Tasks";
    divTasks.addEventListener("click", () => {
        event.trigger("getTaskOptions");
    });

    // APPEND VIEW TABS INTO NAV
    nav.appendChild(divProjects);
    nav.appendChild(divTasks);

    header.appendChild(h1);
    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}