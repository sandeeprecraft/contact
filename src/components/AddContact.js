import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { TextField ,Button} from '@material-ui/core'
import { addcontact } from '../contactredux'
import { makeStyles } from '@material-ui/core/styles';

export function AddContact(Props) {
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
      const classes = useStyles();
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        mobilenumber: ""
      });
      const handlechange = e => {
        setUser({...user, [e.target.name]: e.target.value});
      };
      const handleSubmit = e=>{
          dispatch(addcontact(user))
          e.preventDefault()
          setUser({firstname: "",
          lastname: "",
          mobilenumber: ""})
          Props.handleClose()
      }
      
    useEffect(()=>{
        const handleEdit=(e,data)=>{
            setUser({firstname: data.firstname,
            lastname: data.lastname,
            mobilenumber: data.mobilenumber
    
            })
        }
    },[])
    return (
        <div>
             <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField  value = {user.firstname} name="firstname" id="standard-required" label="FirstName"  onChange={handlechange} />
                    <TextField value = {user.lastname} name="lastname" id="standard-disabled" label="LastName"  onChange={handlechange}/>
                    <TextField  value = {user.mobilenumber} name="mobilenumber" id="standard-disabled" label="Mobile Number" onChange={handlechange}/>
                </div>
             <Button variant="outlined" color="primary" id="addbutton" onClick={handleSubmit}>Add Contact</Button>
                    
            </form>
        </div>
    )
}


