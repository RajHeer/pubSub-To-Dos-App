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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _newData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newData */ "./src/newData.js");



function component() {
    const element = document.createElement("div");
  
    element.innerText = "Module loaded";
  
    return element;
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ0c7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBUTtBQUNSLHVEQUFhOztBQUViLGtEQUFRO0FBQ1IsdURBQWE7O0FBRWIsa0RBQVE7O0FBRVIsb0RBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxJQUFJLFVBQVU7QUFDekM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNEI7O0FBRTVCLGlFQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTs7QUFFQSxJQUFJLG9EQUFVOztBQUVkLENBQUMsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL25ld0RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbEJhY2spO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuYyA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVudHMpO1xuICAgIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50cygpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcblxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiXG5pbXBvcnQgbmV3RGF0YSBmcm9tIFwiLi9uZXdEYXRhXCJcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IFwiTW9kdWxlIGxvYWRlZFwiO1xuICBcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICBcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5ldmVudC5vbihcInVwZGF0ZURhdGFcIiwgY0JhY2spO1xuZXZlbnQudHJpZ2dlcihcInVwZGF0ZURhdGFcIiwgXCJIZWxsbyBXb3JsZCEhIVwiKTtcblxuZXZlbnQub24oXCJobW1tXCIsIGNCYWNrKTtcbmV2ZW50LnRyaWdnZXIoXCJobW1tXCIsIFwiTm90IHZlcmtcIik7XG5cbmV2ZW50Lm9uKFwibmV3RGF0YVwiLCBjQmFjazIpO1xuXG5ldmVudC5saXN0KCk7XG5cbmZ1bmN0aW9uIGNCYWNrKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZnVuY3Rpb24gY0JhY2syKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7ZGF0YVtrZXldfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIlxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbmV3RGF0YSgpIHtcblxuICAgIGNvbnN0IGRhdGEgPSAge1xuICAgICAgICB0YXNrOiBcIk1vdyBncmFzc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbiBzdHJpcGVzLlwiLFxuICAgICAgICBkdWU6IFwiTmV4dCBTdW5kYXlcIixcbiAgICAgICAgcmF0aW5nOiBcIkFtYmVyXCIsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgICBldmVudC50cmlnZ2VyKFwibmV3RGF0YVwiLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgc2V0VGltZW91dCh0cmlnZ2VyLCA1MDAwKTtcblxuICAgIGV2ZW50Lmxpc3QoKTtcblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==