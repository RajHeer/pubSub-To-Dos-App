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
                <input type="text" name="task_title" id="task_title" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="description">Description
                <input type="text" name="description" id="description" class="form_input" required>
                <span class="error"></span>
            </label>

            <label for="due_date">Due date
                <input type="text" name="due_date" id="due_date" class="form_input" required>
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
        sendFormData.complete = "false";

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
            root.style.setProperty("--form_colour", "rgb(255, 222, 162)");
            taskForm.style.display === "none";
    };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFhO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVEQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy90YXNrRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza190aXRsZVwiPlRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza190aXRsZVwiIGlkPVwidGFza190aXRsZVwiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1faW5wdXRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZV9kYXRlXCI+RHVlIGRhdGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZHVlX2RhdGVcIiBpZD1cImR1ZV9kYXRlXCIgY2xhc3M9XCJmb3JtX2lucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyYXRpbmdcIj5SYXRpbmdcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmF0aW5nXCIgaWQ9XCJyYXRpbmdcIiBjbGFzcz1cImZvcm1faW5wdXRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBpZD1cInByb2plY3RcIiBjbGFzcz1cImZvcm1faW5wdXRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCI+TG9nIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgPC9maWVsZHNldD4gICAgXG4gICAgYDtcblxuICAgIGV2ZW50Lm9uKFwiZm9ybURpc3BsYXlUb2dnbGVcIiwgZGlzcGxheVRvZ2dsZSk7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VG9nZ2xlKCkge1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgXG4gICAgICAgID8gdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICA6IHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRGb3JtRGF0YVRvQXJyYXlBbmRTZW5kKGUudGFyZ2V0WzBdLmlkKTsgXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybURhdGFUb0FycmF5QW5kU2VuZChpZCkge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0YXNrRm9ybSk7XG4gICAgICAgIGNvbnN0IHNlbmRGb3JtRGF0YSA9IHt9O1xuICAgICAgICBpZCAhPT0gXCJcIiA/IHNlbmRGb3JtRGF0YS5pZCA9IGlkIDogc2VuZEZvcm1EYXRhLmlkID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICAgIHNlbmRGb3JtRGF0YVtwYWlyWzBdXT1wYWlyWzFdO1xuICAgICAgICB9XG4gICAgICAgIHNlbmRGb3JtRGF0YS5jb21wbGV0ZSA9IFwiZmFsc2VcIjtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwiZGF0YUZyb21Gb3JtXCIsIHNlbmRGb3JtRGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0Rm9ySUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZmllbGRzZXRcIik7XG4gICAgICAgICAgICBmaWVsZHNldEZvcklELnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gICAgICAgICAgICBidG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiTG9nIFRhc2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFucy5mb3JFYWNoKHNwYW4gPT57XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9ybV9jb2xvdXJcIiwgXCJyZ2IoMjU1LCAyMjIsIDE2MilcIik7XG4gICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgZXZlbnQub24oXCJzaG93Rm9ybVdpdGhSZXRyaWV2ZWREYXRhXCIsIGZvcm1XaXRoUmV0cmlldmVkRGF0YSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtV2l0aFJldHJpZXZlZERhdGEoIHtyZXRyaWV2ZWRUYXNrRGF0YSwgcmVhZFRhc2sgPSBcIm5vXCJ9KSB7XG4gICAgICAgIFxuICAgICAgICAvLyBUT0dHTEVTICcrJy8nLScgV0hFTiBFRElUIEZPUk0gSVMgRklSU1QgRElTUExBWUVEIE9OTFlcbiAgICAgICAgY29uc3QgZm9ybUNvbG91ciA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tZm9ybV9jb2xvdXJcIik7XG4gICAgICAgIGZvcm1Db2xvdXIgPT09IFwicmdiKDI1NSwgMjIyLCAxNjIpXCIgJiYgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCJcbiAgICAgICAgPyBldmVudC50cmlnZ2VyKFwiYWRkQnV0dG9uVG9nZ2xlXCIpXG4gICAgICAgIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1mb3JtX2NvbG91clwiLCBcImxpZ2h0Ymx1ZVwiKTtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybV9pbnB1dFwiKTtcbiAgICAgICAgY29uc3QgZmllbGRzZXRGb3JJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcblxuICAgICAgICBhbGxJbnB1dHNbMF0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS50YXNrVGl0bGU7XG4gICAgICAgIGFsbElucHV0c1sxXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICBhbGxJbnB1dHNbMl0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5kdWVEYXRlO1xuICAgICAgICBhbGxJbnB1dHNbM10udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5yYXRpbmc7XG4gICAgICAgIGFsbElucHV0c1s0XS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnByb2plY3Q7XG4gICAgICAgIC8vIFBhc3MgdGhlIHRhc2tJRCB0byB0aGUgZmllbGRzZXQgYW5kIHJldHJpZXZlIHdoZW4gXG4gICAgICAgIC8vIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdG8gdXBkYXRlIGNvcnJlc3BvbmRpbmcgcmVjb3JkLlxuICAgICAgICBmaWVsZHNldEZvcklELnNldEF0dHJpYnV0ZShcImlkXCIsIHJldHJpZXZlZFRhc2tEYXRhLmlkKTtcbiAgICBcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlNhdmUgVXBkYXRlc1wiO1xuXG4gICAgICAgIGlmIChyZWFkVGFzayA9PT0gXCJ5ZXNcIikge1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9ybV9jb2xvdXJcIiwgXCJnaG9zdHdoaXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gICAgICAgICAgICBidG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiBhbGxJbnB1dHMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0Zvcm07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=