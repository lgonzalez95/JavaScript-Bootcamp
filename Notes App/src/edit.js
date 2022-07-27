import { initializeEditPage, generateLastEditedMessage } from './views';
import { updateNote, removeNote, saveNotes } from './notes';

const titleElement = document.querySelector('#note-title')
const updatedAtElement = document.querySelector('#updated-at')
const bodyElement = document.querySelector('#note-body')
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener('input', (e) => {

    const updatedNote = updateNote(
        noteId,
        {
            title: e.target.value
        });
    updatedAtElement.innerHTML = generateLastEditedMessage(updatedNote.updatedAt);
});

bodyElement.addEventListener('input', (e) => {
    const updatedNote = updateNote(
        noteId,
        {
            body: e.target.value
        });
    updatedAtElement.innerHTML = generateLastEditedMessage(updatedNote.updatedAt);
});

document.querySelector('#remove-note').addEventListener('click', (e) => {
    removeNote(noteId);
    location.assign('/');
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId);
    }
})