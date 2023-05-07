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
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class","titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    section.append( taskTitle, dueTitle, compTitle );

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("newData", renderTask);

    function renderTask(data) {

        data.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = task["taskTitle"];
                
            const dueDiv = document.createElement("div");
            dueDiv.innerHTML = task["dueDate"];
                
            const compDiv = document.createElement("div");
            compDiv.innerHTML = task["complete"];

            section.append( taskDiv, dueDiv, compDiv );
        });

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showNewTask", showNewTask)

        function showNewTask(newtaskData) {
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = newtaskData["taskTitle"];
            taskDiv.setAttribute("id", newtaskData["id"]);
                
            const dueDiv = document.createElement("div");
            dueDiv.innerHTML = newtaskData["dueDate"];
                
            const compDiv = document.createElement("div");
            compDiv.innerHTML = newtaskData["complete"];

            section.append( taskDiv, dueDiv, compDiv );
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlE7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVULFFBQVEsa0RBQVE7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb21wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGR1ZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgY29tcFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IFwiVEFTS1wiO1xuICAgIGR1ZVRpdGxlLmlubmVySFRNTCA9IFwiRFVFXCI7XG4gICAgY29tcFRpdGxlLmlubmVySFRNTCA9IFwiRE9ORT9cIjtcblxuICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrVGl0bGUsIGR1ZVRpdGxlLCBjb21wVGl0bGUgKTtcblxuICAgIGV2ZW50Lm9uKFwibmV3RGF0YVwiLCByZW5kZXJUYXNrKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2soZGF0YSkge1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSB0YXNrW1wiZHVlRGF0ZVwiXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnQub24oXCJzaG93TmV3VGFza1wiLCBzaG93TmV3VGFzaylcblxuICAgICAgICBmdW5jdGlvbiBzaG93TmV3VGFzayhuZXd0YXNrRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IG5ld3Rhc2tEYXRhW1widGFza1RpdGxlXCJdO1xuICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuZXd0YXNrRGF0YVtcImlkXCJdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gbmV3dGFza0RhdGFbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IG5ld3Rhc2tEYXRhW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=