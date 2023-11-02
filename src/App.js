import './App.css';
import ComeBtn from './compounents/comeBtn';
import OutBtn from './compounents/outBtn';
import Clock from './compounents/clock';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [name, setName] = useState('');
  const [buttonsVisible, setButtonsVisble] = useState(false)
  const userData = [
    { number: '1', name: '吉まろ'},
    { number: '2', name: 'ドンヨプ様'},
    { number: '3', name: 'ひょんぬ'},
    { number: '4', name: 'ドヨン'},
    { number: '5', name: '堕天使'},
    { number: '6', name: 'まひまひ'},
    { number: '7', name: 'こうやくん'},
  ]
  const CheckBtnClick = () => {
    const user = userData.find((user) => user.number === inputValue);
    if (user) {
      setName(user.name); 
      setButtonsVisble(true);
    } else {
      setName('名前が見つかりません'); 
      setButtonsVisble(false);
    }
  };
  return (
    <>
      <div className='text-center'>
        <div className="flex items-center justify-center text-center flex-col">
          <Clock />
          <div className='flex flex-row items-center'>
            <input 
              type="num"
              className='flex 1'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='checkBtn' onClick={CheckBtnClick}>PUSH!<i class="fas fa-angle-right fa-position-right"></i></button>
          </div>
        </div>
        
        <h2>{name}</h2>
        {buttonsVisible && (
        <div className='Btn'>
          <ComeBtn />
          <OutBtn />
        </div>
        )}
      </div>
    </>
  );
}

export default App;
