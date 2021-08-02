import React,{useState} from 'react'
import { Button, Popup } from "semantic-ui-react";
import {useSelector,useDispatch} from 'react-redux'
import {addcontact,editcontact,deletecontact,showcontact} from '../contactredux'
import './mainstyle.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Main(props) {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        mobilenumber: ""
      });
      
      const handlechange = e => {
        setUser({...user, [e.target.name]: e.target.value});
      };
      
    console.log(props)
    const firstname = useSelector(state=>state.firstname)
    const lastname = useSelector(state=>state.lastname)
    const mobilenumber = useSelector(state=>state.mobilenumber)
    const dispatch = useDispatch()
    return (
        <div>
                <input  type="text"  name="firstname" onChange={handlechange}/>
                <input type="text" name="lastname"onChange={handlechange}/>
                <input type="text" name="mobilenumber"onChange={handlechange}/>
                
            <Button variant="contained" color="primary" id="addbutton" onClick={dispatch(addcontact(user))}>Add Contact</Button>
            <table id="table">
                <tr>
                    <th>Name</th>
                    <th>Phone No</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{`${firstname} ${lastname}`}</td>
                    <td>{mobilenumber}</td>
                    <td><EditIcon/><DeleteIcon/></td>
                </tr>
            </table>
        </div>
    )
}

export default Main
