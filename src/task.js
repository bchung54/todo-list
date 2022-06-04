import { format } from 'date-fns';

function createTask(title, ...args) {
    let completed = false;

    function toggleComplete() {this.completed = !this.completed};
    function toggleShowDetails() {this.detailShown = !this.detailShown};
    function getDueDate() {
        if (!this.dueDate) { return 'None'};
        let dateList = this.dueDate.split('-');
        let year = parseInt(dateList[0]);
        let monthIndex = parseInt(dateList[1] - 1);
        let day = parseInt(dateList[2]);
        return format(new Date(year, monthIndex, day), 'MM/dd/yyyy');
    };
    function setDueDate(date) {this.dueDate = date};
    function saveNotes(input) {this.notes = input};
    function addLabel(label) {this.labels.push(label)};
    function removeLabel(index) {this.labels.splice(index,1)};

    return {
        title,
        dueDate: args[0], // 'YYYY-MM-DD'
        getDueDate,
        setDueDate,
        priority: (args[1] ? args[1] : 0),
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

export default createTask;