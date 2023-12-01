import React from 'react'
import { auth } from '../firebase';




const UserInfo = () => {
    return (
        <div className=''>
            <img src={auth.currentUser.photoURL} alt='' className='rounded-full w-20 h-20 mr-2 items-center mt-5 mb-5'/>
            <p className=' text-white'>{auth.currentUser.displayName}</p>   
        </div>
        
    )
};

export default UserInfo;
