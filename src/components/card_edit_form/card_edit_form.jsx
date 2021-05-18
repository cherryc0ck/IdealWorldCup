import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({userName, userEmail, card}) => {

  const {name, theme, nickName, email, message, fileName, fileURL} = card;
  const onChange = (event) => {
    return;
  }

  return(
    <form className={styles.form}>
      <input 
        className={styles.input} 
        type="text" 
        name="name" 
        value={userName ? userName : "비회원"}
        onChange={onChange}
        disabled
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={userEmail ? userEmail : "비회원"}
        onChange={onChange}
        disabled
      />
      <select className={styles.select} name="theme" value={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <textarea className={styles.textarea} name="message" value={message} onChange={onChange}>

      </textarea>
    </form>
  )
};

export default CardEditForm;