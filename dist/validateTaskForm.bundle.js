"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["validateTaskForm"],{

/***/ "./src/validateTaskForm.js":
/*!*********************************!*\
  !*** ./src/validateTaskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTaskForm)
/* harmony export */ });
function validateTaskForm() {
    const inputs = document.querySelectorAll('input');
    const submitBTN = document.querySelector('#submit');

    submitBTN.addEventListener('click', validate);

    function validate (e) {
        inputs.forEach(input => {
            const inputError = input.nextElementSibling;
            inputError.className = 'error';
            if (!input.validity.valid) {
                e.preventDefault();
                showError(input);
            }
        });
    };

    function showError(input) {
        const inputError = input.nextElementSibling;
        if (input.validity.valueMissing) {
            inputError.textContent = 'Required';
        } else if (input.validity.typeMismatch) {
            inputError.textContent = 'Incorrect format';
        } else if (input.validity.patternMismatch) {
            inputError.textContent = 'Eleven digits'
        }
    };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/validateTaskForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUYXNrRm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvdmFsaWRhdGVUYXNrRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0QlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG4gICAgc3VibWl0QlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmFsaWRhdGUpO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUgKGUpIHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlucHV0RXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dFcnJvcihpbnB1dCkge1xuICAgICAgICBjb25zdCBpbnB1dEVycm9yID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gJ1JlcXVpcmVkJztcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICAgICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSAnSW5jb3JyZWN0IGZvcm1hdCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgICAgICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gJ0VsZXZlbiBkaWdpdHMnXG4gICAgICAgIH1cbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9