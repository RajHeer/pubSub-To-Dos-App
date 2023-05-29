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


function renderTasks() {
    const section = document.createElement("section");

    const titlesArticle = document.createElement("article");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class","titles");
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
        taskArticle.dataset.proj_type = task.project;

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
        section.append( taskArticle );
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.querySelectorAll("div");
        taskDivs.forEach( div => div.remove() );

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task.dueDate;
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task.complete;

        taskArticle.append( taskDiv, dueDiv, compDiv );

    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showManyTasks", clearOldTasksThenShowNew);

    function clearOldTasksThenShowNew(manyTasks) {
        const allTaskArticles = document.querySelectorAll("article");
        allTaskArticles.forEach( article => article.remove() );
        manyTasks.map(task => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", task);
        })
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("removeProjDivs");
    }

    return section;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/renderTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFROztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWE7QUFDekIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTO0FBQ1QsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3JlbmRlclRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgdGl0bGVzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIik7XG4gICAgZHVlVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICBjb21wVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gXCJUQVNLIC0gY2xpY2sgaXRlbSBmb3IgZnVsbCBkZXRhaWxcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICB0aXRsZXNBcnRpY2xlLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG4gICAgc2VjdGlvbi5hcHBlbmQoIHRpdGxlc0FydGljbGUgKTtcblxuICAgIFxuICAgIGV2ZW50Lm9uKFwic2hvd1Rhc2tcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJ1cGRhdGVUYXNrXCIsIGZpcnN0UmVtb3ZlT2xkVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2spIHtcblxuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICB0YXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgICAgdGFza0FydGljbGUuZGF0YXNldC5wcm9qX3R5cGUgPSB0YXNrLnByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrRGF0YVwiLCB0YXNrLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2tbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IHRhc2tbXCJjb21wbGV0ZVwiXTtcblxuICAgICAgICB0YXNrQXJ0aWNsZS5hcHBlbmQoIHRhc2tEaXYsIGR1ZURpdiwgY29tcERpdiApO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCggdGFza0FydGljbGUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdFJlbW92ZU9sZFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGl2cyA9IHRhc2tBcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goIGRpdiA9PiBkaXYucmVtb3ZlKCkgKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFRhc2tEYXRhXCIsIHRhc2suaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IHRhc2suY29tcGxldGU7XG5cbiAgICAgICAgdGFza0FydGljbGUuYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcblxuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwic2hvd01hbnlUYXNrc1wiLCBjbGVhck9sZFRhc2tzVGhlblNob3dOZXcpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJPbGRUYXNrc1RoZW5TaG93TmV3KG1hbnlUYXNrcykge1xuICAgICAgICBjb25zdCBhbGxUYXNrQXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgYWxsVGFza0FydGljbGVzLmZvckVhY2goIGFydGljbGUgPT4gYXJ0aWNsZS5yZW1vdmUoKSApO1xuICAgICAgICBtYW55VGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dUYXNrXCIsIHRhc2spO1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50cmlnZ2VyKFwicmVtb3ZlUHJvakRpdnNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=