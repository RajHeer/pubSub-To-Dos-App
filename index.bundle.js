"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["index"],{

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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



function headerWithNav() {
    
    const modules = {
        projects: (0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        tasks: (0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])()
    };

    const header = document.createElement("header");
      const h1 = document.createElement("h1");
      const logo = document.createElement("div")
      const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy";
    
    // CREATE VIEW TABS
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.innerText = "Projects";

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks")
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _newData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newData */ "./src/newData.js");
/* harmony import */ var _headerWithNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerWithNav */ "./src/headerWithNav.js");




function component() {

    const main = document.createElement("main");
    
    main.appendChild( (0,_headerWithNav__WEBPACK_IMPORTED_MODULE_2__["default"])() );
    
    return main;

}
  
document.body.appendChild(component());

_events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateData", cBack);
_events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("updateData", "Hello World!!!");

_events__WEBPACK_IMPORTED_MODULE_0__["default"].on("hmmm", cBack);
_events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("hmmm", "Not verk");

_events__WEBPACK_IMPORTED_MODULE_0__["default"].on("newData", cBack2);

_events__WEBPACK_IMPORTED_MODULE_0__["default"].list();

function cBack(data) {
    console.log(data);
}

function cBack2(data) {
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}


/***/ }),

/***/ "./src/newData.js":
/*!************************!*\
  !*** ./src/newData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function newData() {

    const data =  {
        task: "Mow grass",
        description: "In stripes.",
        due: "Next Sunday",
        rating: "Amber",
        complete: false
    };

    const trigger = () => {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("newData", data);
    };

    setTimeout(trigger, 5000);

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].list();

})());


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ047O0FBRWI7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFRO0FBQzFCLGVBQWUsa0RBQUs7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQzZCO0FBQ0c7QUFDWTs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBUTtBQUNSLHVEQUFhOztBQUViLGtEQUFRO0FBQ1IsdURBQWE7O0FBRWIsa0RBQVE7O0FBRVIsb0RBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxJQUFJLFVBQVU7QUFDekM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDNEI7O0FBRTVCLGlFQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTs7QUFFQSxJQUFJLG9EQUFVOztBQUVkLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQlU7O0FBRWY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIZTs7QUFFZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2hlYWRlcldpdGhOYXYuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvbmV3RGF0YS5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJXaXRoTmF2KCkge1xuICAgIFxuICAgIGNvbnN0IG1vZHVsZXMgPSB7XG4gICAgICAgIHByb2plY3RzOiBwcm9qZWN0cygpLFxuICAgICAgICB0YXNrczogdGFza3MoKVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBcbiAgICBoMS5pbm5lclRleHQgPSBcIkJlZSBCdXp6eVwiO1xuICAgIFxuICAgIC8vIENSRUFURSBWSUVXIFRBQlNcbiAgICBjb25zdCBkaXZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcbiAgICBkaXZQcm9qZWN0cy5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrc1wiKVxuICAgIGRpdlRhc2tzLmlubmVyVGV4dCA9IFwiVGFza3NcIjtcblxuICAgIC8vIEFQUEVORCBWSUVXIFRBQlMgSU5UTyBOQVZcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdHMpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIEFERCBMSVNURU5FUlMgVE8gQVBQRU5EIFNFQ1RJT05TICYgVE9HR0xFIFZJRVdcbiAgICBjb25zdCBkaXZzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbW9kdWxlc1tlLnRhcmdldC5pZF0gKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBuZXdEYXRhIGZyb20gXCIuL25ld0RhdGFcIjtcbmltcG9ydCBoZWFkZXJXaXRoTmF2IGZyb20gXCIuL2hlYWRlcldpdGhOYXZcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoIGhlYWRlcldpdGhOYXYoKSApO1xuICAgIFxuICAgIHJldHVybiBtYWluO1xuXG59XG4gIFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbmV2ZW50Lm9uKFwidXBkYXRlRGF0YVwiLCBjQmFjayk7XG5ldmVudC50cmlnZ2VyKFwidXBkYXRlRGF0YVwiLCBcIkhlbGxvIFdvcmxkISEhXCIpO1xuXG5ldmVudC5vbihcImhtbW1cIiwgY0JhY2spO1xuZXZlbnQudHJpZ2dlcihcImhtbW1cIiwgXCJOb3QgdmVya1wiKTtcblxuZXZlbnQub24oXCJuZXdEYXRhXCIsIGNCYWNrMik7XG5cbmV2ZW50Lmxpc3QoKTtcblxuZnVuY3Rpb24gY0JhY2soZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBjQmFjazIoZGF0YSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHtkYXRhW2tleV19YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBuZXdEYXRhKCkge1xuXG4gICAgY29uc3QgZGF0YSA9ICB7XG4gICAgICAgIHRhc2s6IFwiTW93IGdyYXNzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIHN0cmlwZXMuXCIsXG4gICAgICAgIGR1ZTogXCJOZXh0IFN1bmRheVwiLFxuICAgICAgICByYXRpbmc6IFwiQW1iZXJcIixcbiAgICAgICAgY29tcGxldGU6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJuZXdEYXRhXCIsIGRhdGEpO1xuICAgIH07XG5cbiAgICBzZXRUaW1lb3V0KHRyaWdnZXIsIDUwMDApO1xuXG4gICAgZXZlbnQubGlzdCgpO1xuXG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrcygpIHtcblxuICAgIFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==