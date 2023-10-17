import './App.css';
import ComeBtn from './compounents/comeBtn';
import OutBtn from './compounents/outBtn';

function App() {
  return (
    <>
      <div className='centering'>
          <h1>退勤管理サイト</h1>
          <div>
            <input type="tel" className='nameBar'/>
            <button className='checkBtn'>確定</button>
          </div>
        <div class="container">
          <div class="clock">
            <p class="clock-date"></p>
            <p class="clock-time"></p>
          </div>
        </div>
        <div className='Btn'>
          <ComeBtn />
          <OutBtn />
        </div>
      </div>
    </>
  );
}

export default App;
