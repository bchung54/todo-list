import Display from './display.js';
import createProject from './projects.js';
import createItem from './todo-item.js';
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
Display.addProject(project);
Display.addProject(project2);
const sidebarContainer = document.querySelector('.sidebar-container');
const main = document.querySelector('.main');
Display.displaySidebarItems(sidebarContainer);
Display.displayProject(0);
Display.displayItemDetails(todo, main);
