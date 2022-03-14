export default function createBoard() {

    let projectsArray = [];

    function getProjectsArray() { return projectsArray };

    // Project functions
    function addProject(project, index=projectsArray.length) { projectsArray.splice(index, 0, project) };
    function deleteProject(index) { projectsArray.splice(index, 1) };
    function getProject(index) { return projectsArray[index] };

    return {
        getProjectsArray,
        addProject,
        deleteProject,
        getProject
    }
};