export default function createProject(title, desc=null) {
    let todos = [];
    return {
        title,
        desc,
        addTodo(item) {
            todos.push(item);
        },
        removeTodo(index) {
            todos.splice(index, 1);
        },
        getTodo(index) {
            return todos[index];
        }
    }
};