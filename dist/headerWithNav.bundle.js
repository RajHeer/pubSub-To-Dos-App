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
    divProjects.setAttribute("class", "hexagon");
    divProjects.innerText = "Projects";

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("class", "hexagon");
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

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("initData", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showTask", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateTask", firstRemoveOldTask);

    function renderTask(task) {

        const taskArticle = document.createElement("article");
        taskArticle.setAttribute("id", task["id"]);

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task["id"]);
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
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task["id"]);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyV2l0aE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ007QUFDQTs7QUFFekI7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFRO0FBQzFCLHFCQUFxQix3REFBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERlOztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7O0FDRjZCOztBQUVkO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxrREFBUTtBQUNaLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFROztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9oZWFkZXJXaXRoTmF2LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3JlbmRlclRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGhvbmV5Y29tYiBmcm9tIFwiLi9ob25leWNvbWIucG5nXCI7XG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSBcIi4vcmVuZGVyVGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyV2l0aE5hdigpIHtcbiAgICBcbiAgICBjb25zdCBtb2R1bGVzID0ge1xuICAgICAgICBwcm9qZWN0czogcHJvamVjdHMoKSxcbiAgICAgICAgcmVuZGVyVGFza3M6IHJlbmRlclRhc2tzKClcbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIFxuICAgIGgxLmlubmVyVGV4dCA9IFwiQmVlIEJ1enp5LlwiO1xuICAgIGxvZ28uc3JjID0gaG9uZXljb21iO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpY29uXCIpO1xuICAgIFxuICAgIC8vIENSRUFURSBWSUVXIFRBQlNcbiAgICBjb25zdCBkaXZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcbiAgICBkaXZQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhleGFnb25cIik7XG4gICAgZGl2UHJvamVjdHMuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3NcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZXhhZ29uXCIpO1xuICAgIGRpdlRhc2tzLmlubmVyVGV4dCA9IFwiVGFza3NcIjtcblxuICAgIC8vIEFQUEVORCBWSUVXIFRBQlMgSU5UTyBOQVZcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdHMpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIEFERCBMSVNURU5FUlMgVE8gQVBQRU5EIFNFQ1RJT05TICYgVE9HR0xFIFZJRVdcbiAgICBjb25zdCBkaXZzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbW9kdWxlc1tlLnRhcmdldC5pZF0gKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzKCkge1xuXG59XG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IHRpdGxlc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb21wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGR1ZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgY29tcFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0aXRsZXNcIik7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IFwiVEFTSyAtIGNsaWNrIGl0ZW0gZm9yIGZ1bGwgZGV0YWlsXCI7XG4gICAgZHVlVGl0bGUuaW5uZXJIVE1MID0gXCJEVUVcIjtcbiAgICBjb21wVGl0bGUuaW5uZXJIVE1MID0gXCJET05FP1wiO1xuXG4gICAgdGl0bGVzQXJ0aWNsZS5hcHBlbmQoIHRhc2tUaXRsZSwgZHVlVGl0bGUsIGNvbXBUaXRsZSApO1xuICAgIHNlY3Rpb24uYXBwZW5kKCB0aXRsZXNBcnRpY2xlICk7XG5cbiAgICBldmVudC5vbihcImluaXREYXRhXCIsIHJlbmRlclRhc2spO1xuICAgIGV2ZW50Lm9uKFwic2hvd1Rhc2tcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJ1cGRhdGVUYXNrXCIsIGZpcnN0UmVtb3ZlT2xkVGFzayk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2spIHtcblxuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICB0YXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrW1wiaWRcIl0pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IHRhc2tbXCJ0YXNrVGl0bGVcIl07XG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFza1tcImlkXCJdKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2tbXCJkdWVEYXRlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRGl2LmlubmVySFRNTCA9IHRhc2tbXCJjb21wbGV0ZVwiXTtcblxuICAgICAgICB0YXNrQXJ0aWNsZS5hcHBlbmQoIHRhc2tEaXYsIGR1ZURpdiwgY29tcERpdiApO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCggdGFza0FydGljbGUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdFJlbW92ZU9sZFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGl2cyA9IHRhc2tBcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goIGRpdiA9PiBkaXYucmVtb3ZlKCkgKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSB0YXNrW1widGFza1RpdGxlXCJdO1xuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFRhc2tEYXRhXCIsIHRhc2tbXCJpZFwiXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSB0YXNrW1wiZHVlRGF0ZVwiXTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5pbm5lckhUTUwgPSB0YXNrW1wiY29tcGxldGVcIl07XG5cbiAgICAgICAgdGFza0FydGljbGUuYXBwZW5kKCB0YXNrRGl2LCBkdWVEaXYsIGNvbXBEaXYgKTtcblxuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9