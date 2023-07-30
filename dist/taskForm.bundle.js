"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["taskForm"],{

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Events {
    constructor() {
        this.events = {};
    }

    on(eventName, callBack) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callBack);
    }

    trigger(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(func => {
                func(data);
            });
        }
    }

    list() {
        console.log(this.events);
    }
};

const event = new Events();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event);



/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function taskForm() {
    const root = document.documentElement;
    const taskForm = document.createElement("form");
    taskForm.noValidate = true;
    taskForm.style.display = "none";
    taskForm.innerHTML = `
        <fieldset>
            <label for="task_title">Task title
                <input type="text" name="taskTitle" id="task_title" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="description">Description
                <input type="text" name="description" id="description" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="due_date">Due date
                <input type="text" name="dueDate" id="due_date" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="rating">Rating
                <input type="text" name="rating" id="rating" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="project">Project
                <input type="text" name="project" id="project" class="form_input" required>
                <span class="error"></span>
            </label>
            <button type="submit" id="submit">Log Task</button>
        </fieldset>    
    `;

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("formDisplayToggle", displayToggle);

    function displayToggle() {
        resetForm();
        taskForm.style.display === "none" 
        ? taskForm.style.display = "block"
        : taskForm.style.display = "none";
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getFormDataToArrayAndSend(e.target[0].id); 
        resetForm();
    });

    function getFormDataToArrayAndSend(id) {
        const formData = new FormData(taskForm);
        const sendFormData = {};
        id !== "" ? sendFormData.id = id : sendFormData.id = null;
        for (const pair of formData.entries()) {
          sendFormData[pair[0]]=pair[1];
        }
        let togChecked = document.getElementById(`toggle-${id}`);
        if (togChecked === null) {
            sendFormData.complete = false;
        } else {
            sendFormData.complete = togChecked.checked;
        }
        // Sends to newData for record updating
        // or creation of a new record
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("dataFromForm", sendFormData);
    }

    function resetForm() {
            taskForm.reset();
            const fieldsetForID = document.querySelector("fieldset");
            fieldsetForID.removeAttribute("id");
            const btn = document.querySelector("#submit");
            btn.style.visibility = "visible";
            btn.innerHTML = "Log Task";
            const spans = document.querySelectorAll("span");
            spans.forEach(span =>{
                span.textContent = "";
            })
            const allInputs = document.getElementsByClassName("form_input");
            for (let input of allInputs) {
                input.removeAttribute("readonly");
            };
            root.style.setProperty("--form_colour", "rgb(255, 222, 162)");
            taskForm.style.display === "none";
    };

    // Form with editable or readonly data
    // dependng on which icon selected
    // on UI
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showFormWithRetrievedData", formWithRetrievedData);

    function formWithRetrievedData( {retrievedTaskData, readTask = "no"}) {
        
        // TOGGLES '+'/'-' WHEN EDIT FORM IS FIRST DISPLAYED ONLY
        const formColour = getComputedStyle(root).getPropertyValue("--form_colour");
        formColour === "rgb(255, 222, 162)" && taskForm.style.display === "none"
        ? _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("addButtonToggle")
        : false;
        
        root.style.setProperty("--form_colour", "lightblue");
        taskForm.style.display = "block";

        const allInputs = document.getElementsByClassName("form_input");
        const fieldsetForID = document.querySelector("fieldset");

        allInputs[0].value = retrievedTaskData.taskTitle;
        allInputs[1].value = retrievedTaskData.description;
        allInputs[2].value = retrievedTaskData.dueDate;
        allInputs[3].value = retrievedTaskData.rating;
        allInputs[4].value = retrievedTaskData.project;
        // Pass the taskID to the fieldset and retrieve when 
        // submitting the form to update corresponding record.
        fieldsetForID.setAttribute("id", retrievedTaskData.id);
    
        const btn = document.querySelector("#submit");
        btn.innerHTML = "Save Updates";

        // Different colour form and 
        // no submit button for 
        // reading task
        if (readTask === "yes") {
            root.style.setProperty("--form_colour", "ghostwhite");
            const btn = document.querySelector("#submit");
            btn.style.visibility = "hidden";
            for (let input of allInputs) {
                input.setAttribute("readonly", true);
            };
        }
    }

    return taskForm;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsR0FBRztBQUM5RDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFROztBQUVaLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVEQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy90YXNrRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza190aXRsZVwiPlRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1RpdGxlXCIgaWQ9XCJ0YXNrX3RpdGxlXCIgY2xhc3M9XCJmb3JtX2lucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlX2RhdGVcIj5EdWUgZGF0ZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVfZGF0ZVwiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicmF0aW5nXCI+UmF0aW5nXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgY2xhc3M9XCJmb3JtX2lucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJmb3JtX2lucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiPkxvZyBUYXNrPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+ICAgIFxuICAgIGA7XG5cbiAgICBldmVudC5vbihcImZvcm1EaXNwbGF5VG9nZ2xlXCIsIGRpc3BsYXlUb2dnbGUpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRvZ2dsZSgpIHtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIFxuICAgICAgICA/IHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgOiB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0Rm9ybURhdGFUb0FycmF5QW5kU2VuZChlLnRhcmdldFswXS5pZCk7IFxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldEZvcm1EYXRhVG9BcnJheUFuZFNlbmQoaWQpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCBzZW5kRm9ybURhdGEgPSB7fTtcbiAgICAgICAgaWQgIT09IFwiXCIgPyBzZW5kRm9ybURhdGEuaWQgPSBpZCA6IHNlbmRGb3JtRGF0YS5pZCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICBzZW5kRm9ybURhdGFbcGFpclswXV09cGFpclsxXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9nQ2hlY2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2dnbGUtJHtpZH1gKTtcbiAgICAgICAgaWYgKHRvZ0NoZWNrZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbmRGb3JtRGF0YS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZEZvcm1EYXRhLmNvbXBsZXRlID0gdG9nQ2hlY2tlZC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIHRvIG5ld0RhdGEgZm9yIHJlY29yZCB1cGRhdGluZ1xuICAgICAgICAvLyBvciBjcmVhdGlvbiBvZiBhIG5ldyByZWNvcmRcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcImRhdGFGcm9tRm9ybVwiLCBzZW5kRm9ybURhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHNldEZvcklEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZpZWxkc2V0XCIpO1xuICAgICAgICAgICAgZmllbGRzZXRGb3JJRC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkxvZyBUYXNrXCI7XG4gICAgICAgICAgICBjb25zdCBzcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3BhbnMuZm9yRWFjaChzcGFuID0+e1xuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtX2lucHV0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgYWxsSW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9ybV9jb2xvdXJcIiwgXCJyZ2IoMjU1LCAyMjIsIDE2MilcIik7XG4gICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgLy8gRm9ybSB3aXRoIGVkaXRhYmxlIG9yIHJlYWRvbmx5IGRhdGFcbiAgICAvLyBkZXBlbmRuZyBvbiB3aGljaCBpY29uIHNlbGVjdGVkXG4gICAgLy8gb24gVUlcbiAgICBldmVudC5vbihcInNob3dGb3JtV2l0aFJldHJpZXZlZERhdGFcIiwgZm9ybVdpdGhSZXRyaWV2ZWREYXRhKTtcblxuICAgIGZ1bmN0aW9uIGZvcm1XaXRoUmV0cmlldmVkRGF0YSgge3JldHJpZXZlZFRhc2tEYXRhLCByZWFkVGFzayA9IFwibm9cIn0pIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFRPR0dMRVMgJysnLyctJyBXSEVOIEVESVQgRk9STSBJUyBGSVJTVCBESVNQTEFZRUQgT05MWVxuICAgICAgICBjb25zdCBmb3JtQ29sb3VyID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mb3JtX2NvbG91clwiKTtcbiAgICAgICAgZm9ybUNvbG91ciA9PT0gXCJyZ2IoMjU1LCAyMjIsIDE2MilcIiAmJiB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIlxuICAgICAgICA/IGV2ZW50LnRyaWdnZXIoXCJhZGRCdXR0b25Ub2dnbGVcIilcbiAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWZvcm1fY29sb3VyXCIsIFwibGlnaHRibHVlXCIpO1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtX2lucHV0XCIpO1xuICAgICAgICBjb25zdCBmaWVsZHNldEZvcklEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZpZWxkc2V0XCIpO1xuXG4gICAgICAgIGFsbElucHV0c1swXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnRhc2tUaXRsZTtcbiAgICAgICAgYWxsSW5wdXRzWzFdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEuZGVzY3JpcHRpb247XG4gICAgICAgIGFsbElucHV0c1syXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLmR1ZURhdGU7XG4gICAgICAgIGFsbElucHV0c1szXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnJhdGluZztcbiAgICAgICAgYWxsSW5wdXRzWzRdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEucHJvamVjdDtcbiAgICAgICAgLy8gUGFzcyB0aGUgdGFza0lEIHRvIHRoZSBmaWVsZHNldCBhbmQgcmV0cmlldmUgd2hlbiBcbiAgICAgICAgLy8gc3VibWl0dGluZyB0aGUgZm9ybSB0byB1cGRhdGUgY29ycmVzcG9uZGluZyByZWNvcmQuXG4gICAgICAgIGZpZWxkc2V0Rm9ySUQuc2V0QXR0cmlidXRlKFwiaWRcIiwgcmV0cmlldmVkVGFza0RhdGEuaWQpO1xuICAgIFxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiU2F2ZSBVcGRhdGVzXCI7XG5cbiAgICAgICAgLy8gRGlmZmVyZW50IGNvbG91ciBmb3JtIGFuZCBcbiAgICAgICAgLy8gbm8gc3VibWl0IGJ1dHRvbiBmb3IgXG4gICAgICAgIC8vIHJlYWRpbmcgdGFza1xuICAgICAgICBpZiAocmVhZFRhc2sgPT09IFwieWVzXCIpIHtcbiAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWZvcm1fY29sb3VyXCIsIFwiZ2hvc3R3aGl0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgYWxsSW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tGb3JtO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9