import React from 'react';
import { useState } from 'react';
import { db }from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { auth } from '../../firebase';



const BreakBtn = () => {
  return (
    <Breakbtn />
  )
}

export default BreakBtn;


const Breakbtn = () => {
const [state, setState] = useState(true);
    const breakStrBtn = (async () => {
        try {
            setState(false);
            alert('休憩開始');
            const docRef = await addDoc(collection(db, auth.currentUser.displayName), {
                breakStr: new Date(),
            });
            console.log(docRef.id);
        }
        catch (error) {
        }
    });
    const breakFinBtn = (async () => {
        try {
            setState(true);
            alert('休憩終了');
            const docRef = await addDoc(collection(db, auth.currentUser.displayName), {
                breakFin: new Date(),
            });
            console.log(docRef.id);
        }
        catch (error) {
        }
    });

    return (
        <div className=' flex'>
            <button variant="contained" onClick={breakStrBtn} disabled={!state} className='text-xl mt-10 mr-10 border-b-[5px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button'>休憩開始</button> 
            <button variant="contained" onClick={breakFinBtn} disabled={state} className='text-xl mt-10  border-b-[5px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button' >休憩終了</button>
        </div>
    );
}

