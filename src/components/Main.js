import React,{useState} from 'react'
import {Fade,Modal,Backdrop,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Container} from "@material-ui/core";
import {useSelector,useDispatch} from 'react-redux'
import {deletecontact, updateindex,updateheadingtext} from '../contactredux'
import './mainstyle.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useConfirm } from 'material-ui-confirm';
import { makeStyles } from '@material-ui/core/styles';
import AddContact from './AddContact';

const useStyles = makeStyles((theme)=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter:"blur(50px)"
      },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(4),
          width: '25ch',
          padding:"10px",
        },
    },
    table: {
      width:650,
      margin: 'auto',
      fontSize:"20vh",
      backgroundColor:"#bab6b8",
      fontFamily:'sans-serif',
      boxShadow:'0 0 20px rgba(0,0,,0,0.15)',
      "& th" : {
        backgroundColor:'#009879',
        color:"#ffffff",
        textAlign:"center",
        fontSize:"3vh"
        },
      "& td" :{
        padding: "12px 15px",
        fontSize:'3vh'
      },
      "& tr": {
        border: "1px solid #dddddd",
        "&:nth-child(even)":{
            backgroundColor: "#f3f3f3"
        },
      },
      
}
}
));

function Main() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const data = useSelector(state=>state.contactdata)
    const [Open, setOpen] = useState(false);
    const confirm = useConfirm();


    const handleOpen = () => {
        dispatch(updateheadingtext('Add Contact'))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete=(index)=>{
        confirm({ description: 'This action is permanent!' })
        .then(() => {dispatch(deletecontact(index))})
        .catch(() => { /* ... */ });
    }

    
    const handleEdit=(index)=>{
        setOpen(true)
        dispatch(updateheadingtext('Edit Contact'))
        dispatch(updateindex(index))
    }

    return (
        <Container fixed style={{ padding:"0px", height: '100vh'}}>
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
            <Fade in={Open} style={{backgroundColor:"white",width:"70vh",height:"70vh" ,opacity:"1",textAlign:"center"}}>
                
                <div className={classes.paper}>
                    <AddContact handleClose={handleClose}/>
                </div>
            </Fade>
            
        </Modal>
             <Button variant="outlined" color="primary" id="addbutton"  onClick={handleOpen}>Add Contact</Button>
                

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
            {console.log(data,"this is data")}
                {data.map((value,index)=>{
                    return(
                        <TableRow >
                            <TableCell align="center">{`${value.firstname} ${value.lastname}`}</TableCell>
                            <TableCell align="center">{value.mobilenumber}</TableCell>
                            <TableCell align="center"><EditIcon onClick={()=>handleEdit(index)}/><DeleteIcon  onClick={()=>handleDelete(index)}/></TableCell>
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
