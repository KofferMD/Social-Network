import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.message} let={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
    let newMessageText = state.newMessageText;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messageList}>
                <div> {messagesElements} </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}  className={s.dialogsInnerTextArea}>
            <div>
                <Field component="textarea" name="newMessageText"  placeholder="Напишите сообщение" className={s.dialogsTextArea}/>
            </div>
            <div>
                <button className={s.dialogsBtn}>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;