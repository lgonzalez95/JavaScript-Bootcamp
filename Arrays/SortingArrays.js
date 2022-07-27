const notes = [
    {
        title: 'Call my daady',
        body: 'Call her at 2 pm'
    },
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

const sortNotes = function (notes) {
    /**
     * -1 if a should come first
     * 1 if b should come first
     * 0 if the order is not required to be changed
     */
    console.log('a' < 'b');
    return notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1
        else if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1
        else return 0
    });
}


console.log(sortNotes(notes));