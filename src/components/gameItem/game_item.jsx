import React, { useState } from 'react';
import Modal from '../modal/modal';
import styles from './game_item.module.css';

const GameItem = ({game}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  return(
    <>
      <li className={styles.game}>
        <a className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={game.img} />
          </div>
          <p className={styles.title}>{game.title}</p>
          <button 
            className={styles.button}
            onClick={openModal}
          >
            START
          </button>
        </a>
        <Modal
            key={game.index}
            open={modalOpen}
            close={closeModal}
            title={game.title}
        />
      </li>
    </>
  )
};

export default GameItem;