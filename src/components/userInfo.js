import React from 'react'
import { auth } from '../firebase';




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
        <button onClick={() => auth.signOut()} className='btn-sns w-[120px] text-blue-900 hover:text-black'>
        <div className=' flex items-center text-center'>
        <p className=' underline hover:decoration-black'>ログアウト</p>
        </div>
        </button>
        </>
    )
}