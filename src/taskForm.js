import event from "./events";

export default function taskForm() {
    const taskForm = document.createElement("form");
    taskForm.setAttribute('novalidate', true);
    taskForm.style.display = "none";
    taskForm.innerHTML = `
        <fieldset>
            <label for="task_title">Task title
                <input type="text" name="taskTitle" id="task_title" required>
                <span class="error"></span>
            </label>

            <label for="description">Description
                <input type="text" name="description" id="description" required>
                <span class="error"></span>
            </label>

            <label for="due_date">Due date
                <input type="text" name="dueDate" id="due_date" required>
                <span class="error"></span>
            </label>

            <label for="rating">Rating
                <input type="text" name="rating" id="rating" required>
                <span class="error"></span>
            </label>

            <label for="project">Project
                <input type="text" name="project" id="project" required>
                <span class="error"></span>
            </label>
            <button type="submit" id="submit">Log Task</button>
        </fieldset>    
    `;

    event.on("formDisplayToggle", displayToggle);

    function displayToggle() {
        taskForm.style.display === "none" 
        ? taskForm.style.display = "block"
        : taskForm.style.display = "none";
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getFormDataAndToArray(); 
        setTimeout( () => taskForm.reset(), 250); 
    });

    function getFormDataAndToArray() {
        const formData = new FormData(taskForm);
        const newtaskData = {};
        for (const pair of formData.entries()) {
          newtaskData[pair[0]]=pair[1];
        }
        newtaskData.complete = "false";
        event.trigger("newTaskData", newtaskData);
      }


    return taskForm;
}