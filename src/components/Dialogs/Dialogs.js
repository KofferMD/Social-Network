import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.message} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>);
    let newMessageText = props.state.newMessageText;
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageTextCreator(message));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messageList}>
               <div> {messagesElements} </div>
                <div className={s.dialogsInnerTextArea}>
                <textarea
                    placeholder="Напишите сообщение"
                    className={s.dialogsTextArea}
                    onChange={onNewMessageChange}
                    ref={newMessageElement}
                    value={newMessageText}
                />
                    <button className={s.dialogsBtn} onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;