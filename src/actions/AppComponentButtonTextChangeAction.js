export const ButtonTextChangeAction = () => dispatch => {

    const payload = {
        buttonText: 'Button Clicked at : ' + Date.now()
    }

    dispatch({
        type: 'CHANGE_BUTTON_TEXT',
        payload
    });
}