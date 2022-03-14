export default function createInputBox(type) {
    let placeholderText;
    let textInputClass;
    const textInput = document.createElement('input');

    function inputFn() {
        
    };

    if (type == 'project') {
        placeholderText = 'New Project';
        textInputClass = 'new-project-input';
    } else if (type == 'todo') {
        placeholderText = 'New Todo';
        textInputClass = 'new-todo-input';
    };
    
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder', placeholderText);
    textInput.classList.add(textInputClass);

    textInput.addEventListener('input', inputFn);

    return textInput;
};