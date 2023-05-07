"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["headerWithNav"],{

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

/***/ "./src/headerWithNav.js":
/*!******************************!*\
  !*** ./src/headerWithNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerWithNav)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");




function headerWithNav() {
    
    const modules = {
        projects: (0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        renderTasks: (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])()
    };

    const header = document.createElement("header");
      const h1 = document.createElement("h1");
      const logo = document.createElement("img");
      const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_1__;
    logo.setAttribute("id", "icon");
    
    // CREATE VIEW TABS
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.setAttribute("id", "hexagon");
    divProjects.innerText = "Projects";

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("id", "hexagon");
    divTasks.innerText = "Tasks";

    // APPEND VIEW TABS INTO NAV
    nav.appendChild(divProjects);
    nav.appendChild(divTasks);

    header.appendChild(h1);
    header.appendChild(logo);
    header.appendChild(nav);

    // ADD LISTENERS TO APPEND SECTIONS & TOGGLE VIEW
    const divs = nav.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("click", (e) =>{
            if ( document.querySelector("section") != null ) {
                const section = document.querySelector("section");
                section.remove();
            }
            document.body.appendChild( modules[e.target.id] );
        })
    });
    
    return header;
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {

}


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
            taskDiv.setAttribute("id", task["id"]);
                
            const dueDiv = document.createElement("div");
            dueDiv.innerHTML = task["dueDate"];
                
            const compDiv = document.createElement("div");
            compDiv.innerHTML = task["complete"];

            section.append( taskDiv, dueDiv, compDiv );
        });
    }

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

    return section;
}


/***/ }),

/***/ "./src/honeycomb.png":
/*!***************************!*\
  !*** ./src/honeycomb.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2463a42feced53d8856b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/headerWithNav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyV2l0aE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ007QUFDQTs7QUFFekI7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFRO0FBQzFCLHFCQUFxQix3REFBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERlOztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7O0FDRjZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksa0RBQVE7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvaGVhZGVyV2l0aE5hdi5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBob25leWNvbWIgZnJvbSBcIi4vaG9uZXljb21iLnBuZ1wiO1xuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gXCIuL3JlbmRlclRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcldpdGhOYXYoKSB7XG4gICAgXG4gICAgY29uc3QgbW9kdWxlcyA9IHtcbiAgICAgICAgcHJvamVjdHM6IHByb2plY3RzKCksXG4gICAgICAgIHJlbmRlclRhc2tzOiByZW5kZXJUYXNrcygpXG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBcbiAgICBoMS5pbm5lclRleHQgPSBcIkJlZSBCdXp6eS5cIjtcbiAgICBsb2dvLnNyYyA9IGhvbmV5Y29tYjtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvblwiKTtcbiAgICBcbiAgICAvLyBDUkVBVEUgVklFVyBUQUJTXG4gICAgY29uc3QgZGl2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXhhZ29uXCIpO1xuICAgIGRpdlByb2plY3RzLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzXCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGV4YWdvblwiKTtcbiAgICBkaXZUYXNrcy5pbm5lclRleHQgPSBcIlRhc2tzXCI7XG5cbiAgICAvLyBBUFBFTkQgVklFVyBUQUJTIElOVE8gTkFWXG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdlByb2plY3RzKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2VGFza3MpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAvLyBBREQgTElTVEVORVJTIFRPIEFQUEVORCBTRUNUSU9OUyAmIFRPR0dMRSBWSUVXXG4gICAgY29uc3QgZGl2cyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIikgIT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIG1vZHVsZXNbZS50YXJnZXQuaWRdICk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcblxufVxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29tcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlc1wiKTtcbiAgICBkdWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGl0bGVzXCIpO1xuICAgIGNvbXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGl0bGVzXCIpO1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBcIlRBU0tcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICBzZWN0aW9uLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG5cbiAgICBldmVudC5vbihcIm5ld0RhdGFcIiwgcmVuZGVyVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKGRhdGEpIHtcblxuICAgICAgICBkYXRhLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFza1tcImlkXCJdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFza1tcImR1ZURhdGVcIl07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbXBEaXYuaW5uZXJIVE1MID0gdGFza1tcImNvbXBsZXRlXCJdO1xuXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwic2hvd05ld1Rhc2tcIiwgc2hvd05ld1Rhc2spXG5cbiAgICBmdW5jdGlvbiBzaG93TmV3VGFzayhuZXd0YXNrRGF0YSkge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBuZXd0YXNrRGF0YVtcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuZXd0YXNrRGF0YVtcImlkXCJdKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gbmV3dGFza0RhdGFbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IG5ld3Rhc2tEYXRhW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgc2VjdGlvbi5hcHBlbmQoIHRhc2tEaXYsIGR1ZURpdiwgY29tcERpdiApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9