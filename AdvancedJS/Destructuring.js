const todo = {
    id: '1234567890',
    text: 'Pay bills',
    completed: false
}

const { text: todoText, completed, details = 'Test Detail', ...others } = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [1, 2, 3];
const [firstAge, secondAge, , lastAge = 50] = age
console.log(lastAge);

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`);
}

printTodo(todo)