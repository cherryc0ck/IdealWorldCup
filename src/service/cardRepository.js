import { firebaseDatabase } from './firebase';

class CardRepository{
  syncCards(userId, onUpdate){
    const ref = firebaseDatabase.ref(`${userId}/updateCard`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, updateCard){
    firebaseDatabase.ref(`${userId}/updateCard/`).set(updateCard);
  }
}

export default CardRepository;