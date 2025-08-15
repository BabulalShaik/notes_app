import { v4 as uuid } from 'uuid';
export const NotesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE': return {
            ...state,
            title: payload
        }
        case 'TEXT': return {
            ...state,
            text: payload
        }
        case 'ADDNOTE': return {
            ...state,
            notes: [...state.notes, { title: state.title, text: state.text, id: uuid(), isPinned: false }],
            text: "",
            title: ""
        }
        case 'PIN': return {

            ...state,
            notes: [...state.notes.map(note => note.id === payload.id ? { ...note, isPinned: true } : note)]
        }
        case 'UNPIN': return {
            ...state,
            notes: [...state.notes.map(note => note.id === payload.id ? { ...note, isPinned: false } : note)]
        }
        case 'ARCHIVE': return {
            ...state,
            archive: [...state.archive, state.notes.find(({ id }) => id === payload.id)],
            notes: state.notes.filter(({ id }) => id !== payload.id)
        }
        case 'UNARCHIVE': return {
            ...state,
            notes: [...state.notes, state.archive.find(({ id }) => id === payload.id)],
            archive: state.archive.filter(({ id }) => id !== payload.id)
        }

        default: return state;
    }
}