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

    function renderTask({ task, taskArticle = undefined }) {

        console.log(task);
        console.log(taskArticle);

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

        const editBTN = document.createElement("img");
        editBTN.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
        editBTN.setAttribute("id", "edit_btn");
        editBTN.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });

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
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.querySelectorAll(".task");
        taskDivs.forEach( div => div.remove() );

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", {task , taskArticle});
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/renderTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCUTtBQUNTO0FBQ0o7O0FBRW5CO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTs7QUFFWiwwQkFBMEIsK0JBQStCOztBQUV6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0NBQVE7QUFDOUI7QUFDQTtBQUNBLFlBQVksdURBQWE7QUFDekIsU0FBUzs7QUFFVDtBQUNBLHdCQUF3Qix3Q0FBVTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQWEsY0FBYyxtQkFBbUI7QUFDdEQ7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFlBQVksdURBQWEsY0FBYyxLQUFLO0FBQzVDLFNBQVM7O0FBRVQsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3JlbmRlclRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBkZWxldGVJQ09OIGZyb20gXCIuL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCBlZGl0SUNPTiBmcm9tIFwiLi9lZGl0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCB0aXRsZXNBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29tcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlc1wiKTtcbiAgICBkdWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlc1wiKTtcbiAgICBjb21wVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gXCJUQVNLIC0gY2xpY2sgaXRlbSBmb3IgZnVsbCBkZXRhaWxcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICB0aXRsZXNBcnRpY2xlLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG4gICAgc2VjdGlvbi5hcHBlbmQoIHRpdGxlc0FydGljbGUgKTtcblxuICAgIFxuICAgIGV2ZW50Lm9uKFwic2hvd1Rhc2tcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJ1cGRhdGVUYXNrXCIsIGZpcnN0UmVtb3ZlT2xkVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKHsgdGFzaywgdGFza0FydGljbGUgPSB1bmRlZmluZWQgfSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJ0aWNsZSk7XG5cbiAgICAgICAgaWYgKHRhc2tBcnRpY2xlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgICAgICBuZXdUYXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgICAgICAgIG5ld1Rhc2tBcnRpY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza19hcnRpY2xlXCIpO1xuICAgICAgICAgICAgbmV3VGFza0FydGljbGUuZGF0YXNldC5wcm9qX3R5cGUgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgICAgICB0YXNrQXJ0aWNsZSA9IG5ld1Rhc2tBcnRpY2xlOyBcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrQXJ0aWNsZSApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza190aXRsZVwiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0QlROLnNyYyA9IGVkaXRJQ09OO1xuICAgICAgICBlZGl0QlROLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdF9idG5cIik7XG4gICAgICAgIGVkaXRCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFzay5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbGV0ZUJUTi5zcmMgPSBkZWxldGVJQ09OO1xuICAgICAgICBkZWxldGVCVE4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVfYnRuXCIpO1xuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kICggZWRpdEJUTiwgZGVsZXRlQlROICk7XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSB0YXNrW1wiZHVlRGF0ZVwiXTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIGNvbXBEaXYuaW5uZXJIVE1MID0gdGFza1tcImNvbXBsZXRlXCJdO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RSZW1vdmVPbGRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLmlkKTtcbiAgICAgICAgY29uc3QgdGFza0RpdnMgPSB0YXNrQXJ0aWNsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goIGRpdiA9PiBkaXYucmVtb3ZlKCkgKTtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd1Rhc2tcIiwge3Rhc2sgLCB0YXNrQXJ0aWNsZX0pO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwic2hvd01hbnlUYXNrc1wiLCBjbGVhck9sZFRhc2tzVGhlblNob3dOZXcpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJPbGRUYXNrc1RoZW5TaG93TmV3KG1hbnlUYXNrcykge1xuICAgICAgICBjb25zdCBhbGxUYXNrQXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tfYXJ0aWNsZVwiKTtcblxuICAgICAgICBpZiAoYWxsVGFza0FydGljbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbFRhc2tBcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgIGFydGljbGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbWFueVRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93VGFza1wiLCB7dGFza30pO1xuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwicmVtb3ZlUHJvakRpdnNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=