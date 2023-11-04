import React from 'react'
import { auth } from '../firebase';

const UserInfo = () => {
    return (
        <>
        <div className=' text-center flex flex-col items-center'>
            <img src={auth.currentUser.photoURL} alt='' className=' rounded-full w-32 h-32'/>
            <p>{auth.currentUser.displayName}</p>
        </div>
        </>
    )
};

export default UserInfo