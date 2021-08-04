import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,UPDATE_INDEX,UPDATE_HEADINGTEXT} from './actcionnames'

const initialstate ={
    contactdata:[],
    index:-1,
    headingtext:'Add Contact'
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case UPDATE_INDEX:
            return {...state,index:action.payload}
        case ADD_CONTACT:
            return {...state,contactdata:action.payload,index:-1}
        case EDIT_CONTACT:
            const d = state.contactdata.splice(action.index,1,action.payload)
            return{...state,d,index:-1}
        case DELETE_CONTACT:
            const State = state.contactdata
            return ({...state,contactdata: State.filter((state,index)=> index!==action.index)})
        case UPDATE_HEADINGTEXT:
            return({...state,headingtext:action.text})
        default:
            return state
    }
}

export default reducer