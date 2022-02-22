const Display = (() => {
    let projectsArray = [];
    let count = projectsArray.length;

    // Project functions
    function addProject(project, index=projectsArray.length) {projectsArray.splice(index, 0, project);};
    function deleteProject(index) {projectsArray.splice(index, 1)};
    function getProject(index) {return projectsArray[index];};

    // Helper to create containers with class names
    function createContainer(classAttrArray) {
        const container = document.createElement('div');
        classAttrArray.forEach((element) => container.classList.add(element));
        return container;
    }

    // Display sidebar
    function displaySidebarItems(DOMelement) {
        for (const element of projectsArray) {
            DOMelement.append(createSidebarElement(element));
        };
    };
    // Display sidebar: helper function to create sidebar elements
    function createSidebarElement(project) {
        const container = createContainer(['sidebar-item']);
        container.textContent = `${project.title}`;
        return container;
    };

    // Display selected project
    function displayProject(project) {
        document.querySelector('.main').append(createProjectDisplay(project));
    };
    // Display selected project: create the display for the project
    function createProjectDisplay(index) {
        const container = createContainer(['project-container']);
        const project = projectsArray[index];
        const titleElement = createContainer(['project-title']);
        
        titleElement.textContent = project.title;
        
        const listContainer = document.createElement('ul');
        for (let i = 0; i < project.itemCount; i++) {
            const element = createListItemElement(project.getTodo(i));
            listContainer.append(element);
        }

        container.append(titleElement);
        container.append(document.createElement('hr'));
        container.append(listContainer);
        return container;
    };
    // Display selected project: create the line item for the list of todos
    function createListItemElement(item) {
        const container = document.createElement('li');
        container.classList.add('project-list-item');
        container.classList.add(`priority-${item.priority}`);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        
        const lineItemInfo = createLineItemPart(item);
        
        container.append(checkbox);
        container.append(lineItemInfo);
        return container;
    };
    // Display selected project: create the parts of the line itme for the list
    function createLineItemPart(item) {
        const container = createContainer(['quick-info-container']);
        const name = createContainer(['sub-list-item']);
        const date = createContainer(['sub-list-item']);
        
        name.textContent = `${item.name}`;
        date.textContent = `Due: ${item.getDueDate()}`;

        container.append(name);
        container.append(date);
        return container;
    }

    // Display todo-item details
    function displayItemDetails(item, DOMelement) {
        DOMelement.append(createItemDetailsElement(item));
    };
    // Display todo-item details: helper function to create item details element
    function createItemDetailsElement(item) {
        const container = createContainer(['item-details-container']);
        const labelsContainer = createContainer(['labels-container']);
        labelsContainer.textContent = "Labels: ";
        item.labels.forEach((label) => {
            const labelElement = document.createElement('div');
            labelElement.classList.add('label');
            labelElement.classList.add(label);
            labelElement.textContent = label;
            labelsContainer.append(labelElement);
        })
        const notesContainer = createContainer(['notes-container']);
        notesContainer.textContent = "Notes: ";
        const notesElement = document.createElement('div');
        notesElement.textContent = item.notes;
        notesElement.classList.add('notes');
        notesContainer.append(notesElement);

        container.append(labelsContainer);
        container.append(notesContainer);
        return container;
    };

    return {
        count,
        addProject,
        deleteProject,
        getProject,
        displaySidebarItems,
        displayProject,
        displayItemDetails
    };
})();

export default Display;