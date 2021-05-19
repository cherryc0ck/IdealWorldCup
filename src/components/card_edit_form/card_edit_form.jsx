import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({userName, userEmail,  onUpdate}) => {
  const formRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
 
  const onSubmit = (event) => {
    event.preventDefault();
    const updateCard = {
      id: Date.now(),
      theme : themeRef.current.value || '',
      message : messageRef.current.value || '',
      fileName : '',
      fileURL : ''
    };
    formRef.current.reset();
    onUpdate(updateCard);
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
      <select ref={themeRef} className={styles.select} name="theme" placeholer="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <div className={styles.inputFooter}>
        <textarea ref={messageRef} className={styles.textarea} name="message" placeholer="message"></textarea>
        <button className={styles.refreshBtn} onClick={onSubmit}>
          <i className="fas fa-retweet"></i>
        </button>
      </div>
    </form>
  )
};

export default CardEditForm;