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
        title: 'Call my dad',
        body: 'Call him at 3 pm'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

const findNoteByIndex = function (notes, noteTitle) {
    const noteIndex = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return notes[noteIndex];
}

const findNote = function (notes, noteTitle) {
    const note = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return note;
}

const filteredNotes = function (notes, text) {
    return notes.filter(function (note) {
        console.log(note);
        const isTitleMatch = note.title.toLowerCase().includes(text.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(text);

        return isBodyMatch || isTitleMatch
    });
};


// const noteByIndex = findNoteByIndex(notesObjectArray, 'Office Modification');
// const note = findNote(notesObjectArray, 'Office Modification');
// console.log(noteByIndex);
// console.log(note)
// console.log();
// console.log();


var arrayFiltered = filteredNotes(notesObjectArray, 'a')
console.log(arrayFiltered);
