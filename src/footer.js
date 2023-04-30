import event from "./events";

export default function footer() {
    const footer = document.createElement("footer");
    const addButton = document.createElement("button");

    addButton.setAttribute("id", "add_circle");
    addButton.innerText = "+";

    addButton.addEventListener('click', () => {
        event.trigger("formDisplayToggle", null);
    });

    footer.appendChild(addButton);

    return footer;

}
