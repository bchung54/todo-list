const Board = (() => {
    let projectsArray = [];
    let count = projectsArray.length;
    function addProject(project, index=projectsArray.length) {projectsArray.splice(index, 0, project);};
    function deleteProject(index) {projectsArray.splice(index, 1)};
    function getProject(index) {return projectsArray[index];};
    function createContainer(classAttrArray) {
        const container = document.createElement('div');
        classAttrArray.forEach((element) => container.classList.add(element));
        return container;
    }
    function createSidebarElement(project) {
        const container = createContainer(['sidebar-title']);
        container.append(document.createTextNode(`${project.title}`));
        return container;
    };
    function displayAllTitles(DOMelement) {
        for (const element of projectsArray) {
            DOMelement.append(createSidebarElement(element));
        };
    };
    function createItemElement(item) {
        const container = createContainer(['todo-item']);
        container.append(document.createTextNode(`${item.name}`));
        return container;
    };
    function displayProject(index) {
        const container = createContainer(['project-container']);
        const project = projectsArray[index];
        const titleElement = createContainer(['project-title']);
        titleElement.append(document.createTextNode(project.title));
        container.append(titleElement);
        for (let i = 0; i < project.itemCount; i++) {
            const element = createItemElement(project.getTodo(i));
            container.append(element);
        }

        document.getElementById('main').append(container);
    };
    return {
        count,
        addProject,
        deleteProject,
        getProject,
        displayAllTitles,
        displayProject
    };
})();

export default Board;