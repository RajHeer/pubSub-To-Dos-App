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

    let allTaskData = [ 
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
    
    let storage = window.localStorage;
    // storage.removeItem("allData");
   
    // On init displays sample data above 
    // and sets storage

    initStorage();

    function initStorage() {
        if (storage.length === 0) {
            setStorage();
        } else {
            let retrievedStorage = storage.getItem("allData");
            let allDataParsed = JSON.parse(retrievedStorage);
            allTaskData = allDataParsed;
        }
        getAllTasks();
    }

    function setStorage() {
        let allDataJSON = JSON.stringify(allTaskData);
        storage.setItem("allData", allDataJSON);
    }
    
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("getAllTasks", getAllTasks);

    function getAllTasks() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showManyTasks", allTaskData);
    }
    
    
    // When data via form is received
    // checks for an ID then either 
    // looks up existing record and updates
    // or generates a new ID for new record

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("dataFromForm", checkForID);

    function checkForID(taskData) {
        taskData.id 
        ? updateExistingRecord(taskData) 
        : generateIDAndAddNewRecord(taskData);
    }

    function updateExistingRecord(data) {
        const indexForUpdate = allTaskData.findIndex(task => task.id === data.id);
        allTaskData[indexForUpdate] = data;
        setStorage();
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("updateTask", data);
    }

    function generateIDAndAddNewRecord(data) {
        data.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        allTaskData.push(data);
        setStorage();
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
                    setStorage();
                }
            }
        });
    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("taskStatusChange", changeTaskStatus);

    function changeTaskStatus( {taskID, complete = false} ) {
        allTaskData.filter(task => {
            if (task.id === taskID) {
                task.complete = complete;
                setStorage();
            }
        });
    }

    // Generates list of all projects
    // to then send to corresponding
    // drop down menu

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

    // Takes all data (tasks) corresponding 
    // to selected project and then 
    // send just these for rendering
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsUUFBUSx1REFBYTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVE7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsdURBQWE7QUFDckI7O0FBRUEsQ0FBQyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvbmV3RGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBuZXdEYXRhKCkge1xuXG4gICAgbGV0IGFsbFRhc2tEYXRhID0gWyBcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIHRhc2tUaXRsZTogXCJNb3cgZ3Jhc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIHN0cmlwZXMuXCIsXG4gICAgICAgICAgICBkdWVEYXRlOiBcIk5leHQgU3VuZGF5XCIsXG4gICAgICAgICAgICByYXRpbmc6IFwiQW1iZXJcIixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3Q6IFwiR2FyZGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIHRhc2tUaXRsZTogXCJXYXNoIGNhclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2FzaCwgd2F4LFwiLFxuICAgICAgICAgICAgZHVlRGF0ZTogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgcmF0aW5nOiBcIlJlZFwiLFxuICAgICAgICAgICAgY29tcGxldGU6IHRydWUsXG4gICAgICAgICAgICBwcm9qZWN0OiBcIkdhcmFnZVwiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIFxuICAgIGxldCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICAvLyBzdG9yYWdlLnJlbW92ZUl0ZW0oXCJhbGxEYXRhXCIpO1xuICAgXG4gICAgLy8gT24gaW5pdCBkaXNwbGF5cyBzYW1wbGUgZGF0YSBhYm92ZSBcbiAgICAvLyBhbmQgc2V0cyBzdG9yYWdlXG5cbiAgICBpbml0U3RvcmFnZSgpO1xuXG4gICAgZnVuY3Rpb24gaW5pdFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmIChzdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2V0U3RvcmFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFN0b3JhZ2UgPSBzdG9yYWdlLmdldEl0ZW0oXCJhbGxEYXRhXCIpO1xuICAgICAgICAgICAgbGV0IGFsbERhdGFQYXJzZWQgPSBKU09OLnBhcnNlKHJldHJpZXZlZFN0b3JhZ2UpO1xuICAgICAgICAgICAgYWxsVGFza0RhdGEgPSBhbGxEYXRhUGFyc2VkO1xuICAgICAgICB9XG4gICAgICAgIGdldEFsbFRhc2tzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IGFsbERhdGFKU09OID0gSlNPTi5zdHJpbmdpZnkoYWxsVGFza0RhdGEpO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oXCJhbGxEYXRhXCIsIGFsbERhdGFKU09OKTtcbiAgICB9XG4gICAgXG4gICAgZXZlbnQub24oXCJnZXRBbGxUYXNrc1wiLCBnZXRBbGxUYXNrcyk7XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dNYW55VGFza3NcIiwgYWxsVGFza0RhdGEpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyBXaGVuIGRhdGEgdmlhIGZvcm0gaXMgcmVjZWl2ZWRcbiAgICAvLyBjaGVja3MgZm9yIGFuIElEIHRoZW4gZWl0aGVyIFxuICAgIC8vIGxvb2tzIHVwIGV4aXN0aW5nIHJlY29yZCBhbmQgdXBkYXRlc1xuICAgIC8vIG9yIGdlbmVyYXRlcyBhIG5ldyBJRCBmb3IgbmV3IHJlY29yZFxuXG4gICAgZXZlbnQub24oXCJkYXRhRnJvbUZvcm1cIiwgY2hlY2tGb3JJRCk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0ZvcklEKHRhc2tEYXRhKSB7XG4gICAgICAgIHRhc2tEYXRhLmlkIFxuICAgICAgICA/IHVwZGF0ZUV4aXN0aW5nUmVjb3JkKHRhc2tEYXRhKSBcbiAgICAgICAgOiBnZW5lcmF0ZUlEQW5kQWRkTmV3UmVjb3JkKHRhc2tEYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFeGlzdGluZ1JlY29yZChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGluZGV4Rm9yVXBkYXRlID0gYWxsVGFza0RhdGEuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gZGF0YS5pZCk7XG4gICAgICAgIGFsbFRhc2tEYXRhW2luZGV4Rm9yVXBkYXRlXSA9IGRhdGE7XG4gICAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInVwZGF0ZVRhc2tcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVJREFuZEFkZE5ld1JlY29yZChkYXRhKSB7XG4gICAgICAgIGRhdGEuaWQgPSB1dWlkKCk7XG4gICAgICAgIGFsbFRhc2tEYXRhLnB1c2goZGF0YSk7XG4gICAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dUYXNrXCIsIHt0YXNrOiBkYXRhfSk7XG4gICAgfVxuXG4gICAgZXZlbnQub24oXCJnZXRUYXNrRGF0YVwiLCBnZXREYXRhRm9yRWRpdEZvcm1PckRlbGV0ZVRhc2spO1xuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YUZvckVkaXRGb3JtT3JEZWxldGVUYXNrKCB7IHRhc2tJRCwgcmVtb3ZlVGFzayA9IFwibm9cIiwgcmVhZFRhc2sgPSBcIm5vXCJ9ICkge1xuICAgICAgICBhbGxUYXNrRGF0YS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lEKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZVRhc2sgPT09IFwibm9cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZFRhc2sgPT09IFwibm9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dGb3JtV2l0aFJldHJpZXZlZERhdGFcIiwge3JldHJpZXZlZFRhc2tEYXRhOiB0YXNrfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd0Zvcm1XaXRoUmV0cmlldmVkRGF0YVwiLCB7cmV0cmlldmVkVGFza0RhdGE6IHRhc2ssIHJlYWRUYXNrOiBcInllc1wifSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZSA9IFwieWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJ1cGRhdGVUYXNrXCIsIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza1RvUmVtb3ZlID0gYWxsVGFza0RhdGEuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsVGFza0RhdGEuc3BsaWNlKHRhc2tUb1JlbW92ZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uKFwidGFza1N0YXR1c0NoYW5nZVwiLCBjaGFuZ2VUYXNrU3RhdHVzKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRhc2tTdGF0dXMoIHt0YXNrSUQsIGNvbXBsZXRlID0gZmFsc2V9ICkge1xuICAgICAgICBhbGxUYXNrRGF0YS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lEKSB7XG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIGxpc3Qgb2YgYWxsIHByb2plY3RzXG4gICAgLy8gdG8gdGhlbiBzZW5kIHRvIGNvcnJlc3BvbmRpbmdcbiAgICAvLyBkcm9wIGRvd24gbWVudVxuXG4gICAgZXZlbnQub24oXCJnZXRQcm9qZWN0c0xpc3RcIiwgZ2V0UHJvakxpc3QpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvakxpc3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2pMaXN0ID0gW107XG4gICAgICAgIGFsbFRhc2tEYXRhLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICFwcm9qTGlzdC5pbmNsdWRlcyh0YXNrLnByb2plY3QpIFxuICAgICAgICAgICAgPyBwcm9qTGlzdC5wdXNoKHRhc2sucHJvamVjdCkgXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcIm1ha2VQcm9qRGl2c1wiLCBwcm9qTGlzdCk7XG4gICAgfVxuXG4gICAgLy8gVGFrZXMgYWxsIGRhdGEgKHRhc2tzKSBjb3JyZXNwb25kaW5nIFxuICAgIC8vIHRvIHNlbGVjdGVkIHByb2plY3QgYW5kIHRoZW4gXG4gICAgLy8gc2VuZCBqdXN0IHRoZXNlIGZvciByZW5kZXJpbmdcbiAgICBcbiAgICBldmVudC5vbihcImdldFRhc2tzQnlQcm9qZWN0XCIsIGdldFRhc2tzQnlQcm9qKTtcblxuICAgIGZ1bmN0aW9uIGdldFRhc2tzQnlQcm9qKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgdGFza3NCeVByb2ogPSBbXTtcbiAgICAgICAgYWxsVGFza0RhdGEubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0XG4gICAgICAgICAgICA/IHRhc2tzQnlQcm9qLnB1c2godGFzaylcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJzaG93TWFueVRhc2tzXCIsIHRhc2tzQnlQcm9qKTtcbiAgICB9XG5cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=