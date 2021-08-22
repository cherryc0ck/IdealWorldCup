import React, { memo }  from 'react';
import Login from '../login/login';
import styled from 'styled-components';

const MainHeader = styled.header`
  position: sticky;
  top: 0;
  flex-basis: 30%;
  height: 100vh;
  background-color: #151515;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 60px;
  
  @media screen and (max-width:1400px){
    width: 90%;
  }

  @media screen and (max-width:1000px){
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 20px;
  }

`;

const Title = styled.h1`
  margin-bottom: 20px;
  border-bottom: 3px solid white;
  color: white;
  font-size: 54px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2em;

  @media screen and (max-width:1400px){
    font-size: 44px;
  }

  @media screen and (max-width:1000px){
    font-size: 37px;
  }

  @media screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 2em;
  }

  @media screen and (max-width: 600px){
    font-size: 22px;
    line-height: 2.5em;
  }

  @media screen and (max-width: 480px) {
    font-size: 19px;
    text-align: center;
`;

const ImgContainer = styled.div`
  margin-top: 8px;
  border-top: 3px solid white;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    padding: 15px 0;
  }
`;

const CupOne = styled.img`
  width: 50%;
  @media screena and (max-width: 600px){
    width: 80%;
  }
`;

const CupTwo = styled.img`
  width: 50%;
  @media screen and (max-width:600px){
    display:none;
  }
`;

const Header = memo(({ authService, onLogout, loginKind, cardRepository }) => {
  return (
  <MainHeader>
    <Container>
      <Title>
        best
        <br/>
        ideal
        <br/>
        world-cup
      </Title>
      <Login 
        authService={authService}
        onLogout={onLogout}
        loginKind={loginKind}
        cardRepository={cardRepository}
      />
      <ImgContainer>
        <CupOne src="./images/ico/cup.png" alt="cup" />
        <CupTwo src="./images/ico/cup.png" alt="cup" />
        </ImgContainer>
      </Container>
  </MainHeader>
  )
});

export default Header;