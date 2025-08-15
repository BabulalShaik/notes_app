import { Navbar } from "../../Components/Navbar"
import { Sidebar } from "../../Components/Sidebar"
import { useCard } from "../../Cardcontext"
import { NotesCard } from "../../Components/NotesCard"
export const Archive = () => {

    const { archive } = useCard();
    console.log(archive)
    return (
        <>
            <Navbar />
            <main style={{display:"flex"}}>
                <Sidebar />
                <div>
 <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start"
                }}>
                    {
                        archive?.length > 0 && archive.map(({ title, text, id, isPinned }) => (
                            <NotesCard key={id} title={title} text={text} id={id} isPinned={isPinned} />
                        ))
                    }
                </div>
                </div>
               

            </main>


        </>
    )
}