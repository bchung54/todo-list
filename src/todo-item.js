import { format } from 'date-fns';

export default function createItem(name, ...args) {
    let complete = false;

    function toggleComplete() {complete = !complete};
    function setDueDate(...args) {this.dueDate = new Date(args[0], args[1], args[2])};
    function getDueDate() {return (this.dueDate ? format(this.dueDate, 'MM/dd/yyyy') : 'None')};
    function saveNotes(input) {this.notes = input};
    function addLabel(label) {this.labels.push(label)};
    function removeLabel(index) {this.labels.splice(index,1)};
    return {
        name,
        dueDate: (args[0] ? new Date(args[0][0], args[0][1], args[0][2]) : null),
        priority: (args[1] ? args[1] : 0),
        labels: (args[2] ? args[2] : []),
        notes: args[3],
        setDueDate,
        getDueDate,
        toggleComplete,
        saveNotes,
        addLabel,
        removeLabel
    }
};