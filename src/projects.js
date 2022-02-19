export default function createProject(title, desc=null) {
    let todos = [];
    let itemCount = todos.length;
    return {
        title,
        desc,
        itemCount,
        addTodo(item) {
            todos.push(item);
            this.itemCount++;
        },
        removeTodo(index) {
            todos.splice(index, 1);
            this.itemCount--;
        },
        getTodo(index) {
            return todos[index];
        }
    }
};