"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["newData"],{

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function newData() {

    const allTaskData = [ 
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            taskTitle: "Mow grass",
            description: "In stripes.",
            dueDate: "Next Sunday",
            rating: "Amber",
            complete: false,
            project: "Garden"
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            taskTitle: "Wash car",
            description: "Wash, wax,",
            dueDate: "Saturday",
            rating: "Red",
            complete: true,
            project: "Garage"
        }
    ];
    
    // On init displays sample data above
    getAllTasks();
    

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("getAllTasks", getAllTasks);

    function getAllTasks() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showManyTasks", allTaskData);
    }
    
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("dataFromForm", checkForID);

    function checkForID(taskData) {
        taskData.id 
        ? updateExistingRecord(taskData) 
        : generateIDAndAddNewRecord(taskData);
    }

    function updateExistingRecord(data) {
        const indexForUpdate = allTaskData.findIndex(task => task.id === data.id);
        allTaskData[indexForUpdate] = data;
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("updateTask", data);
    }

    function generateIDAndAddNewRecord(data) {
        data.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        allTaskData.push(data);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", {task: data});
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("getTaskData", getDataForEditFormOrDeleteTask);

    function getDataForEditFormOrDeleteTask( { taskID, removeTask = "no", readTask = "no"} ) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                if (removeTask === "no") {
                    if (readTask === "no") {
                        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showFormWithRetrievedData", {retrievedTaskData: task});
                    } else {
                        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showFormWithRetrievedData", {retrievedTaskData: task, readTask: "yes"});
                    }
                } else {
                    task.remove = "yes";
                    _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("updateTask", task);
                    let taskToRemove = allTaskData.indexOf(task);
                    allTaskData.splice(taskToRemove, 1);
                }
            }
        });
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("taskStatusChange", changeTaskStatus);

    function changeTaskStatus( {taskID, complete = false} ) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                task.complete = complete;
            }
        });
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("getProjectsList", getProjList);

    function getProjList() {
        const projList = [];
        allTaskData.map(task => {
            !projList.includes(task.project) 
            ? projList.push(task.project) 
            : false;
        });
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("makeProjDivs", projList);
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("getTasksByProject", getTasksByProj);

    function getTasksByProj(project) {
        const tasksByProj = [];
        allTaskData.map(task => {
            task.project === project
            ? tasksByProj.push(task)
            : false;
        })
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showManyTasks", tasksByProj);
    }

})());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/newData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL25ld0RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiY2xhc3MgRXZlbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbEJhY2spO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuYyA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVudHMpO1xuICAgIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50cygpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcblxuIiwiaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbmV3RGF0YSgpIHtcblxuICAgIGNvbnN0IGFsbFRhc2tEYXRhID0gWyBcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIHRhc2tUaXRsZTogXCJNb3cgZ3Jhc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIHN0cmlwZXMuXCIsXG4gICAgICAgICAgICBkdWVEYXRlOiBcIk5leHQgU3VuZGF5XCIsXG4gICAgICAgICAgICByYXRpbmc6IFwiQW1iZXJcIixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3Q6IFwiR2FyZGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIHRhc2tUaXRsZTogXCJXYXNoIGNhclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2FzaCwgd2F4LFwiLFxuICAgICAgICAgICAgZHVlRGF0ZTogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgcmF0aW5nOiBcIlJlZFwiLFxuICAgICAgICAgICAgY29tcGxldGU6IHRydWUsXG4gICAgICAgICAgICBwcm9qZWN0OiBcIkdhcmFnZVwiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIFxuICAgIC8vIE9uIGluaXQgZGlzcGxheXMgc2FtcGxlIGRhdGEgYWJvdmVcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIFxuXG4gICAgZXZlbnQub24oXCJnZXRBbGxUYXNrc1wiLCBnZXRBbGxUYXNrcyk7XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dNYW55VGFza3NcIiwgYWxsVGFza0RhdGEpO1xuICAgIH1cbiAgICBcbiAgICBldmVudC5vbihcImRhdGFGcm9tRm9ybVwiLCBjaGVja0ZvcklEKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9ySUQodGFza0RhdGEpIHtcbiAgICAgICAgdGFza0RhdGEuaWQgXG4gICAgICAgID8gdXBkYXRlRXhpc3RpbmdSZWNvcmQodGFza0RhdGEpIFxuICAgICAgICA6IGdlbmVyYXRlSURBbmRBZGROZXdSZWNvcmQodGFza0RhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUV4aXN0aW5nUmVjb3JkKGRhdGEpIHtcbiAgICAgICAgY29uc3QgaW5kZXhGb3JVcGRhdGUgPSBhbGxUYXNrRGF0YS5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSBkYXRhLmlkKTtcbiAgICAgICAgYWxsVGFza0RhdGFbaW5kZXhGb3JVcGRhdGVdID0gZGF0YTtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInVwZGF0ZVRhc2tcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVJREFuZEFkZE5ld1JlY29yZChkYXRhKSB7XG4gICAgICAgIGRhdGEuaWQgPSB1dWlkKCk7XG4gICAgICAgIGFsbFRhc2tEYXRhLnB1c2goZGF0YSk7XG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93VGFza1wiLCB7dGFzazogZGF0YX0pO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwiZ2V0VGFza0RhdGFcIiwgZ2V0RGF0YUZvckVkaXRGb3JtT3JEZWxldGVUYXNrKTtcblxuICAgIGZ1bmN0aW9uIGdldERhdGFGb3JFZGl0Rm9ybU9yRGVsZXRlVGFzayggeyB0YXNrSUQsIHJlbW92ZVRhc2sgPSBcIm5vXCIsIHJlYWRUYXNrID0gXCJub1wifSApIHtcbiAgICAgICAgYWxsVGFza0RhdGEuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tJRCkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVUYXNrID09PSBcIm5vXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRUYXNrID09PSBcIm5vXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93Rm9ybVdpdGhSZXRyaWV2ZWREYXRhXCIsIHtyZXRyaWV2ZWRUYXNrRGF0YTogdGFza30pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dGb3JtV2l0aFJldHJpZXZlZERhdGFcIiwge3JldHJpZXZlZFRhc2tEYXRhOiB0YXNrLCByZWFkVGFzazogXCJ5ZXNcIn0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5yZW1vdmUgPSBcInllc1wiO1xuICAgICAgICAgICAgICAgICAgICBldmVudC50cmlnZ2VyKFwidXBkYXRlVGFza1wiLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tUb1JlbW92ZSA9IGFsbFRhc2tEYXRhLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tEYXRhLnNwbGljZSh0YXNrVG9SZW1vdmUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZlbnQub24oXCJ0YXNrU3RhdHVzQ2hhbmdlXCIsIGNoYW5nZVRhc2tTdGF0dXMpO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFza1N0YXR1cygge3Rhc2tJRCwgY29tcGxldGUgPSBmYWxzZX0gKSB7XG4gICAgICAgIGFsbFRhc2tEYXRhLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSUQpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwiZ2V0UHJvamVjdHNMaXN0XCIsIGdldFByb2pMaXN0KTtcblxuICAgIGZ1bmN0aW9uIGdldFByb2pMaXN0KCkge1xuICAgICAgICBjb25zdCBwcm9qTGlzdCA9IFtdO1xuICAgICAgICBhbGxUYXNrRGF0YS5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAhcHJvakxpc3QuaW5jbHVkZXModGFzay5wcm9qZWN0KSBcbiAgICAgICAgICAgID8gcHJvakxpc3QucHVzaCh0YXNrLnByb2plY3QpIFxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJtYWtlUHJvakRpdnNcIiwgcHJvakxpc3QpO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwiZ2V0VGFza3NCeVByb2plY3RcIiwgZ2V0VGFza3NCeVByb2opO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFza3NCeVByb2oocHJvamVjdCkge1xuICAgICAgICBjb25zdCB0YXNrc0J5UHJvaiA9IFtdO1xuICAgICAgICBhbGxUYXNrRGF0YS5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLnByb2plY3QgPT09IHByb2plY3RcbiAgICAgICAgICAgID8gdGFza3NCeVByb2oucHVzaCh0YXNrKVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dNYW55VGFza3NcIiwgdGFza3NCeVByb2opO1xuICAgIH1cblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==