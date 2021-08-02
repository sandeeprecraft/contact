import React from 'react'
import {useDispatch} from 'react-redux'

import { addcontact } from '../contactredux'
function AddContact() {
    const dispatch = useDispatch()
    return (
        <div>
             <form onSubmit={dispatch(addcontact())}>
                <input type="text" name="firstname"/>
                <input type="text" name="lastname"/>
                <input type="text" name="phonenumber"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddContact
