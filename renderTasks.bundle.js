"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["renderTasks"],{

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

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _file_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file.png */ "./src/file.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");





function renderTasks() {
    const section = document.createElement("section");

    const titlesArticle = document.createElement("article");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class", "titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    titlesArticle.append( taskTitle, dueTitle, compTitle );
    section.append( titlesArticle );

    
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showTask", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateTask", firstRemoveOldTask);

    function renderTask({ task, taskArticle = undefined }) {

        if (taskArticle === undefined) {
            const newTaskArticle = document.createElement("article");
            newTaskArticle.setAttribute("id", task.id);
            newTaskArticle.setAttribute("class", "task_article");
            newTaskArticle.dataset.proj_type = task.project;
            taskArticle = newTaskArticle; 
            section.append( taskArticle );
        }

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.setAttribute("id", "task_title");
        taskDiv.innerHTML = task["taskTitle"];

        const readBTN = document.createElement("img");
        readBTN.src = _file_png__WEBPACK_IMPORTED_MODULE_1__;
        readBTN.setAttribute("id", "read_btn");
        readBTN.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", {taskID: task.id, readTask: "yes"} );
        });
        
        const editBTN = document.createElement("img");
        editBTN.src = _edit_png__WEBPACK_IMPORTED_MODULE_3__;
        editBTN.setAttribute("id", "edit_btn");
        editBTN.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", {taskID: task.id} );
        });

        const deleteBTN = document.createElement("img");
        deleteBTN.src = _delete_png__WEBPACK_IMPORTED_MODULE_2__;
        deleteBTN.setAttribute("id", "delete_btn");
        deleteBTN.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", { taskID: task.id, removeTask: "yes" });
        });

        taskDiv.append ( readBTN, editBTN, deleteBTN );
        
            
        const dueDiv = document.createElement("div");
        dueDiv.setAttribute("class", "task");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.setAttribute("class", "task");
        const compToggle = document.createElement("input");
        compToggle.setAttribute("id", "toggle");
        compToggle.setAttribute("type", "checkbox");
        if (task.complete === true) {
            compToggle.checked = true;
        }
        compDiv.append(compToggle);
        
        // compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.querySelectorAll(".task");
        taskDivs.forEach( div => div.remove() );

        if (task.remove === "yes") {
            taskArticle.remove();
        } else {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", {task , taskArticle});
        }
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showManyTasks", clearOldTasksThenShowNew);

    function clearOldTasksThenShowNew(manyTasks) {
        const allTaskArticles = document.querySelectorAll(".task_article");

        if (allTaskArticles.length > 0) {
            allTaskArticles.forEach(article => {
                article.remove();
            })
        }

        manyTasks.map(task => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", {task});
        });

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("removeProjDivs");
        
    }

    return section;
}


/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4b58337bd3477db466.png";

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "603345b5d7192676592d.png";

/***/ }),

/***/ "./src/file.png":
/*!**********************!*\
  !*** ./src/file.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "242a91a25c3ab64afb7b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/renderTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7QUFDSTtBQUNLO0FBQ0o7O0FBRW5CO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTs7QUFFWiwwQkFBMEIsK0JBQStCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNDQUFRO0FBQzlCO0FBQ0E7QUFDQSxZQUFZLHVEQUFhLGlCQUFpQixrQ0FBa0M7QUFDNUUsU0FBUztBQUNUO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQVE7QUFDOUI7QUFDQTtBQUNBLFlBQVksdURBQWEsaUJBQWlCLGlCQUFpQjtBQUMzRCxTQUFTOztBQUVUO0FBQ0Esd0JBQXdCLHdDQUFVO0FBQ2xDO0FBQ0E7QUFDQSxZQUFZLHVEQUFhLGtCQUFrQixvQ0FBb0M7QUFDL0UsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVksdURBQWEsY0FBYyxtQkFBbUI7QUFDMUQ7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsWUFBWSx1REFBYSxjQUFjLEtBQUs7QUFDNUMsU0FBUzs7QUFFVCxRQUFRLHVEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgcmVhZElDT04gZnJvbSBcIi4vZmlsZS5wbmdcIlxuaW1wb3J0IGRlbGV0ZUlDT04gZnJvbSBcIi4vZGVsZXRlLnBuZ1wiO1xuaW1wb3J0IGVkaXRJQ09OIGZyb20gXCIuL2VkaXQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IHRpdGxlc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb21wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGR1ZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGNvbXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGl0bGVzXCIpO1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBcIlRBU0tcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICB0aXRsZXNBcnRpY2xlLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG4gICAgc2VjdGlvbi5hcHBlbmQoIHRpdGxlc0FydGljbGUgKTtcblxuICAgIFxuICAgIGV2ZW50Lm9uKFwic2hvd1Rhc2tcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJ1cGRhdGVUYXNrXCIsIGZpcnN0UmVtb3ZlT2xkVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKHsgdGFzaywgdGFza0FydGljbGUgPSB1bmRlZmluZWQgfSkge1xuXG4gICAgICAgIGlmICh0YXNrQXJ0aWNsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICAgICAgbmV3VGFza0FydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICAgICAgICBuZXdUYXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tfYXJ0aWNsZVwiKTtcbiAgICAgICAgICAgIG5ld1Rhc2tBcnRpY2xlLmRhdGFzZXQucHJval90eXBlID0gdGFzay5wcm9qZWN0O1xuICAgICAgICAgICAgdGFza0FydGljbGUgPSBuZXdUYXNrQXJ0aWNsZTsgXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCggdGFza0FydGljbGUgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tfdGl0bGVcIik7XG4gICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcblxuICAgICAgICBjb25zdCByZWFkQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcmVhZEJUTi5zcmMgPSByZWFkSUNPTjtcbiAgICAgICAgcmVhZEJUTi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlYWRfYnRuXCIpO1xuICAgICAgICByZWFkQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFRhc2tEYXRhXCIsIHt0YXNrSUQ6IHRhc2suaWQsIHJlYWRUYXNrOiBcInllc1wifSApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVkaXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0QlROLnNyYyA9IGVkaXRJQ09OO1xuICAgICAgICBlZGl0QlROLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdF9idG5cIik7XG4gICAgICAgIGVkaXRCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwge3Rhc2tJRDogdGFzay5pZH0gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlQlROLnNyYyA9IGRlbGV0ZUlDT047XG4gICAgICAgIGRlbGV0ZUJUTi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZV9idG5cIik7XG4gICAgICAgIGRlbGV0ZUJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrRGF0YVwiLCB7IHRhc2tJRDogdGFzay5pZCwgcmVtb3ZlVGFzazogXCJ5ZXNcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmQgKCByZWFkQlROLCBlZGl0QlROLCBkZWxldGVCVE4gKTtcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2tbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgY29uc3QgY29tcFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29tcFRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZ2dsZVwiKTtcbiAgICAgICAgY29tcFRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21wVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBEaXYuYXBwZW5kKGNvbXBUb2dnbGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gY29tcERpdi5pbm5lckhUTUwgPSB0YXNrW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgdGFza0FydGljbGUuYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdFJlbW92ZU9sZFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGl2cyA9IHRhc2tBcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICAgICAgdGFza0RpdnMuZm9yRWFjaCggZGl2ID0+IGRpdi5yZW1vdmUoKSApO1xuXG4gICAgICAgIGlmICh0YXNrLnJlbW92ZSA9PT0gXCJ5ZXNcIikge1xuICAgICAgICAgICAgdGFza0FydGljbGUucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd1Rhc2tcIiwge3Rhc2sgLCB0YXNrQXJ0aWNsZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQub24oXCJzaG93TWFueVRhc2tzXCIsIGNsZWFyT2xkVGFza3NUaGVuU2hvd05ldyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhck9sZFRhc2tzVGhlblNob3dOZXcobWFueVRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tBcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza19hcnRpY2xlXCIpO1xuXG4gICAgICAgIGlmIChhbGxUYXNrQXJ0aWNsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsVGFza0FydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBtYW55VGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dUYXNrXCIsIHt0YXNrfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJyZW1vdmVQcm9qRGl2c1wiKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=