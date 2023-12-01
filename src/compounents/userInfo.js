import React from 'react'
import { auth } from '../firebase';
import { IoLogOutOutline } from "react-icons/io5";




const UserInfo = () => {
    return (
        <>
        <div>
            <div className='f rounded-full w-20 h-20 mr-2 ml-auto'>
            <img src={auth.currentUser.photoURL} alt=''/>
            <SignOutBtn />
            </div>
            <p>おかえりなさい！{auth.currentUser.displayName}</p>   
        </div>
        </>
    )

    
};

export default UserInfo;

function SignOutBtn() {
    return (
        <>
         <button onClick={() => auth.signOut()} className='btn-sns mt-7 w-[120px] bg-[#5b75b8] '>
        <div className=' flex items-center text-center'>
        <IoLogOutOutline className='text-2xl'/>
        <p>ログアウト</p>
        </div>
        </button>
        </>
    )
}