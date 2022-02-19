export default function createItem(name, desc=null, dueDate=null, priority=null, labels=null, notes=null) {
    let complete = false;
    return {
        name,
        desc,
        dueDate,
        priority,
        labels,
        notes,
        toggleComplete() {
            complete = !complete;
        }
    }
};