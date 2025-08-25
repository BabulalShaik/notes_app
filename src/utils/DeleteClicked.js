export const DeleteClicked = ({ id, deletenotes }) => {
    return (
        deletenotes.some(note => note.id === id)
    )
}