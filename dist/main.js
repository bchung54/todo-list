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
    let projectsArray = [];
    let count = projectsArray.length;
    function addProject(project, index=projectsArray.length) {projectsArray.splice(index, 0, project);};
    function deleteProject(index) {projectsArray.splice(index, 1)};
    function getProject(index) {return projectsArray[index];};
    function createContainer(classAttrArray) {
        const container = document.createElement('div');
        classAttrArray.forEach((element) => container.classList.add(element));
        return container;
    }
    function createSidebarElement(project) {
        const container = createContainer(['sidebar-title']);
        container.append(document.createTextNode(`${project.title}`));
        return container;
    };
    function displayAllTitles(DOMelement) {
        for (const element of projectsArray) {
            DOMelement.append(createSidebarElement(element));
        };
    };
    function createItemElement(item) {
        const container = createContainer(['todo-item']);
        container.append(document.createTextNode(`${item.name}`));
        return container;
    };
    function displayProject(index) {
        const container = createContainer(['project-container']);
        const project = projectsArray[index];
        const titleElement = createContainer(['project-title']);
        titleElement.append(document.createTextNode(project.title));
        container.append(titleElement);
        for (let i = 0; i < project.itemCount; i++) {
            const element = createItemElement(project.getTodo(i));
            container.append(element);
        }

        document.getElementById('main').append(container);
    };
    return {
        count,
        addProject,
        deleteProject,
        getProject,
        displayAllTitles,
        displayProject
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
    let itemCount = todos.length;
    return {
        title,
        desc,
        itemCount,
        addTodo(item) {
            todos.push(item);
            this.itemCount++;
        },
        removeTodo(index) {
            todos.splice(index, 1);
            this.itemCount--;
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
function createItem(name, desc=null, dueDate=null, priority=null, labels=null, notes=null) {
    let complete = false;
    return {
        name,
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





const todo = (0,_todo_item_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Create webpage");
const project = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Web Programming");
const project2 = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Play Basketball");
project.addTodo(todo);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project2);
const sidebar = document.getElementById('sidebar');
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayAllTitles(sidebar);
_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayProject(0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCxtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ2pETDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ1c7QUFDRjs7O0FBR3hDLGFBQWEseURBQVU7QUFDdkIsZ0JBQWdCLHdEQUFhO0FBQzdCLGlCQUFpQix3REFBYTtBQUM5QjtBQUNBLDREQUFnQjtBQUNoQiw0REFBZ0I7QUFDaEI7QUFDQSxrRUFBc0I7QUFDdEIsZ0VBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2FyZCA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICBsZXQgY291bnQgPSBwcm9qZWN0c0FycmF5Lmxlbmd0aDtcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QsIGluZGV4PXByb2plY3RzQXJyYXkubGVuZ3RoKSB7cHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDAsIHByb2plY3QpO307XG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge3Byb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKX07XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChpbmRleCkge3JldHVybiBwcm9qZWN0c0FycmF5W2luZGV4XTt9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihjbGFzc0F0dHJBcnJheSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xhc3NBdHRyQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZWxlbWVudCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyRWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcihbJ3NpZGViYXItdGl0bGUnXSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7cHJvamVjdC50aXRsZX1gKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsVGl0bGVzKERPTWVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHByb2plY3RzQXJyYXkpIHtcbiAgICAgICAgICAgIERPTWVsZW1lbnQuYXBwZW5kKGNyZWF0ZVNpZGViYXJFbGVtZW50KGVsZW1lbnQpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1FbGVtZW50KGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKFsndG9kby1pdGVtJ10pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2l0ZW0ubmFtZX1gKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChpbmRleCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoWydwcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzQXJyYXlbaW5kZXhdO1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBjcmVhdGVDb250YWluZXIoWydwcm9qZWN0LXRpdGxlJ10pO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QudGl0bGUpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuaXRlbUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVJdGVtRWxlbWVudChwcm9qZWN0LmdldFRvZG8oaSkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudCxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZGlzcGxheUFsbFRpdGxlcyxcbiAgICAgICAgZGlzcGxheVByb2plY3RcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYz1udWxsKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IGl0ZW1Db3VudCA9IHRvZG9zLmxlbmd0aDtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzYyxcbiAgICAgICAgaXRlbUNvdW50LFxuICAgICAgICBhZGRUb2RvKGl0ZW0pIHtcbiAgICAgICAgICAgIHRvZG9zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1Db3VudCsrO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUb2RvKGluZGV4KSB7XG4gICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5pdGVtQ291bnQtLTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VG9kbyhpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9zW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSXRlbShuYW1lLCBkZXNjPW51bGwsIGR1ZURhdGU9bnVsbCwgcHJpb3JpdHk9bnVsbCwgbGFiZWxzPW51bGwsIG5vdGVzPW51bGwpIHtcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbGFiZWxzLFxuICAgICAgICBub3RlcyxcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgICAgICAgICBjb21wbGV0ZSA9ICFjb21wbGV0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gJy4vdG9kby1pdGVtLmpzJztcblxuXG5jb25zdCB0b2RvID0gY3JlYXRlSXRlbShcIkNyZWF0ZSB3ZWJwYWdlXCIpO1xuY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJXZWIgUHJvZ3JhbW1pbmdcIik7XG5jb25zdCBwcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJQbGF5IEJhc2tldGJhbGxcIik7XG5wcm9qZWN0LmFkZFRvZG8odG9kbyk7XG5Cb2FyZC5hZGRQcm9qZWN0KHByb2plY3QpO1xuQm9hcmQuYWRkUHJvamVjdChwcm9qZWN0Mik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbkJvYXJkLmRpc3BsYXlBbGxUaXRsZXMoc2lkZWJhcik7XG5Cb2FyZC5kaXNwbGF5UHJvamVjdCgwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==