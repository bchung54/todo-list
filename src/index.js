import Project from './project.js';
import createTask from './task.js';
import domManager from './domManager.js';
import './style.css';


const todo = createTask("Create webpage", '2022-06-07', 3, ['school', 'work', 'play'], "All my life");
const todo2 = createTask("Download more RAM", '2021-08-10', 1, ['play'], "whats good");
const todo3 = createTask("Play Solitaire");

Project.addProject("Web Programming");
Project.addProject("Play Basketball");

const wp = Project.getProject(0);
wp.addTask(todo);
wp.addTask(todo2);
wp.addTask(todo3);

domManager.initDisplay();