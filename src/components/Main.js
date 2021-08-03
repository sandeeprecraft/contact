import React,{useState} from 'react'
import {Fade,Modal,Backdrop,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Container} from "@material-ui/core";
import {useSelector,useDispatch} from 'react-redux'
import {editcontact,deletecontact} from '../contactredux'
import './mainstyle.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import AddContact from './AddContact';

const useStyles = makeStyles((theme)=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(4),
          width: '25ch',
          padding:"10px"
        },
    },
    table: {
      width:650,
      padding:"10px",
      margin: 'auto',
      backgroundColor:"#FAEBD7"
    },

  }));

function Main() {
    const classes = useStyles();
    const dispatch = useDispatch()
    
    const [Open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit=(index)=>{
        setOpen(true)
        dispatch(editcontact(index))
    }

      
    const data = useSelector(state=>state.contactdata)
    
    return (
        <Container fixed style={{ padding:"0px", backgroundColor: '#cfe8fc', height: '100vh' }}>
            <Modal
                aria-labelledby="Add contact"
                aria-describedby="add contact"
                className={classes.modal}
                open={Open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={Open} style={{width:"300px",backgroundColor:"skyblue" ,opacity:"1"}}>
                
                <div className={classes.paper}>
                    <AddContact handleClose={handleClose} />
                </div>
            </Fade>
            
        </Modal>
            <h1 style={{marginTop:"0px",fontSize:"8vh", backgroundColor:"#34cceb", color:"#eb3474"}}>Contacts</h1>
             <Button variant="outlined" color="primary" id="addbutton" onClick={handleOpen}>Add Contact</Button>
                

  <TableContainer >
      <Table className={classes.table} aria-label="simple table" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Mobile No.</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {data.map((value,index)=>{
                    return(
                        <TableRow key={value.firstname}>
                            <TableCell align="center">{`${value.firstname} ${value.lastname}`}</TableCell>
                            <TableCell align="center">{value.mobilenumber}</TableCell>
                            <TableCell align="center"><EditIcon onClick={()=>handleEdit(index)}/><DeleteIcon  onClick={()=>dispatch(deletecontact(index))}/></TableCell>
                        </TableRow>
                    )
                })}
        </TableBody>
        </Table>
        </TableContainer>
    </Container>
    )
}

export default Main
