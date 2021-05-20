import firebaseApp from './firebase';

class CardRepository{
  saveCard(userId, updateCard){
    firebaseApp.database().ref(`${userId}/updateCard/${updateCard.id}`).set(updateCard);
  }
}

export default CardRepository;