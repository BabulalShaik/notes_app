import { Navbar } from "../../Components/Navbar";
import { Fragment } from "react";
import { Sidebar } from "../../Components/Sidebar";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useCard } from "../../Cardcontext";
import { NotesCard } from "../../Components/NotesCard";

export const Home = () => {

    const { title, text, notes, archive, notesDispatch } = useCard();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }
    const onAddnotes = () => {
        notesDispatch({
            type: 'ADDNOTE'
        })
    }

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned)

    return (
        <Fragment>
            <Navbar />

            <main style={{ display: "flex" }}>

                <Sidebar />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "20px",
                            width: "300px",
                            border: "1px solid black",
                            borderRadius: "5px"
                        }}>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input placeholder="Enter Title"
                                    style={{
                                        border: "none",
                                        height: "100%",
                                        outline: "none",
                                        boxSizing: "border-box",
                                        padding: "5px",
                                        borderRadius: "5px"
                                    }} value={title} onChange={onTitleChange} />
                            </div>

                            <div style={{ flex: "1", position: "relative" }}>
                                <textarea placeholder="Write A Note.."
                                    style={{
                                        border: "none",
                                        width: "300px",
                                        height: "100%",
                                        outline: "none",

                                        padding: "5px",
                                        boxSizing: "border-box", borderRadius: "5px"
                                    }} value={text} onChange={onTextChange}>

                                </textarea>
                                <button style={{
                                    alignSelf: "flex-end",
                                    border: "none",
                                    background: "transparent",
                                    position: "absolute",
                                    right: "0px",
                                    bottom: "0px",
                                    cursor: "pointer"

                                }} onClick={onAddnotes} disabled={title.length === 0}><AddCircleOutlineRoundedIcon /></button>
                            </div>


                        </div>

                    </div>
                    {
                        pinnedNotes?.length > 0 && (
                            <div  >
                                <h3 style={{ margin: "20px 0px 0px 20px" }}>Pinned Notes</h3>
                                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }}>

                                    {
                                        pinnedNotes?.length > 0 && pinnedNotes.map(({ title, text, id, isPinned }) => (
                                            <NotesCard key={id} title={title} text={text} id={id} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        pinnedNotes?.length > 0 && otherNotes.length > 0 && <h3 style={{ margin: "20px 0px 0px 20px" }}>Other Notes</h3>

                    }
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }}>

                        {
                            otherNotes?.length > 0 && otherNotes.map(({ title, text, id, isPinned }) => (
                                <NotesCard key={id} title={title} text={text} id={id} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>

            </main>
        </Fragment >

    )
}
