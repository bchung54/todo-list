import { format } from 'date-fns';

function createTask(title, ...args) {
    
    let completed = false;
    let _dueDate;
    let dueDateInput;

    if (args[0]) {
        const dateArr = args[0].split('-').map(x => parseInt(x));
        const year = dateArr[0];
        const month = dateArr[1] - 1;
        const day = dateArr[2];
        _dueDate = new Date(year, month, day);
        dueDateInput = format(_dueDate, 'yyyy-MM-dd');
    } else {
        _dueDate = 'None';
        dueDateInput = 'None';
    }
    let priority = (args[1] ? args[1] : 0);
    let labels = args[2];
    let notes = args[3];

    return taskFromJson({ title, _dueDate, dueDateInput, priority, labels, notes, completed });
};

function taskFromJson(state) {
    const {title, _dueDate, dueDateInput, priority, labels, notes, completed} = state || {};

    function toggleComplete() {this.completed = !this.completed};

    function getDueDate() {
        if (this.dueDateInput == 'None') { return 'None' };
        return this.dueDateInput;
    };
        
    function setDueDate(dateString) {
        const dateArr = dateString.split('-').map(x => parseInt(x));
        const year = dateArr[0];
        const month = dateArr[1] - 1;
        const day = dateArr[2];
        this._dueDate = new Date(year, month, day);
        this.dueDateInput = format(this._dueDate, 'yyyy-MM-dd');
    };
    // function saveNotes(input) {this.notes = input};
    // function addLabel(label) {this.labels.push(label)};
    // function removeLabel(index) {this.labels.splice(index,1)};

    return {
        title,
        _dueDate,
        dueDateInput,
        getDueDate,
        setDueDate,
        priority,
        labels,            // labels: (args[2] ? args[2] : []),
        notes,
        completed,
        toggleComplete,
        // saveNotes,
        // addLabel,
        // removeLabel
    }
}

export { createTask, taskFromJson };