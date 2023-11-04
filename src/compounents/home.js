import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import ComeBtn from './comeBtn';
import OutBtn from './outBtn';
import UserInfo from './userInfo';

function Home() {
    const [user] = useAuthState(auth);
  return (
    <div>
        {user ? (
            <>
                <UserInfo />
                <div className='flex justify-center'>
                    <ComeBtn />
                    <OutBtn />
                </div>
                <SignOutBtn />
            </>
        ) : (
        <SignInBtn />
        )}
    </div>
  )
}

export default Home;

function SignInBtn() {
    const signInGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInGoogle}>
            <p>グーグルログイン</p>
        </button>
    )
}
function SignOutBtn() {

    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
}