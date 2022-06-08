import { format } from 'date-fns';

const Project = (function() {
    let projects = [];

    function createProject(title, desc=null) { return from({ title, desc }) };

    function from(state) {
        const { tasks = [], title, desc } = state || {};
        let itemCount = tasks.length;
        return {
            title,
            desc,
            itemCount,
            addTask(item) {
                tasks.push(item);
                this.itemCount++;
            },
            deleteTask(index) {
                tasks.splice(index, 1);
                this.itemCount--;
            },
            getTask(index) { return tasks[index] },
            toJson() { return tasks },
        }
    };

    function addProject(state) {
        const project = from(state);
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
        from,
        get projectList() {return projects},
        get projectCount() {return projects.length},
        createProject,
        addProject,
        deleteProject,
        getProject,
        getTasks
    }
})();

export default Project;