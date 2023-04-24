"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["headerWithNav"],{

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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");




function headerWithNav() {
    
    const modules = {
        projects: (0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        tasks: (0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])()
    };

    const header = document.createElement("header");
      const h1 = document.createElement("h1");
      const logo = document.createElement("img");
      const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__;
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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tasks)
/* harmony export */ });
function tasks() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyV2l0aE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNOO0FBQ1c7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQixxREFBUTtBQUMxQixlQUFlLGtEQUFLO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwRGU7O0FBRWY7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlOztBQUVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvaGVhZGVyV2l0aE5hdi5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IGhvbmV5Y29tYiBmcm9tIFwiLi9ob25leWNvbWIucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyV2l0aE5hdigpIHtcbiAgICBcbiAgICBjb25zdCBtb2R1bGVzID0ge1xuICAgICAgICBwcm9qZWN0czogcHJvamVjdHMoKSxcbiAgICAgICAgdGFza3M6IHRhc2tzKClcbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIFxuICAgIGgxLmlubmVyVGV4dCA9IFwiQmVlIEJ1enp5LlwiO1xuICAgIGxvZ28uc3JjID0gaG9uZXljb21iO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpY29uXCIpO1xuICAgIFxuICAgIC8vIENSRUFURSBWSUVXIFRBQlNcbiAgICBjb25zdCBkaXZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcbiAgICBkaXZQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhleGFnb25cIik7XG4gICAgZGl2UHJvamVjdHMuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3NcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXhhZ29uXCIpO1xuICAgIGRpdlRhc2tzLmlubmVyVGV4dCA9IFwiVGFza3NcIjtcblxuICAgIC8vIEFQUEVORCBWSUVXIFRBQlMgSU5UTyBOQVZcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdHMpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIEFERCBMSVNURU5FUlMgVE8gQVBQRU5EIFNFQ1RJT05TICYgVE9HR0xFIFZJRVdcbiAgICBjb25zdCBkaXZzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbW9kdWxlc1tlLnRhcmdldC5pZF0gKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzKCkge1xuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrcygpIHtcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9