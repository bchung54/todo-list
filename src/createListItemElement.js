import createLineItemPart from "./createLineItemPart";
import createSubItemElement from "./createSubItem";
import showHiddenSub from "./expandTodo";

// Create the line item for the list of todos
export default function createListItemElement(item) {
    let hiddenSub = true;
    const container = document.createElement('li');
    container.classList.add('project-list-item');
    container.classList.add(`priority-${item.priority}`);

    const subItem = createSubItemElement(item);
    function showHiddenSub() {
        if (hiddenSub) {
            this.append(subItem);
        }
        hiddenSub = !hiddenSub;
    };
    container.addEventListener('click', showHiddenSub);
    
    const lineItemInfo = createLineItemPart(item);
    
    container.append(lineItemInfo);

    return {
        container,
        hiddenSub,
        subItem
    };
};