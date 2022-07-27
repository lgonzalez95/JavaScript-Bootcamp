import { getFilters } from './filters';
import { getTodos, toggleTodo, deleteTodo } from './todos';

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const { searchText, hideCompleted } = getFilters();
    const todos = getTodos();
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()));
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    if (hideCompleted) {
        filteredTodos = incompleteTodos;
    }

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        });
    } else {
        const messageElement = document.createElement('p');
        messageElement.classList.add('empty-message');
        messageElement.textContent = 'No to-dos to show';
        document.querySelector('#todos').appendChild(messageElement);
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        renderTodos();
    })

    // Setup the todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // Setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    // Setup the remove button
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        deleteTodo(todo.id);
        renderTodos();
    })

    return todoEl;
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2');
    const plural = incompletedTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left`;
    return summary;
}

// Make sure to set up the exports
export { renderTodos, generateSummaryDOM, generateTodoDOM }