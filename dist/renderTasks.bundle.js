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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFROztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWE7QUFDekIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IHRpdGxlc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb21wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGR1ZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgY29tcFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IFwiVEFTSyAtIGNsaWNrIGl0ZW0gZm9yIGZ1bGwgZGV0YWlsXCI7XG4gICAgZHVlVGl0bGUuaW5uZXJIVE1MID0gXCJEVUVcIjtcbiAgICBjb21wVGl0bGUuaW5uZXJIVE1MID0gXCJET05FP1wiO1xuXG4gICAgdGl0bGVzQXJ0aWNsZS5hcHBlbmQoIHRhc2tUaXRsZSwgZHVlVGl0bGUsIGNvbXBUaXRsZSApO1xuICAgIHNlY3Rpb24uYXBwZW5kKCB0aXRsZXNBcnRpY2xlICk7XG5cbiAgICBcbiAgICBldmVudC5vbihcInNob3dUYXNrXCIsIHJlbmRlclRhc2spO1xuICAgIGV2ZW50Lm9uKFwidXBkYXRlVGFza1wiLCBmaXJzdFJlbW92ZU9sZFRhc2spO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrKSB7XG5cbiAgICAgICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgdGFza0FydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICAgIHRhc2tBcnRpY2xlLmRhdGFzZXQucHJval90eXBlID0gdGFzay5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IHRhc2tbXCJ0YXNrVGl0bGVcIl07XG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFzay5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSB0YXNrW1wiZHVlRGF0ZVwiXTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgdGFza0FydGljbGUuYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQoIHRhc2tBcnRpY2xlICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RSZW1vdmVPbGRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLmlkKTtcbiAgICAgICAgY29uc3QgdGFza0RpdnMgPSB0YXNrQXJ0aWNsZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2cy5mb3JFYWNoKCBkaXYgPT4gZGl2LnJlbW92ZSgpICk7XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrRGF0YVwiLCB0YXNrLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrLmNvbXBsZXRlO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG5cbiAgICB9XG5cbiAgICBldmVudC5vbihcInNob3dNYW55VGFza3NcIiwgY2xlYXJPbGRUYXNrc1RoZW5TaG93TmV3KTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyT2xkVGFza3NUaGVuU2hvd05ldyhtYW55VGFza3MpIHtcbiAgICAgICAgY29uc3QgYWxsVGFza0FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFydGljbGVcIik7XG4gICAgICAgIGFsbFRhc2tBcnRpY2xlcy5mb3JFYWNoKCBhcnRpY2xlID0+IGFydGljbGUucmVtb3ZlKCkgKTtcbiAgICAgICAgbWFueVRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93VGFza1wiLCB0YXNrKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==