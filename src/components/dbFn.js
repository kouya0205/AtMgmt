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
    const userId = await getUserId();
    const userDocRef = doc(db, 'users', userId);
    await setDoc(
      userDocRef,
      {
        [props.data]: moment().format('HH:mm:ss'),
      },
      { merge: true }
    ).then(() => {
      console.log(userDocRef);
    });
  } catch (error) {
    console.error(error);
  }
};
