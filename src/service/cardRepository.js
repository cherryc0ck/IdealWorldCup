import firebaseApp from './firebase';

class CardRepository{
  syncCards(userId, onUpdate){
    const ref = firebaseApp.database().ref(`${userId}/updateCard`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, updateCard){
    firebaseApp.database().ref(`${userId}/updateCard/`).set(updateCard);
  }
}

export default CardRepository;