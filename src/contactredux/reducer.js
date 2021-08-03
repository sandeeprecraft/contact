import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT} from './actcionnames'

const initialstate ={
    contactdata:[],
    textdata:[]
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TEXT":
            return {...state,textdata:action.payload}
            // return [...state,action.payload]
        case ADD_CONTACT:
            return {...state,contactdata:action.payload,textdata:[]}
            // return [...state,action.payload]
        case EDIT_CONTACT:
           return {...state,textdata:state.contactdata[action.payload]}
        //    return [...state,action.payload]
        case DELETE_CONTACT:
             const State = state.contactdata
            return (
               {...state,contactdata: State.filter((state,index)=> index!==action.index)}
            )
        default:
            return state
    }
}

export default reducer