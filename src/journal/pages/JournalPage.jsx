import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { NoteView } from "../views/NoteView"


export const JournalPage = () => {
  const dispatch= useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);
   
  const onClickNewNote =()=>{
    dispatch( startNewNote() );
  }
  return (
    <JournalLayout>
      {/* <Typography>Irure tempor fugiat non culpa ea est laborum labore consectetur tempor cillum reprehenderit minim aliquip.</Typography> */}
      
      {
        !!active
        ?<NoteView /> 
        :<NothingSelectedView/>  
      }
      
      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9 },
          position:'fixed',
          right:50,
          bottom:50,
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}
