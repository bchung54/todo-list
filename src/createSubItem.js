import createContainer from "./container";

// Create sub-item element for item details
export default function createSubItemElement(item) {
    const container = createContainer(['item-details-container']);
    
    const labelsContainer = createContainer(['labels-container']);
    labelsContainer.textContent = "Labels: ";
    item.labels.forEach((label) => {
        const labelElement = document.createElement('div');
        labelElement.classList.add('label');
        labelElement.classList.add(label);
        labelElement.textContent = label;
        labelsContainer.append(labelElement);
    });

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