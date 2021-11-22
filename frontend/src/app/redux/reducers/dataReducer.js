import { 
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE 
}  from '../constants/dataConstants'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA_REQUEST:
            return {
                loading: true,
                data: [],
                error: null
            }

        case GET_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            }

        case GET_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}