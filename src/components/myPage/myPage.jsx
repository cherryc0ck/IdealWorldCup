import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';
import Header from '../header/header';
import styles from './myPage.module.css';

const MyPage = ({ authService }) => {
  const [loading, setLoading] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [loginKind, setLoginKind] = useState();

  const [card, setCard] = useState(
    {
      theme: 'white',
      message : 'please enter your message',
      fileName: 'eee',
      fileURL: null
    }
  );

  useEffect(()=>{
    authService.onAuthChange(user => {
      //유저가 존재할경우 이메일과 이름 값받아옴
      if(user){
        setUserName(user.displayName);
        setUserEmail(user.email);
        //유저의 이메일이 없을경우(비회원로그인)
        if(!user.email){
          setLoginKind("비회원 로그인");
        }else if(user.email){
          setLoginKind("소셜 로그인");
        }
      }
    });
  },[authService]);

  useEffect(() => {
    return () => setLoading(false);
  }, [loading]);

  const onLogout = () =>{
    authService.logout();
  };

  const updateCard = (updateCard) =>{
    setCard(updateCard);
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