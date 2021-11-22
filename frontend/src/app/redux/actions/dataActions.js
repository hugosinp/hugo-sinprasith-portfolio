import { 
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
}  from '../constants/dataConstants'

import axios from 'axios'
import { data } from '../mockData'

export const getData = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_DATA_REQUEST
        })

        // API CALL
        /*const { data } = await axios.get('')*/

        dispatch({
            type: GET_DATA_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
