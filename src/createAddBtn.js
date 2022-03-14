import createContainer from "./container";
import createInputBox from "./createInputBox";

export default function createAddBtn(newAddition) {
    const button = document.createElement('button');
    let addClass;
    let addID;
    let addText;

    if (newAddition == 'project') {
        addClass = 'sidebar-item';
        addID = 'add-project-button';
        addText = '+Add Project';
    } else if (newAddition == 'todo') {
        addClass = 'project-list-item';
        addID = 'add-todo-button';
        addText = '+Add Todo';
    };

    button.classList.add(addClass);
    button.setAttribute('id', addID);
    button.textContent = addText;

    function clickFunction() {
        if (this.clicked) { return };
        
        this.clicked = !this.clicked;

        let container;
        let newElement;
        let elementID;
        const inputBox = createInputBox(newAddition);

        if (newAddition == 'project') {
            container = document.querySelector('.sidebar-container');
            newElement = createContainer(['sidebar-item']);
            elementID = 'add-project-container';
        } else if (newAddition == 'todo') {
            container = document.querySelector('ul');
            newElement = document.createElement('li');
            newElement.classList.add('project-list-item')
            elementID = 'add-todo-container';
        };

        newElement.setAttribute('id', elementID);
        newElement.append(inputBox);

        container.append(newElement);
        inputBox.select();
    };

    button.addEventListener('click', clickFunction);
    // button.addEventListener('click', clickFunction, {once : true});

    return {
        button,
        clicked: false,
        newAddition
    };
};