const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, message: 'Nikolay Vinokurov'},
        {id: 2, message: 'Evald Grib'},
        {id: 3, message: 'Vasiliy Osipov'},
        {id: 4, message: 'Robert Ivanov'},
        {id: 5, message: 'Nikita Prokopiev'},
    ],
    messages: [
        {id: 1, message: "Привет, как дела?"},
        {id: 2, message: "Привет, сегодня тусим!"},
        {id: 3, message: "Го в бар"},
        {id: 4, message: "Привет, как дела?"},
        {id: 5, message: "Пошли в музей"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            }
        default:
            return state;
    }
}

export let addMessageActionCreator = () => ({type: SEND_MESSAGE});
export let updateNewMessageTextCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;