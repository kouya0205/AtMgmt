import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SetUserData, getUserId } from '../dbFn';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Div = styled.div`
  display: flex;
  button {
    @media (max-width: 1024px) {
      font-size: 1rem;
      padding: 0.25rem 1rem;
    }
    @media (max-width: 769px) {
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
    }
    @media (max-width: 452px) {
      font-size: 7px;
      margin: 0;
      padding: 0;
    }
  }
`;

const BreakBtn = () => {
  return <Breakbtn />;
};

export default BreakBtn;

const Breakbtn = () => {
  const [states, setState] = useState(null);
  useEffect(() => {
    // Firestoreから以前のstateを取得
    const fetchState = async () => {
      const userId = await getUserId();
      const userDocRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setState(docSnap.data().states);
      }
    };
    fetchState();
  }, []);

  const breakStrBtn = async () => {
    try {
      setState('start');
      alert('休憩開始');
      await SetUserData({ data: 'breakStr', state: 'in', states: 'start' });
    } catch (error) {
      console.log(error);
    }
  };
  const breakFinBtn = async () => {
    try {
      setState('end');
      alert('休憩終了');
      await SetUserData({ data: 'breakFin', state: 'in', states: 'end' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div>
      <button
        variant="contained"
        onClick={breakStrBtn}
        disabled={states === 'start'}
        className="text-xl  mr-10 border-b-[3px] bg-[#e0f8ff] hover:text-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-solid hover:border-[#c5e0e7bc] hover:translate-y-px  custom-button max-[589px]:mr-2 "
      >
        休憩開始
      </button>
      <button
        variant="contained"
        onClick={breakFinBtn}
        disabled={states === 'end'}
        className="text-xl   border-b-[3px]  bg-[#e0f8ff] hover:color-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-[#c5e0e7bc hover:translate-y-px custom-button"
      >
        休憩終了
      </button>
    </Div>
  );
};
