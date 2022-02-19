export default function createItem(title, desc=null, dueDate=null, priority=null, labels=null, notes=null) {
    let complete = false;
    return {
        title,
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