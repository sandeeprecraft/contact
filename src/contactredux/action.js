import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,SHOW_CONTACT} from './actcionnames'

export function addcontact(data){
    return{
        type:ADD_CONTACT,
        payload:data
    }
}
export function editcontact(index,data){
    return{
        type:EDIT_CONTACT,
        index:index,
        data:data
    }
}
export function deletecontact(index){
    return{
        type:DELETE_CONTACT,
        index:index
    }
}

export function showcontact(){
    return{
        type:SHOW_CONTACT
    }
}

