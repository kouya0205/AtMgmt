import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SetUserData, getUserId } from '../dbFn';
import { db } from '../../firebase';
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore';

const Div = styled.div`
  display: flex;
  button {
    @media (max-width: 1024px) {
      font-size: 1rem;
      padding: 0.25rem 1rem;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.25rem 1rem;
    }
  }
`;

const AtBtn = () => {
  return <Atbtn />;
};

export default AtBtn;

const Atbtn = () => {
  const [state, setState] = useState('out');

  useEffect(() => {
    // Firestoreから以前のstateを取得
    const fetchState = async () => {
      const userId = await getUserId();
      const userDocRef = doc(db, 'users', userId);
      const dateCollectionRef = collection(userDocRef, 'dates');
      const q = query(
        dateCollectionRef,
        orderBy('createdAt', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDoc(q);
      if (!querySnapshot.exists()) {
        querySnapshot.forEach((doc) => {
          setState(querySnapshot.data().state);
        });
      } else {
        setState('out');
      }
    };
    fetchState();
  }, []);

  const comeBtn = async () => {
    try {
      setState('in');
      alert('出勤しました');
      await SetUserData({
        data: 'comeIn',
        state: 'in',
        states: 'end',
        Timestamp: Timestamp.now(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const outBtn = async () => {
    try {
      setState('out');
      alert('退勤しました');
      await SetUserData({
        data: 'comeOut',
        state: 'out',
        states: 'start',
        Timestamp: Timestamp.now(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Div>
      <button
        variant="contained"
        onClick={comeBtn}
        disabled={state === 'in'}
        className="text-xl  mr-10 border-b-[3px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button ml-2 max-[523px]:mr-2 max-[523px]:text-[0.3rem]"
      >
        出勤
      </button>
      <button
        variant="contained"
        onClick={outBtn}
        disabled={state === 'out'}
        className="text-xl   border-b-[3px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button"
      >
        退勤
      </button>
    </Div>
  );
};
