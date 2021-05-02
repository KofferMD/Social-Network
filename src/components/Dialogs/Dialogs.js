import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.message} let={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
    let newMessageText = state.newMessageText;
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
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