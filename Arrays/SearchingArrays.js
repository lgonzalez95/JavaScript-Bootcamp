const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.indexOf('Note 2')); // 1
// console.log(notes.indexOf('note 2')); // -1

const notesObjectArray = [
    {
        title: 'Call my mom',
        body: 'Call her at 2 pm'
    },
    {
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    },
    {

    }
]

console.log(notesObjectArray.indexOf({}));// it always uses ===
console.log({} === {});// two objects are equal if they memory reference is the same
let obj = {};
let anotherObj = obj;
console.log(obj === anotherObj);
console.log();
console.log();

const index = notesObjectArray.findIndex( function(note, index){
    console.log(note);
    return note.title === 'Habits to work on';
});

console.log(index);