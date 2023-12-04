import React from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

  
function SignOutBtn() {
    const navigate = useNavigate();
    const signOut = () => { 
        auth.signOut();
        navigate('/');
    }
    return (
        <>
        <button onClick={(signOut)} className=' mb-4 text-white hover:text-black flex justify-center '>
        <div className=' text-center'>
        <p className=' underline hover:decoration-black'>ログアウト</p>
        </div>
        </button>
        </>
    )
}
export default SignOutBtn