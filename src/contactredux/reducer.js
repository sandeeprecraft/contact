import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT} from './actcionnames'



const reducer=(state=[],action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return [...state,action.payload]
        case EDIT_CONTACT:
           return( state.filter((state,index)=>index===action.index))
        case DELETE_CONTACT:
            return (
                state.filter((state,index)=> index!==action.index)
            )
        default:
            return state
    }
}

export default reducer