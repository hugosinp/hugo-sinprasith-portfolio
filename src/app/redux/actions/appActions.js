import emailjs from 'emailjs-com';

export const switchLanguage = () => async (dispatch) => {
    dispatch({
        type: 'SWITCH_LANGUAGE',
    })
}

export const sendEmail = (name, email, inquiry, message) => async (dispatch) => {
    try{
        dispatch({
            type: 'HANDLE_SUBMIT_REQUEST',
        })
    
        emailjs.send('service_2tt70n9', 'template_pqraf6b', {
            name: name,
            email: email,
            inquiry: inquiry,
            message: message,
        }, 'user_OTQoaChpT6sgokhhmzCe0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        dispatch({
            type: 'HANDLE_SUBMIT',
            payload: true
        })

    } catch(error) {
        dispatch({
            type: 'HANDLE_SUBMIT_FAIL',
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }

}