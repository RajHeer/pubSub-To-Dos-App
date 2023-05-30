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
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




function headerWithNav() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_0__;
    logo.setAttribute("id", "icon");
    
    // CREATE VIEW TABS
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.setAttribute("class", "hexagon");
    divProjects.innerText = "Projects";

    divProjects.addEventListener("click", (e) => {
        divProjects.children.length > 0
        ? _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger ("removeProjDivs", e.target)
        : _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getProjectsList");
    });

    _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("removeProjDivs", removeProjDivs);

    function removeProjDivs(target) {
        if (!target) {
            while (divProjects.firstChild) {
                divProjects.removeChild(divProjects.firstChild);
            }
            divProjects.innerText = "Projects";
        }
        else if (target.className === "proj_div") {
            _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getProjectsList", target);
        } 
    }

    _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("showProjDivs", showProjDivs);

    function showProjDivs(allProjDivs) {
        divProjects.append(...allProjDivs);
    }

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("class", "hexagon");
    divTasks.innerText = "All tasks";
    divTasks.addEventListener("click", () => {
        _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getAllTasks", null);
    });

    // APPEND VIEW TABS INTO NAV
    nav.appendChild(divProjects);
    nav.appendChild(divTasks);

    header.appendChild(h1);
    header.appendChild(logo);
    header.appendChild(nav);

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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function projects() {
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("makeProjDivs", showProjOptions);

    function showProjOptions(projects) {
        const allProjDivs = [];
        projects.forEach(project => {
            const projDiv = document.createElement("div");
            projDiv.setAttribute("class", "proj_div");
            projDiv.innerHTML = project;
            allProjDivs.push(projDiv);
        })
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showProjDivs", allProjDivs);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyV2l0aE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJtQjtBQUNYO0FBQ0s7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsdURBQWE7QUFDdkIsVUFBVSx1REFBYTtBQUN2QixLQUFLOztBQUVMLElBQUksa0RBQVE7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWE7QUFDekI7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFNkI7O0FBRWQ7QUFDZixJQUFJLGtEQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsdURBQWE7QUFDckI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9oZWFkZXJXaXRoTmF2LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBob25leWNvbWIgZnJvbSBcIi4vaG9uZXljb21iLnBuZ1wiO1xuaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcldpdGhOYXYoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIFxuICAgIGgxLmlubmVyVGV4dCA9IFwiQmVlIEJ1enp5LlwiO1xuICAgIGxvZ28uc3JjID0gaG9uZXljb21iO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpY29uXCIpO1xuICAgIFxuICAgIC8vIENSRUFURSBWSUVXIFRBQlNcbiAgICBwcm9qZWN0cygpO1xuICAgIGNvbnN0IGRpdlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuICAgIGRpdlByb2plY3RzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGV4YWdvblwiKTtcbiAgICBkaXZQcm9qZWN0cy5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBkaXZQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZGl2UHJvamVjdHMuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICA/IGV2ZW50LnRyaWdnZXIgKFwicmVtb3ZlUHJvakRpdnNcIiwgZS50YXJnZXQpXG4gICAgICAgIDogZXZlbnQudHJpZ2dlcihcImdldFByb2plY3RzTGlzdFwiKTtcbiAgICB9KTtcblxuICAgIGV2ZW50Lm9uKFwicmVtb3ZlUHJvakRpdnNcIiwgcmVtb3ZlUHJvakRpdnMpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvakRpdnModGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB3aGlsZSAoZGl2UHJvamVjdHMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGRpdlByb2plY3RzLnJlbW92ZUNoaWxkKGRpdlByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2UHJvamVjdHMuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09IFwicHJval9kaXZcIikge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcImdldFByb2plY3RzTGlzdFwiLCB0YXJnZXQpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwic2hvd1Byb2pEaXZzXCIsIHNob3dQcm9qRGl2cyk7XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvakRpdnMoYWxsUHJvakRpdnMpIHtcbiAgICAgICAgZGl2UHJvamVjdHMuYXBwZW5kKC4uLmFsbFByb2pEaXZzKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrc1wiKTtcbiAgICBkaXZUYXNrcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhleGFnb25cIik7XG4gICAgZGl2VGFza3MuaW5uZXJUZXh0ID0gXCJBbGwgdGFza3NcIjtcbiAgICBkaXZUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0QWxsVGFza3NcIiwgbnVsbCk7XG4gICAgfSk7XG5cbiAgICAvLyBBUFBFTkQgVklFVyBUQUJTIElOVE8gTkFWXG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdlByb2plY3RzKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2VGFza3MpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcbiAgICBldmVudC5vbihcIm1ha2VQcm9qRGl2c1wiLCBzaG93UHJvak9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2pPcHRpb25zKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGFsbFByb2pEaXZzID0gW107XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2pEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qX2RpdlwiKTtcbiAgICAgICAgICAgIHByb2pEaXYuaW5uZXJIVE1MID0gcHJvamVjdDtcbiAgICAgICAgICAgIGFsbFByb2pEaXZzLnB1c2gocHJvakRpdik7XG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93UHJvakRpdnNcIiwgYWxsUHJvakRpdnMpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==