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
export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archive } = useCard()

    const isArchiveClicked = ArchiveClicked({ id, archive })
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





    console.log(isArchiveClicked)

    return (
        <>
            <Card key={id}
                style={{
                    margin: "20px 0px 0px 20px",
                    width: "300px"
                }}>
                <CardHeader
                    title={title}
                    sx={{ padding: "4px 8px", '& .MuiCardHeader-title': { fontSize: "25px", }, '& .MuiCardHeader-content': { padding: 0 } }}
                    action={!isArchiveClicked ? (isPinned ? (
                        <IconButton>
                            <PushPinIcon onClick={() => onPinClick(isPinned, id)}></PushPinIcon>
                        </IconButton>) : (
                        <IconButton>
                            <PushPinOutlinedIcon onClick={() => onPinClick(isPinned, id)} />
                        </IconButton>)) : <></>
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
                            isArchiveClicked ?
                                (<IconButton>
                                    <ArchiveIcon onClick={() => onArchiveClick({ id })} />
                                </IconButton>) : (
                                    <IconButton>
                                        <ArchiveOutlinedIcon onClick={() => onArchiveClick({ id })} />
                                    </IconButton>

                                )
                        }
                        <IconButton>
                            <DeleteOutlineRoundedIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}