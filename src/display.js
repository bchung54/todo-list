import createAddBtn from "./createAddBtn";
import createProjectDisplay from "./projectDisplay";
import createSidebarElement from "./sidebarElement";
import createSubItemElement from "./createSubItem";

const Display = (() => {

    // Display sidebar
    function displaySidebarList(projectsArray) {
        const sidebar = document.querySelector('.sidebar');
        const sidebarContainer = document.querySelector('.sidebar-container');
        for (const element of projectsArray) {
            sidebarContainer.append(createSidebarElement(element));
        };
        sidebar.append(createAddBtn('project').button);
    };

    // Display selected project
    function displayProject(project) {
        document.querySelector('.main').append(createProjectDisplay(project));
    };

    // Display todo-item details
    function displayItemDetails(DOMelement, item) {
        DOMelement.append(createSubItemElement(item));
    };

    return {
        displaySidebarList,
        displayProject,
        displayItemDetails
    };
})();

export default Display;