const initialState = {
    buttonText: ''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_BUTTON_TEXT':
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state
    }
}