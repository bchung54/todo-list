import domManager from "./domManager";

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
            removeTask(index) {
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

    return {
        get projectList() {return projects},
        get projectCount() {return projects.length},
        addProject,
        deleteProject,
        getProject
    }
})();

export default Project;