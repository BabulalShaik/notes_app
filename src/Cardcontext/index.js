import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../Reducers/notesReducer";

const CardContext = createContext();
const CardProvider = ({ children }) => {
    const initialState = {
        title: '',
        text: '',
        notes: [],
        archive: [],
        important: [],
        deletenotes: []
    }

    const [{ title, text, notes, archive, important, deletenotes }, notesDispatch] = useReducer(NotesReducer, initialState);
    return (
        <CardContext.Provider value={{ title, text, notes, archive, important, deletenotes, notesDispatch }}>
            {children}
        </CardContext.Provider>
    )
}

const useCard = () => useContext(CardContext)
export { CardProvider, useCard };