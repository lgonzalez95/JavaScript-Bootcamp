import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

let notes = [];

// Read existing notes from localstorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (error) {
        return [];
    }
}

//Save the notes to localstorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Expose notes from module
const getNotes = () => notes;

const createNote = () => {
    const noteId = uuidv4();
    const timestamp = moment().valueOf();

    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes();

    return noteId;
}

const removeNote = (noteId) => {
    const nodeIndex = findNoteIndexById(noteId);

    if (nodeIndex > -1) {
        notes.splice(nodeIndex, 1);
        saveNotes();
    }
}

//sort notes by filters
const sortNotes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) return -1;
            if (a.updatedAt < b.updatedAt) return 1;
            else return 0;
        });

    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1;
            if (a.createdAt < b.createdAt) return 1;
            else return 0;
        });
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else return 0;
        })
    }
}

const updateNote = (noteId, updates) => {
    const note = findNoteById(noteId);
    
    if(!note){
        return;
    }

    if(typeof updates.title === 'string'){
        note.title = updates.title;
        note.updatedAt = moment().valueOf();
    }

    if(typeof updates.body === 'string'){
        note.body = updates.body;
        note.updatedAt = moment().valueOf();
    }

    saveNotes();
    return note;
}

//Returns the corresponding index for a noteId
const findNoteIndexById = (noteId) => notes.findIndex((note) => note.id === noteId);

//Returns the corresponding note for a noteId
const findNoteById = (noteId) => notes.find((note) => note.id === noteId);

notes = loadNotes();


export { getNotes, createNote, removeNote, sortNotes, updateNote, findNoteById,saveNotes }