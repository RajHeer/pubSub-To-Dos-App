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

    const allTaskData = [ 
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

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("newTaskData", pushNewData);

    function pushNewData(newData) {
        allTaskData.push(newData);
        console.log(allTaskData);
    }

    const trigger = () => {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("newData", allTaskData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3RGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTzs7QUFFNUIsaUVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7O0FBRUE7O0FBRUEsSUFBSSxvREFBVTs7QUFFZCxDQUFDLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9uZXdEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnRzKTtcbiAgICB9XG59O1xuXG5jb25zdCBldmVudCA9IG5ldyBFdmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnQ7XG5cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIlxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbmV3RGF0YSgpIHtcblxuICAgIGNvbnN0IGFsbFRhc2tEYXRhID0gWyBcbiAgICAgICAge1xuICAgICAgICAgICAgdGFzazogXCJNb3cgZ3Jhc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIHN0cmlwZXMuXCIsXG4gICAgICAgICAgICBkdWU6IFwiTmV4dCBTdW5kYXlcIixcbiAgICAgICAgICAgIHJhdGluZzogXCJBbWJlclwiLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvamVjdDogXCJHYXJkZW5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YXNrOiBcIldhc2ggY2FyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXYXNoLCB3YXgsXCIsXG4gICAgICAgICAgICBkdWU6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgIHJhdGluZzogXCJSZWRcIixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3Q6IFwiR2FyYWdlXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBldmVudC5vbihcIm5ld1Rhc2tEYXRhXCIsIHB1c2hOZXdEYXRhKTtcblxuICAgIGZ1bmN0aW9uIHB1c2hOZXdEYXRhKG5ld0RhdGEpIHtcbiAgICAgICAgYWxsVGFza0RhdGEucHVzaChuZXdEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza0RhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJuZXdEYXRhXCIsIGFsbFRhc2tEYXRhKTtcbiAgICB9O1xuXG4gICAgc2V0VGltZW91dCh0cmlnZ2VyLCA1MDAwKTtcblxuICAgIGV2ZW50Lmxpc3QoKTtcblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==