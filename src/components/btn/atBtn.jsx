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
    @media (max-width: 768px){
    font-size: 0.8rem;
    padding: 0.25rem 1rem;
}
}
`;

const AtBtn = () => {
  return (
    <Atbtn />
  )
}

export default AtBtn;


const Atbtn = () => {
const [state, setState] = useState(true);
    const comeBtn = (async () => {
        try {
            setState(false);
            alert('出勤しました');
            const docRef = await addDoc(collection(db, auth.currentUser.displayName), {
                comeIn: new Date(),
            });
            console.log(docRef.id);
        }
        catch (error) {
        }
    });
    const outBtn = (async () => {
        try {
            setState(true);
            alert('退勤しました');
            const docRef = await addDoc(collection(db, auth.currentUser.displayName), {
                comeOut: new Date(),
            });
            console.log(docRef.id);
        }
        catch (error) {
        }
    });

    return (
        <Div>
            <button variant="contained" onClick={comeBtn} disabled={!state} className='text-xl  mr-10 border-b-[5px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button ml-2 max-[523px]:mr-2 max-[523px]:text-[0.3rem]'>出勤</button> 
            <button variant="contained" onClick={outBtn} disabled={state} className='text-xl   border-b-[5px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button' >退勤</button>
        </Div>
    );
}
