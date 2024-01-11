import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { SetUserData } from '../dbFn';

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
  const [state, setState] = useState(true);
  const breakStrBtn = async () => {
    try {
      setState(false);
      alert('休憩開始');
      await SetUserData({ data: 'breakStr' });
    } catch (error) {
      console.log(error);
    }
  };
  const breakFinBtn = async () => {
    try {
      setState(true);
      alert('休憩終了');
      await SetUserData({ data: 'breakFin' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div>
      <button
        variant="contained"
        onClick={breakStrBtn}
        disabled={!state}
        className="text-xl  mr-10 border-b-[3px] bg-[#e0f8ff] hover:text-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-solid hover:border-[#c5e0e7bc] hover:translate-y-px  custom-button max-[589px]:mr-2 "
      >
        休憩開始
      </button>
      <button
        variant="contained"
        onClick={breakFinBtn}
        disabled={state}
        className="text-xl   border-b-[3px]  bg-[#e0f8ff] hover:color-[#000] hover:bg-[#e5f7fc] hover:border-b-2 hover:border-[#c5e0e7bc hover:translate-y-px custom-button"
      >
        休憩終了
      </button>
    </Div>
  );
};
