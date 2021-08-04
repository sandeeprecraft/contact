import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,UPDATE_INDEX,UPDATE_HEADINGTEXT} from './actcionnames'

export function addcontact(data){
    return{
        type:ADD_CONTACT,
        payload:data
    }
}
export function editcontact(data,id){
    return{
        type:EDIT_CONTACT,
        payload:data,
        index:id
    }
}
export function deletecontact(id){
    return{
        type:DELETE_CONTACT,
        index:id,
        // payload:data
    }
}
export function updateindex(id){
    return{
        type:UPDATE_INDEX,
        payload:id
    }
}
export function updateheadingtext(text){
    return{
        type:UPDATE_HEADINGTEXT,
        text:text
    }
}

