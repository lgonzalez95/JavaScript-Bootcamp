// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --
import { renderTodos } from './views';
import { setFilters } from './filters';
import { createTodo, loadTodos } from './todos';

// Add necessary imports

// Render initial todos
renderTodos();

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters(
        {
            searchText: e.target.value
        }
    );
    renderTodos();
});

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters(
        {
            hideCompleted: e.target.checked
        }
    );
    renderTodos();
});

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const trimedTodo = e.target.elements.text.value.trim();
    e.preventDefault();

    if(trimedTodo.length > 0){
        createTodo(trimedTodo);
        e.target.elements.text.value = '';
        renderTodos();
    }
});

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    console.log('Testing');
    if (e.key === 'todos') {
        loadTodos();
        renderTodos();
    }
})