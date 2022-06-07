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
    };

    function toggleComplete() {this.completed = !this.completed};
    function toggleShowDetails() {this.detailShown = !this.detailShown};
    function getDueDate() {
        if (this._dueDate) {return format(this._dueDate, 'MM/dd/yyyy')};
        return 'None';
    };
        
    function setDueDate(dateString) {
        const dateArr = dateString.split('-').map(x => parseInt(x));
        const year = dateArr[0];
        const month = dateArr[1] - 1;
        const day = dateArr[2];
        this._dueDate = new Date(year, month, day);
    };
    function saveNotes(input) {this.notes = input};
    function addLabel(label) {this.labels.push(label)};
    function removeLabel(index) {this.labels.splice(index,1)};

    return {
        title,
        _dueDate,
        dueDateInput,
        getDueDate,
        setDueDate,
        priority: (args[1] ? args[1] : 0),
        labels: args[2],            // labels: (args[2] ? args[2] : []),
        notes: args[3],
        completed,
        toggleComplete,
        toggleShowDetails,
        saveNotes,
        addLabel,
        removeLabel
    }
};

export default createTask;