const todos = ['Buy Milk', 'Cook the meal', 'Buy food', 'Do work', 'Exercise'];

// console.log(`We have ${todos.length} todos`);
// console.log(todos);

//delete 3rd item
//add new item onto the end
//remove the first item

// todos.splice(2,1);
// todos.push('Take a shower');
// todos.shift();
// console.log(todos);

// //loops
// console.log();
// todos.forEach(function(todo, index){
//     console.log(`${index + 1}. ${todo}`);
// });
// console.log();

// for (let index = 0; index < todos.length; index++) {
//     console.log(`${index + 1}. ${todos[index]}`);
// }
// console.log();

//1. conver array to array of objects - > text, completed
//2. create function to remove todo by text value

const getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const convertToObject = function(todos){
    todos.forEach(function(todo, index){
        todos[index] = {
            text: todo,
            completed: 0 === getRandomNumber(0, 1)
        }
    });
}

const deleteTodo = function(todos, text){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() == text.toLowerCase();
    });
    
    if(index >=0) todos.splice(index, 1)
}

convertToObject(todos);
console.log(todos);
const getPendingTodos = function (todos, text) {
    return todos.filter(function (todo) {
        return !todo.completed
    });
};


const sortTodos = function (todos) {
    /**
     * -1 if a should come first
     * 1 if b should come first
     * 0 if the order is not required to be changed
     */
    
    return todos.sort(function (a, b) {
        if (a.completed === false && b.completed)
            return -1
        else if (a.completed && b.completed === false)
            return 1
        else return 0
    });
}

console.log(sortTodos(todos));