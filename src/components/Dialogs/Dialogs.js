import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.message} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messageList}>
                {messagesElements}
            </div>
            <div className={s.dialogsInnerTextArea}>
                <textarea
                    onChange={onMessageChange}
                    className={s.dialogsTextArea}
                    ref={newMessageElement}
                    value={props.state.newMessageText}
                />
                <button className={s.dialogsBtn} onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;