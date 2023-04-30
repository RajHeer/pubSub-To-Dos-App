export default function footer() {
    const footer = document.createElement("footer");
    const addButton = document.createElement("button");

    addButton.setAttribute("id", "add_circle");
    addButton.innerText = "+";

    addButton.addEventListener('click', () => {
        console.log("Toggle display on form");
    });

    footer.appendChild(addButton);

    return footer;

}
