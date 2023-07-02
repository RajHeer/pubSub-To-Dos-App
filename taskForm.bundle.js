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
            allInputs.forEach(input => {
                input.setAttribute("readonly", true);
            })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFhO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVEQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3Rhc2tGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRhc2tGb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrX3RpdGxlXCI+VGFzayB0aXRsZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrX3RpdGxlXCIgaWQ9XCJ0YXNrX3RpdGxlXCIgY2xhc3M9XCJmb3JtX2lucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlX2RhdGVcIj5EdWUgZGF0ZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWVfZGF0ZVwiIGlkPVwiZHVlX2RhdGVcIiBjbGFzcz1cImZvcm1faW5wdXRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJhdGluZ1wiPlJhdGluZ1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyYXRpbmdcIiBpZD1cInJhdGluZ1wiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3RcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdFwiIGlkPVwicHJvamVjdFwiIGNsYXNzPVwiZm9ybV9pbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIj5Mb2cgVGFzazwvYnV0dG9uPlxuICAgICAgICA8L2ZpZWxkc2V0PiAgICBcbiAgICBgO1xuXG4gICAgZXZlbnQub24oXCJmb3JtRGlzcGxheVRvZ2dsZVwiLCBkaXNwbGF5VG9nZ2xlKTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2dnbGUoKSB7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiBcbiAgICAgICAgPyB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIDogdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdldEZvcm1EYXRhVG9BcnJheUFuZFNlbmQoZS50YXJnZXRbMF0uaWQpOyBcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JtRGF0YVRvQXJyYXlBbmRTZW5kKGlkKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tGb3JtKTtcbiAgICAgICAgY29uc3Qgc2VuZEZvcm1EYXRhID0ge307XG4gICAgICAgIGlkICE9PSBcIlwiID8gc2VuZEZvcm1EYXRhLmlkID0gaWQgOiBzZW5kRm9ybURhdGEuaWQgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgc2VuZEZvcm1EYXRhW3BhaXJbMF1dPXBhaXJbMV07XG4gICAgICAgIH1cbiAgICAgICAgc2VuZEZvcm1EYXRhLmNvbXBsZXRlID0gXCJmYWxzZVwiO1xuXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJkYXRhRnJvbUZvcm1cIiwgc2VuZEZvcm1EYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRzZXRGb3JJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgICAgIGZpZWxkc2V0Rm9ySUQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJMb2cgVGFza1wiO1xuICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW5zLmZvckVhY2goc3BhbiA9PntcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1mb3JtX2NvbG91clwiLCBcInJnYigyNTUsIDIyMiwgMTYyKVwiKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICBldmVudC5vbihcInNob3dGb3JtV2l0aFJldHJpZXZlZERhdGFcIiwgZm9ybVdpdGhSZXRyaWV2ZWREYXRhKTtcblxuICAgIGZ1bmN0aW9uIGZvcm1XaXRoUmV0cmlldmVkRGF0YSgge3JldHJpZXZlZFRhc2tEYXRhLCByZWFkVGFzayA9IFwibm9cIn0pIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFRPR0dMRVMgJysnLyctJyBXSEVOIEVESVQgRk9STSBJUyBGSVJTVCBESVNQTEFZRUQgT05MWVxuICAgICAgICBjb25zdCBmb3JtQ29sb3VyID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mb3JtX2NvbG91clwiKTtcbiAgICAgICAgZm9ybUNvbG91ciA9PT0gXCJyZ2IoMjU1LCAyMjIsIDE2MilcIiAmJiB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIlxuICAgICAgICA/IGV2ZW50LnRyaWdnZXIoXCJhZGRCdXR0b25Ub2dnbGVcIilcbiAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWZvcm1fY29sb3VyXCIsIFwibGlnaHRibHVlXCIpO1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtX2lucHV0XCIpO1xuICAgICAgICBjb25zdCBmaWVsZHNldEZvcklEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZpZWxkc2V0XCIpO1xuXG4gICAgICAgIGFsbElucHV0c1swXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnRhc2tUaXRsZTtcbiAgICAgICAgYWxsSW5wdXRzWzFdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEuZGVzY3JpcHRpb247XG4gICAgICAgIGFsbElucHV0c1syXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLmR1ZURhdGU7XG4gICAgICAgIGFsbElucHV0c1szXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnJhdGluZztcbiAgICAgICAgYWxsSW5wdXRzWzRdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEucHJvamVjdDtcbiAgICAgICAgLy8gUGFzcyB0aGUgdGFza0lEIHRvIHRoZSBmaWVsZHNldCBhbmQgcmV0cmlldmUgd2hlbiBcbiAgICAgICAgLy8gc3VibWl0dGluZyB0aGUgZm9ybSB0byB1cGRhdGUgY29ycmVzcG9uZGluZyByZWNvcmQuXG4gICAgICAgIGZpZWxkc2V0Rm9ySUQuc2V0QXR0cmlidXRlKFwiaWRcIiwgcmV0cmlldmVkVGFza0RhdGEuaWQpO1xuICAgIFxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiU2F2ZSBVcGRhdGVzXCI7XG5cbiAgICAgICAgaWYgKHJlYWRUYXNrID09PSBcInllc1wiKSB7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1mb3JtX2NvbG91clwiLCBcImdob3N0d2hpdGVcIik7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGFsbElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0Zvcm07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=