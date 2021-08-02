import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,SHOW_CONTACT} from './actcionnames'

export function addcontact(data){
    return{
        type:ADD_CONTACT,
        payload:{data}
    }
}
export function editcontact(){
    return{
        type:EDIT_CONTACT
    }
}
export function deletecontact(){
    return{
        type:DELETE_CONTACT
    }
}

export function showcontact(){
    return{
        type:SHOW_CONTACT
    }
}

