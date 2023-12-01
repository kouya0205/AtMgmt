import React from 'react';
import { auth } from '../firebase';

  
function SignOutBtn() {
    return (
        <>
        <button onClick={() => auth.signOut()} className=' mb-4 text-white hover:text-black flex justify-center'>
        <div className=' text-center'>
        <p className=' underline hover:decoration-black'>ログアウト</p>
        </div>
        </button>
        </>
    )
}
export default SignOutBtn