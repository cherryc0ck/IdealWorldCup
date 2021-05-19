import firebaseApp from './firebase';

class CardRepository{
  saveCard(userId, updateCard){
    firebaseApp.database().ref(`${userId}/cards/${updateCard.id}`).set(updateCard);
  }
}

export default CardRepository;