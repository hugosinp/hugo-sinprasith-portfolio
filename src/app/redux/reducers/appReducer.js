const initialState = {
    usLang: true,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SWITCH_LANGUAGE':
            return {
                usLang: !state.usLang,
            }

        case 'HANDLE_SUBMIT_REQUEST':
            return {
                handle_loading: true,
                handle_error: false,
            }

        case 'HANDLE_SUBMIT':
            return {
                handle_loading: false,
                handle_sucess: action.payload,
                handle_error: false,
            }

        case 'HANDLE_SUBMIT_FAIL':
            return {
                handle_loading: false,
                handle_error: true,
            }
    
        default:
            return state
    }
}