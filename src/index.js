import Display from './board.js';
import createProject from './projects.js';
import createItem from './todo-item.js';
import './styles.css';


const todo = createItem("Create webpage", [2022, 2, 20], 2, ['school', 'work', 'play'], "All my life");
todo.setDueDate(2022, 2, 23);
const todo2 = createItem("Download more RAM");
const todo3 = createItem("Play Solitaire");

const project = createProject("Web Programming");
const project2 = createProject("Play Basketball");
project.addTodo(todo);
project.addTodo(todo2);
project.addTodo(todo3);
Display.addProject(project);
Display.addProject(project2);
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
Display.displaySidebarItems(sidebar);
Display.displayProject(0);
Display.displayItemDetails(todo, main);
