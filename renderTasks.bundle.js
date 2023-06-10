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
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");




function renderTasks() {
    const section = document.createElement("section");

    const titlesArticle = document.createElement("article");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class", "titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK - click item for full detail";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    titlesArticle.append( taskTitle, dueTitle, compTitle );
    section.append( titlesArticle );

    
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showTask", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateTask", firstRemoveOldTask);

    function renderTask(task) {

        const taskArticle = document.createElement("article");
        taskArticle.setAttribute("id", task.id);
        taskArticle.setAttribute("class", "task_article");
        taskArticle.dataset.proj_type = task.project;

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.setAttribute("id", "task_title");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });

        const editBTN = document.createElement("img");
        editBTN.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
        editBTN.setAttribute("id", "edit_btn");

        const deleteBTN = document.createElement("img");
        deleteBTN.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;
        deleteBTN.setAttribute("id", "delete_btn");

        taskDiv.append ( editBTN, deleteBTN );
        
            
        const dueDiv = document.createElement("div");
        dueDiv.setAttribute("class", "task");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.setAttribute("class", "task");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
        section.append( taskArticle );
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.querySelectorAll(".task");
        taskDivs.forEach( div => div.remove() );

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.setAttribute("id", "task_title");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });

        const editBTN = document.createElement("img");
        editBTN.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
        editBTN.setAttribute("id", "edit_btn");

        const deleteBTN = document.createElement("img");
        deleteBTN.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;
        deleteBTN.setAttribute("id", "delete_btn");

        taskDiv.append ( editBTN, deleteBTN );
            
        const dueDiv = document.createElement("div");
        dueDiv.setAttribute("class", "task");
        dueDiv.innerHTML = task.dueDate;
            
        const compDiv = document.createElement("div");
        compDiv.setAttribute("class", "task");
        compDiv.innerHTML = task.complete;

        taskArticle.append( taskDiv, dueDiv, compDiv );

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
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", task);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/renderTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCUTtBQUNTO0FBQ0o7O0FBRW5CO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTOztBQUVUO0FBQ0Esc0JBQXNCLHNDQUFRO0FBQzlCOztBQUVBO0FBQ0Esd0JBQXdCLHdDQUFVO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTOztBQUVUO0FBQ0Esc0JBQXNCLHNDQUFRO0FBQzlCOztBQUVBO0FBQ0Esd0JBQXdCLHdDQUFVO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTOztBQUVULFFBQVEsdURBQWE7QUFDckI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgZGVsZXRlSUNPTiBmcm9tIFwiLi9kZWxldGUucG5nXCI7XG5pbXBvcnQgZWRpdElDT04gZnJvbSBcIi4vZWRpdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgdGl0bGVzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIik7XG4gICAgZHVlVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIik7XG4gICAgY29tcFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IFwiVEFTSyAtIGNsaWNrIGl0ZW0gZm9yIGZ1bGwgZGV0YWlsXCI7XG4gICAgZHVlVGl0bGUuaW5uZXJIVE1MID0gXCJEVUVcIjtcbiAgICBjb21wVGl0bGUuaW5uZXJIVE1MID0gXCJET05FP1wiO1xuXG4gICAgdGl0bGVzQXJ0aWNsZS5hcHBlbmQoIHRhc2tUaXRsZSwgZHVlVGl0bGUsIGNvbXBUaXRsZSApO1xuICAgIHNlY3Rpb24uYXBwZW5kKCB0aXRsZXNBcnRpY2xlICk7XG5cbiAgICBcbiAgICBldmVudC5vbihcInNob3dUYXNrXCIsIHJlbmRlclRhc2spO1xuICAgIGV2ZW50Lm9uKFwidXBkYXRlVGFza1wiLCBmaXJzdFJlbW92ZU9sZFRhc2spO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrKSB7XG5cbiAgICAgICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgdGFza0FydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICAgIHRhc2tBcnRpY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza19hcnRpY2xlXCIpO1xuICAgICAgICB0YXNrQXJ0aWNsZS5kYXRhc2V0LnByb2pfdHlwZSA9IHRhc2sucHJvamVjdDtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrX3RpdGxlXCIpO1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IHRhc2tbXCJ0YXNrVGl0bGVcIl07XG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFzay5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0QlROLnNyYyA9IGVkaXRJQ09OO1xuICAgICAgICBlZGl0QlROLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdF9idG5cIik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlQlROLnNyYyA9IGRlbGV0ZUlDT047XG4gICAgICAgIGRlbGV0ZUJUTi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZV9idG5cIik7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmQgKCBlZGl0QlROLCBkZWxldGVCVE4gKTtcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2tbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgdGFza0FydGljbGUuYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQoIHRhc2tBcnRpY2xlICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RSZW1vdmVPbGRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLmlkKTtcbiAgICAgICAgY29uc3QgdGFza0RpdnMgPSB0YXNrQXJ0aWNsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goIGRpdiA9PiBkaXYucmVtb3ZlKCkgKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrX3RpdGxlXCIpO1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IHRhc2tbXCJ0YXNrVGl0bGVcIl07XG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFzay5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0QlROLnNyYyA9IGVkaXRJQ09OO1xuICAgICAgICBlZGl0QlROLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdF9idG5cIik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlQlROLnNyYyA9IGRlbGV0ZUlDT047XG4gICAgICAgIGRlbGV0ZUJUTi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZV9idG5cIik7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmQgKCBlZGl0QlROLCBkZWxldGVCVE4gKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrLmNvbXBsZXRlO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG5cbiAgICB9XG5cbiAgICBldmVudC5vbihcInNob3dNYW55VGFza3NcIiwgY2xlYXJPbGRUYXNrc1RoZW5TaG93TmV3KTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyT2xkVGFza3NUaGVuU2hvd05ldyhtYW55VGFza3MpIHtcbiAgICAgICAgY29uc3QgYWxsVGFza0FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrX2FydGljbGVcIik7XG5cbiAgICAgICAgaWYgKGFsbFRhc2tBcnRpY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxUYXNrQXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIG1hbnlUYXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd1Rhc2tcIiwgdGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJyZW1vdmVQcm9qRGl2c1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==