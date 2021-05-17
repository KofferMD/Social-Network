const SEND_MESSAGE = 'SEND-MESSAGE';


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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        default:
            return state;
    }
}

export let sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;