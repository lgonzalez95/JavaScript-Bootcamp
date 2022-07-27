import { v4 as uuidv4 } from 'uuid';

// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const todosInLocalStorage = localStorage.getItem('todos');
    try {
        return todosInLocalStorage ? JSON.parse(todosInLocalStorage) : [];
    } catch (error) {
        return [];
    }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (todoText) => {
    todos.push(
        {
            id: uuidv4(),
            text: todoText,
            completed: false
        }
    );

    saveTodos();

}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const deleteTodo = (todoId) => {
    const todoIndexToRemove = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndexToRemove > -1) {
        todos.splice(todoIndexToRemove, 1);
        saveTodos();
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (todoId) => {
    const todoIndexToUpdate = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndexToUpdate > -1) {
        todos[todoIndexToUpdate].completed = !todos[todoIndexToUpdate].completed;
        saveTodos();
    }
}

todos = loadTodos();

// Make sure to call loadTodos and setup the exports
export { getTodos, createTodo, deleteTodo, toggleTodo, loadTodos }