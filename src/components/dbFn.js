import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import moment from 'moment';

export const getUserId = async () => {
  try {
    const user = auth.currentUser;
    const userId = user.uid;
    console.log(userId);
    return userId;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const SetUserData = async (props) => {
  try {
    const date = new Date();
    const dateId = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const userId = await getUserId();
    const userDocRef = doc(db, 'users', userId);
    const dateDocRef = doc(userDocRef, 'dates', dateId);
    await setDoc(
      dateDocRef,
      {
        [props.data]: moment().format('HH:mm:ss'),
        state: props.state,
        states: props.states,
      },
      { merge: true }
    ).then(() => {
      console.log(userDocRef);
    });
  } catch (error) {
    console.error(error);
  }
};
