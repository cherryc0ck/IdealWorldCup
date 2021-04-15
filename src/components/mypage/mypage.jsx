import React from 'react';
import { useHistory } from 'react-router';
import styles from './mypage.module.css';

const Mypage = ({ onMypage }) => {
  const history = useHistory();
  return(
      <h1>My PAGE</h1>
  )
};

export default Mypage;