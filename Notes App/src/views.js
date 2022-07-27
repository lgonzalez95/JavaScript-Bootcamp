import moment from 'moment';
import { getFilters } from './filters';
import { getNotes, sortNotes, findNoteById } from './notes';

//Generate last edited message
const generateLastEditedMessage = (timestamp) => `Updated: ${moment(timestamp).fromNow()}`;

//Generate note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p');

    //Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.classList.add('list-item__title');
    noteEl.appendChild(textEl);

    //Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`);
    noteEl.classList.add('list-item');

    //Setup status message
    statusEl.textContent = generateLastEditedMessage(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl)
    return noteEl;
}

//Render application notes
const renderNotes = () => {
    const notesElement = document.querySelector('#notes');
    const filters = getFilters();
    const notes = sortNotes(filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesElement.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note);
            notesElement.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message')
        notesElement.appendChild(emptyMessage);
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title');
    const updatedAtElement = document.querySelector('#updated-at');
    const bodyElement = document.querySelector('#note-body');
    let note = findNoteById(noteId);

    if (!note) {
        location.assign('/')
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    updatedAtElement.innerHTML = generateLastEditedMessage(note.updatedAt);
}

export { generateLastEditedMessage, generateNoteDOM, renderNotes, initializeEditPage }