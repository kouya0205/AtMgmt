import './App.css';
import ComeBtn from './compounents/comeBtn';
import OutBtn from './compounents/outBtn';
import Clock from './compounents/clock';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='centering'>
          <h1>退勤管理サイト</h1>
        <div>
          <input type="tel" className='nameBar'/>
          <button className='checkBtn' >PUSH!<i class="fas fa-angle-right fa-position-right"></i></button>
        </div>
        <div class="container">
        <Clock />
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
