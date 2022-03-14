import createContainer from "./container";
// Display sidebar: helper function to create sidebar elements
export default function createSidebarElement(project) {
    const container = createContainer(['sidebar-item']);
    container.textContent = `${project.title}`;
    return container;
};