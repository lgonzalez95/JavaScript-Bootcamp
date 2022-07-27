const notes = ['Note 1', 'Note 2', 'Note 3'];

//loops
notes.forEach(function(note, index){
    console.log(note);
    console.log(index);
});
console.log();
console.log();

for (let index = 0; index < notes.length; index++) {
    console.log(notes[index]);
}