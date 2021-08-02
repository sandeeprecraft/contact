import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,SHOW_CONTACT} from './actcionnames'

const initialState={
    firstname:'',
    lastname:'',
    mobilenumber:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return{
                firstname:action.payload.data.firstname,
                lastname:action.payload.data.lastname,
                mobilenumber:action.payload.data.mobilenumber
            }
        case EDIT_CONTACT:
            return{
                ...state
            }
        case DELETE_CONTACT:
            return{
                ...state
            }
        case SHOW_CONTACT:
            return{
                ...state
            }
        default:
            return state
    }
}

export default reducer