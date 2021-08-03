import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,SHOW_CONTACT,ADD_TEXT} from './actcionnames'

export function addcontact(data){
    return{
        type:ADD_CONTACT,
        payload:data
    }
}
export function editcontact(index){
    return{
        type:EDIT_CONTACT,
        payload:index
    }
}
export function deletecontact(index){
    return{
        type:DELETE_CONTACT,
        index:index,
        // payload:data
    }
}

export function showcontact(){
    return{
        type:SHOW_CONTACT
    }
}
export function addtext(data){
    return{
        type:ADD_TEXT,
        payload:data
    }
}

