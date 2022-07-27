const notes = ['Note 1', 'Note 2', 'Note 3'];

var removedLastItem = notes.pop();
console.log(`Removed the last item: ${removedLastItem}`);
console.log();

var removedFirstItem = notes.shift();
console.log(`Removed the first item: ${removedFirstItem}`);
console.log();

console.log(`Adding New first item at the first position`);
var removedItem = notes.unshift('New first item');
console.log();

console.log(`Adding Note 4 at the last position`);
notes.push('Note 4');
console.log(notes);
console.log();

console.log(`Removing 1 item starting at position 0`);
notes.splice(0,1);
console.log(notes);
console.log();

console.log(`Adding item at position 1`);
notes.splice(1,0, 'New item');
console.log(notes);
console.log();

console.log(`Replace item at position 0`);
notes.splice(0,1, 'Replaced item');
console.log(notes);
console.log();