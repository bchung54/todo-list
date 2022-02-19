import Board from './board.js';
import createProject from './projects.js';
import createItem from './todo-item.js';


const todo = new createItem("Create webpage");
const project = new createProject("Web Programming");
const project2 = new createProject("Get some");
project.addTodo(todo);
Board.addProject(project);
Board.addProject(project2);
Board.displayAll();
