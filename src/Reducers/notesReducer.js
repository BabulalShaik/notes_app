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
        case 'PIN': {
            const pinnedNote = state.notes.find(({ id }) => id === payload.id);
            return {
                ...state,
                important: [...state.important, { ...pinnedNote, isPinned: true }],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            };
        }
        case 'UNPIN': {
            const unpinnedNote = state.important.find(({ id }) => id === payload.id);
            return {
                ...state,
                notes: [...state.notes, { ...unpinnedNote, isPinned: false }],
                important: state.important.filter(({ id }) => id !== payload.id)
            };
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
        case 'DELETE': return {
            ...state,
            deletenotes: [...state.deletenotes, state.notes.find(({ id }) => id === payload.id) || state.archive.find(({ id }) => id === payload.id) || state.important.find(({ id }) => id === payload.id)],
            notes: state.notes.filter(({ id }) => id !== payload.id),
            archive: state.archive.filter(({ id }) => id !== payload.id),
            important: state.important.filter(({ id }) => id !== payload.id)
        }
        case 'RESTORE': return {
            ...state,
            notes: [...state.notes, state.deletenotes.find(({ id }) => id === payload.id)],
            deletenotes: state.deletenotes.filter(({ id }) => id !== payload.id)
        }
        case 'PERMANENT_DELETE': return {
            ...state,
            deletenotes: state.deletenotes.filter(({ id }) => id !== payload.id)
        }


        default: return state;
    }
}