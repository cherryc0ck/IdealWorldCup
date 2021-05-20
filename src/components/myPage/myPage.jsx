import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';
import Header from '../header/header';
import styles from './myPage.module.css';

const MyPage = ({ FileInput, authService, cardRepository }) => {
  const [loading, setLoading] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [loginKind, setLoginKind] = useState();

  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [card, setCard] = useState({});

  useEffect(()=>{
    authService.onAuthChange(user => {
      //유저가 존재할경우 이메일과 이름 값받아옴
      if(user){
        setUserName(user.displayName);
        setUserEmail(user.email);
        setUserId(user.uid);
        //유저의 이메일이 없을경우(비회원로그인)
        if(!user.email){
          setLoginKind("Anonymous login");
        }else if(user.email){
          setLoginKind("Social login");
        }
      }
    });
  },[authService]); //+[]


  useEffect(()=> {
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId, card => {
      setCard(card);
    });
    return () => stopSync(); 
  },[userId]);


  useEffect(() => {
    return () => setLoading(false);
  }, [loading]);

  const onLogout = () =>{
    authService.logout();
  };

  const updateCard = (updateCard) =>{
    setCard(card => {
      const updated = { ...card};
      updated[updateCard.id] = updateCard;
      return updated;
    });
    cardRepository.saveCard(userId, updateCard);
  };

  return (
    <section className={styles.section}>
      <Header authService={authService} onLogout={onLogout} loginKind={loginKind} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Card 
            userName={userName}
            loginKind={loginKind}
            card={card}
           />
          <CardEditForm
            FileInput={FileInput} 
            userName={userName} 
            userEmail={userEmail} 
            loginKind={loginKind}
            updateCard={updateCard}
            info={card}
          />
        </div>
      </main>
    </section>
  )
};

export default MyPage;