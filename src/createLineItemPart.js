import createContainer from "./container";

// Create the parts of the line itme for the list
export default function createLineItemPart(item) {
    const container = createContainer(['quick-info-container']);
    const subContainer = createContainer(['quickinfo-subcontainer']);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const name = createContainer(['sub-list-item']);
    const date = createContainer(['sub-list-item']);
    
    name.textContent = `${item.name}`;
    date.textContent = `Due: ${item.getDueDate()}`;

    subContainer.append(name);
    subContainer.append(date);
    container.append(checkbox);
    container.append(subContainer);
    return container;
};