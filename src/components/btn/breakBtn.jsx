import React from 'react';
import { useState } from 'react';
import { db }from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { auth } from '../../firebase';
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
button {
    @media (max-width: 1024px){
    font-size: 1rem;
    padding: 0.25rem 1rem;
}
    @media (max-width: 769px){
    font-size: 0.8rem;
    padding: 0.25rem 1rem;
}
    @media (max-width: 426px){
    font-size: 6px;
    margin: auto;
}
}
`;

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
        <Div >
            <button variant="contained" onClick={breakStrBtn} disabled={!state} className='text-xl  mr-10 border-b-[3px] bg-[#e0f8ff] hover:text-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-solid hover:border-[#c5e0e7bc] hover:translate-y-px  custom-button max-[523px]:mr-2 '>休憩開始</button> 
            <button variant="contained" onClick={breakFinBtn} disabled={state} className='text-xl   border-b-[3px]  bg-[#e0f8ff] hover:color-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-[#c5e0e7bc hover:translate-y-px custom-button' >休憩終了</button>
        </Div>
    );
}

