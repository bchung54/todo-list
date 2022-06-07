import { format } from 'date-fns';

const Project = (function() {
    let projects = [];

    function createProject(title, desc=null) {
        let tasks = [];
        let itemCount = tasks.length;
        return {
            itemCount,
            addTask(item) {
                tasks.push(item);
                this.itemCount++;
            },
            deleteTask(index) {
                tasks.splice(index, 1);
                this.itemCount--;
            },
            getTask(index) {
                return tasks[index];
            },
    
            get desc() {return desc},
            get title() {return title},
    
            set desc(string) {desc = string},
            set title(string) {title = string}
        }
    };

    function addProject(...args) {
        const project = createProject(args[0], args[1]);
        projects.push(project);
    };

    function deleteProject(index) {
        projects.splice(index, 1);
    };

    function getProject(index) {
        return projects[index];
    };

    function getTasks(tabName) {
        let listAll = [];
        projects.forEach(function(project) {
            switch (tabName) {
                case "Home":
                    for (let i = 0; i < project.itemCount; i++) {
                        listAll.push(project.getTask(i));
                    };
                    break;
                case "Today":
                    for (let i = 0; i < project.itemCount; i++) {
                        const today = new Date();
                        if (project.getTask(i).getDueDate() == format(today, 'MM/dd/yyyy')) {
                            listAll.push(project.getTask(i));
                        };
                    };
                    break;
                case "Week":
                    for (let i = 0; i < project.itemCount; i++) {
                        const nextWeek = new Date();
                        nextWeek.setDate(nextWeek.getDate() + 7);
                        if (project.getTask(i).getDueDate() <= format(nextWeek, 'MM/dd/yyyy')) {
                            listAll.push(project.getTask(i));
                        };
                    };
                    break;
            }
            
        });

        return listAll;
    };

    return {
        get projectList() {return projects},
        get projectCount() {return projects.length},
        addProject,
        deleteProject,
        getProject,
        getTasks
    }
})();

export default Project;