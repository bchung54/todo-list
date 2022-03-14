import createContainer from "./container";
import createAddBtn from "./createAddBtn";
import createListItemElement from "./createListItemElement";

// Display selected project: create the display for the project
export default function createProjectDisplay(project) {
    const container = createContainer(['project-container']);
    const titleElement = createContainer(['project-title']);

    const listContainer = document.createElement('ul');
    for (let i = 0; i < project.itemCount; i++) {
        const element = createListItemElement(project.getTodo(i));
        listContainer.append(element.container);
    };
    

    titleElement.textContent = project.title;
    container.append(titleElement);
    container.append(document.createElement('hr'));
    container.append(listContainer);
    container.append(createAddBtn('todo').button);
    return container;
};