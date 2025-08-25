import { Navbar } from "../../Components/Navbar"
import { Sidebar } from "../../Components/Sidebar"
import { NotesCard } from "../../Components/NotesCard"
import { useCard } from "../../Cardcontext"
export const Trash = () => {
    const { deletenotes } = useCard();
    return (
        <>
            <Navbar />
            <main style={{ display: "flex" }}> <Sidebar />
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start"
                    }}>
                        {
                            deletenotes?.length > 0 && deletenotes.map(({ title, text, id, isPinned }) => (
                                <NotesCard key={id} title={title} text={text} id={id} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>
            </main>

        </>
    )
}