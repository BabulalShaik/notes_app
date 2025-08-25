import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Card from "@mui/material/Card";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { useCard } from '../../Cardcontext';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArchiveIcon from '@mui/icons-material/Archive';
import { ArchiveClicked } from '../../utils/ArchiveClicked';
import { ImportantClicked } from '../../utils/ImportantClicked';
import { DeleteClicked } from '../../utils/DeleteClicked';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archive, important, deletenotes } = useCard()
    const isImportant = ImportantClicked({ id, important })
    const isArchiveClicked = ArchiveClicked({ id, archive })
    const isDeleteCliked = DeleteClicked({ id, deletenotes })
    console.log(isDeleteCliked)
    const onPinClick = (isPinned, id) => {
        if (!isPinned) {
            notesDispatch({
                type: 'PIN',
                payload: { id }
            })
        } else {
            notesDispatch({
                type: 'UNPIN',
                payload: { id }
            })
        }
    }

    const onArchiveClick = ({ id }) => {
        isArchiveClicked ?
            notesDispatch({
                type: 'UNARCHIVE',
                payload: { id }
            }) :
            notesDispatch({
                type: 'ARCHIVE',
                payload: { id }
            })
    }
    const onDeleteClick = ({ id }) => {
        notesDispatch({
            type: 'DELETE',
            payload: { id }
        })
    }

    const onRestoreClick = ({ id }) => {
        notesDispatch({
            type: 'RESTORE',
            payload: { id }
        })
    }

    const onPermanentDeleteClick = ({id}) => {
        notesDispatch({
            type:'PERMANENT_DELETE',
            payload:{id}
        })
    }
    return (
        <>
            <Card key={id}
                style={{
                    margin: "20px 0px 0px 20px",
                    width: "320px"
                }}>
                <CardHeader
                    title={title}
                    sx={{ padding: "4px 8px", '& .MuiCardHeader-title': { fontSize: "25px", }, '& .MuiCardHeader-content': { padding: 0 } }}
                    action={isArchiveClicked ? <></> : (isDeleteCliked ? <IconButton>
                        <RestoreIcon onClick={() => onRestoreClick({ id })} />
                    </IconButton> :
                        <IconButton onClick={() => onPinClick(isPinned, id)}>
                            {isPinned
                                ? <PushPinIcon />            // Filled when pinned
                                : <PushPinOutlinedIcon />    // Outlined when not pinned
                            }
                        </IconButton>)

                    }
                >
                </CardHeader>
                <CardContent style={{ padding: "0px 10px" }}>
                    <div sx={{ display: "flex", flexDirection: "column" }}>
                        <hr></hr>
                        <p sx={{ padding: "0px" }}>{text}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        {
                            !isDeleteCliked && !isImportant ? (isArchiveClicked ?
                                (<IconButton>
                                    <ArchiveIcon onClick={() => onArchiveClick({ id })} />
                                </IconButton>) : (
                                    <IconButton>
                                        <ArchiveOutlinedIcon onClick={() => onArchiveClick({ id })} />
                                    </IconButton>
                                )) : <></>
                        }
                        {
                            isDeleteCliked ? <IconButton>
                                <DeleteIcon onClick = {() => onPermanentDeleteClick ({id})}></DeleteIcon>
                            </IconButton> :
                                <IconButton>
                                    <DeleteOutlineRoundedIcon onClick={() => onDeleteClick({ id })} />
                                </IconButton>
                        }

                    </div>
                </CardContent>
            </Card>
        </>
    )
}