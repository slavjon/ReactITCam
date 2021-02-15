import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
    let sendMessageEl = React.createRef();
    let addMessage = () =>{
        let message = sendMessageEl.current.value;
        alert(message);
    }
    return (
        <div className={s.dialogs__container}>
            <h1>Dialogs</h1>
            <div className={s.dialogs__wrap}>
                <div className={s.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={s.messages__wrap}>
                    {messagesElements}
                    <textarea ref={sendMessageEl}></textarea>
                    <button className={s.send__btn} onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;