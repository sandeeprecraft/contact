import React,{useState,useEffect,useRef} from 'react'
import {useDispatch} from 'react-redux'
import { TextField ,Button,Typography} from '@material-ui/core'
import { addcontact, editcontact,updateheadingtext} from '../contactredux'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import './mainstyle.css'

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
    const currentIndex = useSelector(state=>state.index)
    const inputref = useRef(null)
    const text = useSelector(state => state.headingtext)
    var returnStateObject=()=> {
      if (currentIndex === -1)
          return {
              firstname: '',
              lastname: '',
              mobilenumber: '',
          }
      else
          return data[currentIndex]
  }
  const [user,setUser] = useState({...returnStateObject})

  
  useEffect(() => {
      setUser({ ...returnStateObject() })
      inputref.current.focus()
  }, [currentIndex,data.length])
    


    const handlechange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };



    const handleSubmit = (e)=>{
       e.preventDefault()
       if(currentIndex===-1){
         dispatch(updateheadingtext('Add Contact'))
          dispatch(addcontact([...data, user]))
            setUser(
                {firstname: "",
                  lastname: "",
                  mobilenumber: ""
              })
        Props.handleClose()
       }
        else{
          dispatch(editcontact(user,currentIndex))
          Props.handleClose()
        }
    }
    return (
        <div>
             <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography variant="h6" style={{color:"#68ac53",fontSize:"6vh",backgroundColor:"#8a757e"}}> {text }   </Typography>
                    <TextField  style={{marginTop:"2vh",marginBottom:"0vh"}} inputRef={inputref} value = {user.firstname} name="firstname" id="standard-required" label="FirstName"  onChange={handlechange} />
                    <TextField   value = {user.lastname} name="lastname" id="standard-disabled" label="LastName"  onChange={handlechange}/>
                    <TextField    value = {user.mobilenumber} name="mobilenumber" id="standard-disabled" label="Mobile Number" onChange={handlechange}/>
                    <br></br>
                    <Button id="buttons" variant="outlined" type="submit">Ok</Button>
                    <Button id="buttons" variant="outlined"  onClick={()=>Props.handleClose()}>Cancel</Button>    
            </form>
        </div>
    )
}

export default AddContact