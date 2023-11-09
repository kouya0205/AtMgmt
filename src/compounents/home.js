import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import ComeBtn from './comeBtn';
import OutBtn from './outBtn';
import UserInfo from './userInfo';
import { IoLogOutOutline } from "react-icons/io5";
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from "react-icons/ai";



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
        <>
            <SignInWithGoogle />
            <SignInWithLine />
            <SignInWithGithub />
        </>
        )}
    </div>
  )
}

export default Home;

function SignInWithGoogle() {
    const signInGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <>
        <button onClick={signInGoogle} className=' bg-white btn-sns mt-7 flex items-center border-[#D0D5DD] border-[1px]'>
            <FcGoogle className=' ml-4 text-2xl'/>
            <p className=' ml-4 text-[#a2a6ac]'>Googleでログイン</p>
        </button> 
        </>    
    )
}

function SignInWithLine() {
    const signInLine = () => {
    };
    return (
        <>
        <button onClick={signInLine} className=' bg-white btn-sns flex items-center border-[#06C755] border-[1px]'>
            <img src='/LINE_Brand_icon.png' alt="" className=' w-6 ml-4 mr-4'/>
            <p className=' text-[#06C755]'>LINEでログイン</p>
        </button>
        </>
    )
}

function SignInWithGithub() {
    const signInGithub = () => {
    };
    return (
        <button onClick={signInGithub} className=' bg-white btn-sns flex items-center border-[1px] border-black'>
            <AiFillGithub className=' fill-slate-900 ml-4 text-[30px]' />
            <p className=' text-black'>Githubでログイン</p>
        </button>
    )
}
function SignOutBtn() {

    return (
        <button onClick={() => auth.signOut()} className='btn-sns mt-7 w-[170px] bg-[#5b75b8] '>
        <div className=' flex items-center text-center'>
        <IoLogOutOutline className='text-2xl'/>
        <p>ログアウトして戻る</p>
        </div>
        </button>
    )
}