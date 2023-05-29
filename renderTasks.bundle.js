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
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
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
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
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
            console.log(allTaskArticles);
        }

        manyTasks.map(task => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", task);
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFROztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUksa0RBQVE7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFlBQVksdURBQWE7QUFDekIsU0FBUzs7QUFFVCxRQUFRLHVEQUFhO0FBQ3JCOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvcmVuZGVyVGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbEJhY2spO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuYyA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVudHMpO1xuICAgIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50cygpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcblxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCB0aXRsZXNBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29tcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlc1wiKTtcbiAgICBkdWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlc1wiKTtcbiAgICBjb21wVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gXCJUQVNLIC0gY2xpY2sgaXRlbSBmb3IgZnVsbCBkZXRhaWxcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICB0aXRsZXNBcnRpY2xlLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG4gICAgc2VjdGlvbi5hcHBlbmQoIHRpdGxlc0FydGljbGUgKTtcblxuICAgIFxuICAgIGV2ZW50Lm9uKFwic2hvd1Rhc2tcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJ1cGRhdGVUYXNrXCIsIGZpcnN0UmVtb3ZlT2xkVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2spIHtcblxuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICB0YXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgICAgdGFza0FydGljbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrX2FydGljbGVcIik7XG4gICAgICAgIHRhc2tBcnRpY2xlLmRhdGFzZXQucHJval90eXBlID0gdGFzay5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFRhc2tEYXRhXCIsIHRhc2suaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFza1tcImR1ZURhdGVcIl07XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IHRhc2tbXCJjb21wbGV0ZVwiXTtcblxuICAgICAgICB0YXNrQXJ0aWNsZS5hcHBlbmQoIHRhc2tEaXYsIGR1ZURpdiwgY29tcERpdiApO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCggdGFza0FydGljbGUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdFJlbW92ZU9sZFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGl2cyA9IHRhc2tBcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICAgICAgdGFza0RpdnMuZm9yRWFjaCggZGl2ID0+IGRpdi5yZW1vdmUoKSApO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFRhc2tEYXRhXCIsIHRhc2suaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrLmNvbXBsZXRlO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG5cbiAgICB9XG5cbiAgICBldmVudC5vbihcInNob3dNYW55VGFza3NcIiwgY2xlYXJPbGRUYXNrc1RoZW5TaG93TmV3KTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyT2xkVGFza3NUaGVuU2hvd05ldyhtYW55VGFza3MpIHtcbiAgICAgICAgY29uc3QgYWxsVGFza0FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrX2FydGljbGVcIik7XG5cbiAgICAgICAgaWYgKGFsbFRhc2tBcnRpY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxUYXNrQXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tBcnRpY2xlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtYW55VGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dUYXNrXCIsIHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwicmVtb3ZlUHJvakRpdnNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=