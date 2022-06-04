// import { format } from 'date-fns';

export default function createTask(title, ...args) {
    let completed = false;

    function toggleComplete() {completed = !completed};
    function toggleShowDetails() {detailShown = !detailShown};
    // function getDueDate() {return format(this.dueDate, 'MM/dd/yyyy')};
    // function setDueDate(month, day, year) {this.dueDate = new Date(year, month, day)};
    function saveNotes(input) {this.notes = input};
    function addLabel(label) {this.labels.push(label)};
    function removeLabel(index) {this.labels.splice(index,1)};

    return {
        title,
        dueDate: args[0],
        priority: args[1],
        labels: args[2],
        // dueDate: (args[0] ? new Date(args[0][0], args[0][1], args[0][2]) : null),
        // priority: (args[1] ? args[1] : 0),
        // labels: (args[2] ? args[2] : []),
        notes: args[3],
        completed,
        toggleComplete,
        toggleShowDetails,
        saveNotes,
        addLabel,
        removeLabel
    }
};