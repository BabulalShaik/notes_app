import { useCard } from "../../Cardcontext"
import { Navbar } from "../../Components/Navbar"
import { Sidebar } from "../../Components/Sidebar"
import { NotesCard } from "../../Components/NotesCard"
export const Important = () => {
    const { important } = useCard()

    return (
        <>
            <Navbar />
            <main style={{ display: "flex" }}>
                <Sidebar />
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start"
                    }}>
                        {
                            important?.length > 0 && important.map(({ title, text, id, isPinned }) => (
                                <NotesCard key={id} title={title} text={text} id={id} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>


            </main>
        </>
    )
}