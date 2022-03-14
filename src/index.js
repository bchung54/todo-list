import Display from './display.js';
import createBoard from './board.js';
import createProject from './projects.js';
import createItem from './todo-item.js';
import createAddBtn from './createAddBtn.js';
import './styles.css';


const todo = createItem("Create webpage", [2022, 2, 20], 3, ['school', 'work', 'play'], "All my life");
todo.setDueDate(2022, 2, 23);
const todo2 = createItem("Download more RAM", [2022, 2, 25], 1, ['play'], "whats good");
const todo3 = createItem("Play Solitaire");

const project = createProject("Web Programming");
const project2 = createProject("Play Basketball");
project.addTodo(todo);
project.addTodo(todo2);
project.addTodo(todo3);
const board = createBoard();
board.addProject(project);
board.addProject(project2);
const main = document.querySelector('.main');
Display.displaySidebarList(board.getProjectsArray());
Display.displayProject(project);
Display.displayItemDetails(main, todo);