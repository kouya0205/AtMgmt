import React from 'react';
import ComeBtn from './comeBtn';
import UserInfo from './userInfo';
import OutBtn from './outBtn';
import { IoLogOutOutline } from "react-icons/io5";
import auth from '../firebase';

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

const MyPage = () => {
    <>
        <UserInfo />
        <div className='flex justify-center'>
        <ComeBtn />
        <OutBtn />
        </div>
        <SignOutBtn />
    </>
}
export default MyPage;