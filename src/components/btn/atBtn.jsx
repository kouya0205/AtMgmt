import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SetUserData } from '../dbFn';

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
  const initialState = JSON.parse(localStorage.getItem('atbtnState')) || true;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('atbtnState', JSON.stringify(state));
  }, [state]);

  const comeBtn = async () => {
    try {
      setState(false);
      alert('出勤しました');
      await SetUserData({ data: 'comeIn' });
    } catch (error) {
      console.log(error);
    }
  };

  const outBtn = async () => {
    try {
      setState(true);
      alert('退勤しました');
      await SetUserData({ data: 'comeOut' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Div>
      <button
        variant="contained"
        onClick={comeBtn}
        disabled={!state}
        className="text-xl  mr-10 border-b-[3px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button ml-2 max-[523px]:mr-2 max-[523px]:text-[0.3rem]"
      >
        出勤
      </button>
      <button
        variant="contained"
        onClick={outBtn}
        disabled={state}
        className="text-xl   border-b-[3px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button"
      >
        退勤
      </button>
    </Div>
  );
};
