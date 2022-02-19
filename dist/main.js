/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Board = (() => {
    let projects = [];
    let count = projects.length;
    function addProject(project, index=projects.length) {projects.splice(index, 0, project);};
    function deleteProject(index) {projects.splice(index, 1)};
    function getProject(index) {return projects[index];};
    function displayProject(project) {
        const main = document.getElementById('main');
        main.append(document.createTextNode(`${project.title}`));
    };
    function displayAll() {
        projects.forEach(displayProject);
    };

    return {
        count,
        addProject,
        deleteProject,
        getProject,
        displayAll
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(title, desc=null) {
    let todos = [];
    return {
        title,
        desc,
        addTodo(item) {
            todos.push(item);
        },
        removeTodo(index) {
            todos.splice(index, 1);
        },
        getTodo(index) {
            return todos[index];
        }
    }
};

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItem)
/* harmony export */ });
function createItem(title, desc=null, dueDate=null, priority=null, labels=null, notes=null) {
    let complete = false;
    return {
        title,
        desc,
        dueDate,
        priority,
        labels,
        notes,
        toggleComplete() {
            complete = !complete;
        }
    }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");





const todo = new _todo_item_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Create webpage");
const project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Web Programming");
const project2 = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Get some");
project.addTodo(todo);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project2);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayAll();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUN2Qkw7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNXO0FBQ0Y7OztBQUd4QyxpQkFBaUIscURBQVU7QUFDM0Isb0JBQW9CLG9EQUFhO0FBQ2pDLHFCQUFxQixvREFBYTtBQUNsQztBQUNBLDREQUFnQjtBQUNoQiw0REFBZ0I7QUFDaEIsNERBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2FyZCA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGNvdW50ID0gcHJvamVjdHMubGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCwgaW5kZXg9cHJvamVjdHMubGVuZ3RoKSB7cHJvamVjdHMuc3BsaWNlKGluZGV4LCAwLCBwcm9qZWN0KTt9O1xuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpfTtcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KGluZGV4KSB7cmV0dXJuIHByb2plY3RzW2luZGV4XTt9O1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgICAgIG1haW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3Byb2plY3QudGl0bGV9YCkpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbCgpIHtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChkaXNwbGF5UHJvamVjdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50LFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBkaXNwbGF5QWxsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2M9bnVsbCkge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBhZGRUb2RvKGl0ZW0pIHtcbiAgICAgICAgICAgIHRvZG9zLnB1c2goaXRlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRvZG8oaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2Rvc1tpbmRleF07XG4gICAgICAgIH1cbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW0odGl0bGUsIGRlc2M9bnVsbCwgZHVlRGF0ZT1udWxsLCBwcmlvcml0eT1udWxsLCBsYWJlbHM9bnVsbCwgbm90ZXM9bnVsbCkge1xuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbGFiZWxzLFxuICAgICAgICBub3RlcyxcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgICAgICAgICBjb21wbGV0ZSA9ICFjb21wbGV0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gJy4vdG9kby1pdGVtLmpzJztcblxuXG5jb25zdCB0b2RvID0gbmV3IGNyZWF0ZUl0ZW0oXCJDcmVhdGUgd2VicGFnZVwiKTtcbmNvbnN0IHByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChcIldlYiBQcm9ncmFtbWluZ1wiKTtcbmNvbnN0IHByb2plY3QyID0gbmV3IGNyZWF0ZVByb2plY3QoXCJHZXQgc29tZVwiKTtcbnByb2plY3QuYWRkVG9kbyh0b2RvKTtcbkJvYXJkLmFkZFByb2plY3QocHJvamVjdCk7XG5Cb2FyZC5hZGRQcm9qZWN0KHByb2plY3QyKTtcbkJvYXJkLmRpc3BsYXlBbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==