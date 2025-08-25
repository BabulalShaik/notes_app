export const ArchiveClicked = ({ id, archive }) => {
    return (
        archive.some(note => note.id === id)
    )
}