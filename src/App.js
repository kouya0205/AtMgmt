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
    { number: '1', name: 'Gil Maro'},
    { number: '2', name: 'Kim Dongyeop'},
    { number: '3', name: 'Kim Hyunwoo'},
    { number: '4', name: 'Kim Doyoung'},
    { number: '5', name: 'Mio Ogasahara'},
    { number: '6', name: 'Mahiro Yoshimura'},
    { number: '7', name: 'Kouya Ieda'},
  ]
  const CheckBtnClick = () =>{
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
      <div className='centering'>
          <h1>勤怠管理サイト</h1>
        <div class="container">
        <Clock />
        </div>
        <div>
          <input 
            type="tel" 
            className='nameBar'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
          <button className='checkBtn' onClick={CheckBtnClick}>PUSH!<i class="fas fa-angle-right fa-position-right"></i></button>
        </div>
        <h2>{name}</h2> {/* 名前を表示 */}
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
