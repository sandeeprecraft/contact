import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { TextField ,Button, Container} from '@material-ui/core'
import { addcontact,addtext } from '../contactredux'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

hellosjjd
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
  }));

function AddContact(Props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const data = useSelector(state=>state.contactdata)
 
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        mobilenumber: ""
    });

    const handlechange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    //  const handlechange = e => {
    //      setUser({...user, [e.target.name]: e.target.value});
    //     dispatch(addtext(e.target.value))
    // };

    const handleSubmit = e=>{
        e.preventDefault()

            dispatch(addcontact([...data, user]))
          setUser(
              {firstname: "",
                lastname: "",
                mobilenumber: ""
            })
          Props.handleClose()
    }
    return (
        <div>
             <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField  value = {Props.firstname} name="firstname" id="standard-required" label="FirstName"  onChange={handlechange} />
                    <TextField value = {Props.lastname} name="lastname" id="standard-disabled" label="LastName"  onChange={handlechange}/>
                    <TextField  value = {Props.mobilenumber} name="mobilenumber" id="standard-disabled" label="Mobile Number" onChange={handlechange}/>
                </div>
             <Button style={{margin:"20px,auto,40px,70px"}} variant="outlined" color="primary" onClick={handleSubmit}>Add Contact</Button>
                    
            </form>
        </div>
    )
}

export default AddContact