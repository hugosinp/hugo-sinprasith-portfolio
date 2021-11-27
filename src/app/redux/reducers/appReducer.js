const initialState = {
    us_lang: true,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SWITCH_LANGUAGE':
            return {
                us_lang: !state.us_lang,
            }

        default:
            return state
    }
}