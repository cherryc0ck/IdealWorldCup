import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({userName, userEmail ,updateCard, info}) => {
  const formRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
 
  const { message, theme} = info;

  const onChange = (event) => {
    if(event.currentTarget === null){
      return ;
    }
    event.preventDefault();
    updateCard({
      ...info,
      [event.currentTarget.name] : event.currentTarget.value
    })
  };

  return(
    <form ref={formRef} className={styles.form}>
      <input 
        className={styles.input} 
        type="text" 
        name="name" 
        value={userName ? userName : "비회원"}
        disabled
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={userEmail ? userEmail : "비회원"}
        disabled
      />
      <select ref={themeRef} className={styles.select} name="theme" value={theme} placeholer="theme" onChange={onChange}>
        <option value="white">white</option>
        <option value="dark">dark</option>
        <option value="pink">pink</option>
        <option value="colorful">colorful</option>
      </select>
      <div className={styles.inputFooter}>
        <textarea ref={messageRef} className={styles.textarea} name="message" value={message} placeholer="message" onChange={onChange}></textarea>
      </div>
    </form>
  )
};

export default CardEditForm;