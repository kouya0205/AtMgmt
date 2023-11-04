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
        <button onClick={signInGoogle} className='bg-[#dd4b39] btn-sns mt-7'>
            Googleでログイン
        </button>
    )
}
function SignOutBtn() {

    return (
        <button onClick={() => auth.signOut()} className='btn-sns mt-7 w-[170px] bg-[#5b75b8] '>
        <div className=' flex items-center text-center'>
        <p>ログアウトして戻る</p>
        </div>
        </button>
    )
}