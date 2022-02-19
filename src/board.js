const Board = (() => {
    let projects = [];
    let count = projects.length;
    function addProject(project, index=projects.length) {projects.splice(index, 0, project);};
    function deleteProject(index) {projects.splice(index, 1)};
    function getProject(index) {return projects[index];};
    function displayProject(project) {
        const main = document.getElementById('main');
        main.append(document.createTextNode(`${project.title}`));
    };
    function displayAll() {
        projects.forEach(displayProject);
    };

    return {
        count,
        addProject,
        deleteProject,
        getProject,
        displayAll
    };
})();

export default Board;