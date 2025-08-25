export const ImportantClicked = ({ id, important }) => {
    return (
        important.some(note => note.id === id)
    )
}