import React from 'react'
import { auth } from '../firebase';

const UserInfo = () => {
    return (
        <>
        <div className=' text-center flex flex-col items-center'>
            <img src={auth.currentUser.photoURL} alt='' className=' rounded-full w-20 h-20'/>
            <p>おかえりなさい！{auth.currentUser.displayName}</p>   
        </div>
        </>
    )
};

export default UserInfo;