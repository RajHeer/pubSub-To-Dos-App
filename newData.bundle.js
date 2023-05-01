"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["newData"],{

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

    const data = [ 
        {
            task: "Mow grass",
            description: "In stripes.",
            due: "Next Sunday",
            rating: "Amber",
            complete: false,
            project: "Garden"
        },
        {
            task: "Wash car",
            description: "Wash, wax,",
            due: "Saturday",
            rating: "Red",
            complete: false,
            project: "Garage"
        }
    ];

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("newTaskData", showNewData);

    function showNewData(newData) {
        console.log(newData);
    }

    const trigger = () => {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("newData", data);
    };

    setTimeout(trigger, 5000);

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].list();

})());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/newData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3RGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTzs7QUFFNUIsaUVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCOztBQUVBOztBQUVBLElBQUksb0RBQVU7O0FBRWQsQ0FBQyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvbmV3RGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIG5ld0RhdGEoKSB7XG5cbiAgICBjb25zdCBkYXRhID0gWyBcbiAgICAgICAge1xuICAgICAgICAgICAgdGFzazogXCJNb3cgZ3Jhc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIHN0cmlwZXMuXCIsXG4gICAgICAgICAgICBkdWU6IFwiTmV4dCBTdW5kYXlcIixcbiAgICAgICAgICAgIHJhdGluZzogXCJBbWJlclwiLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvamVjdDogXCJHYXJkZW5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YXNrOiBcIldhc2ggY2FyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXYXNoLCB3YXgsXCIsXG4gICAgICAgICAgICBkdWU6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgIHJhdGluZzogXCJSZWRcIixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3Q6IFwiR2FyYWdlXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBldmVudC5vbihcIm5ld1Rhc2tEYXRhXCIsIHNob3dOZXdEYXRhKTtcblxuICAgIGZ1bmN0aW9uIHNob3dOZXdEYXRhKG5ld0RhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcIm5ld0RhdGFcIiwgZGF0YSk7XG4gICAgfTtcblxuICAgIHNldFRpbWVvdXQodHJpZ2dlciwgNTAwMCk7XG5cbiAgICBldmVudC5saXN0KCk7XG5cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=