
import storageAvailable from './storage.js';
import domManager from './domManager.js';
import Project from './project.js';
import { taskFromJson } from './task.js';
import './style.css';

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    window.addEventListener('submit', function(e) {
        if (e.target.classList.contains('project-form')) {
            let projectIndex = Project.projectCount - 1;
            localStorage.setItem(`projects-${projectIndex}`, JSON.stringify(Project.getProject(projectIndex)));
        } else if (e.target.classList.contains('task-form')) {
            let projectIndex = domManager.onDisplayIndex;
            localStorage.setItem(`tasks-${projectIndex}`, JSON.stringify(Project.getProject(projectIndex).toJson()));
        }
    });

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(`projects-${i}`)) {
            let project = localStorage.getItem(`projects-${i}`);
            Project.addProject(Project.from(JSON.parse(project)));
        }
         if (localStorage.hasOwnProperty(`tasks-${i}`)) {
            let tasks = localStorage.getItem(`tasks-${i}`);
            let project = Project.getProject(i);
            JSON.parse(tasks).forEach((e) => {
                console.log(taskFromJson(e));
                project.addTask(taskFromJson(e));
            });
        }
    }
}
else {
    // Too bad, no localStorage for us
}

domManager.initDisplay();

/* DUMMY DATA
Project.addProject(Project.createProject("Web Programming"));
Project.addProject("Play Basketball");

const todo = createTask("Create webpage", '2022-06-07', 3, ['school', 'work', 'play'], "All my life");
const todo2 = createTask("Download more RAM", '2021-08-10', 1, ['play'], "whats good");
const todo3 = createTask("Play Solitaire",'2022-06-12');
const todo4 = createTask("Play Spades");
const todo5 = createTask("Play Hearts");
const todo6 = createTask("Play Pinball");
const todo7 = createTask("Play More Solitaire", '2022-06-15');
const todo8 = createTask("Complete TOP");
const todo9 = createTask("Profit");
const todo10 = createTask("Profit1", '2022-06-13');
const todo11 = createTask("Profit2", '2022-06-15');
const todo12 = createTask("Profit3", '2022-06-17');
const todo13 = createTask("Profit4", '2022-06-19');
const todo14 = createTask("Profit5", '2022-06-19');

const wp = Project.getProject(0);
wp.addTask(todo);
wp.addTask(todo2);
wp.addTask(todo3);
wp.addTask(todo4);
wp.addTask(todo5);
wp.addTask(todo6);
wp.addTask(todo7);
wp.addTask(todo8);
wp.addTask(todo9);

const pb = Project.getProject(1);
pb.addTask(todo10);
pb.addTask(todo11);
pb.addTask(todo12);
pb.addTask(todo13);
pb.addTask(todo14); */