import {FETCH_DATA, UPDATE_DATA, SET_ERROR} from '../actions'


const initialState ={
    smurf:[],
    isFetchingData: false,
    err:''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData:true,
                smurf:[]
            }
        case UPDATE_DATA:
                return{
                    ...state,
                    isFetchingData:false,
                    smurf: action.payload
                }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData:false,
                error:action.payload
            }  
            default:
                return state  
    }
}