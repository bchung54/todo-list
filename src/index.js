import Board from './board.js';
import createProject from './projects.js';
import createItem from './todo-item.js';


const todo = createItem("Create webpage");
const project = createProject("Web Programming");
const project2 = createProject("Play Basketball");
project.addTodo(todo);
Board.addProject(project);
Board.addProject(project2);
const sidebar = document.getElementById('sidebar');
Board.displayAllTitles(sidebar);
Board.displayProject(0);
