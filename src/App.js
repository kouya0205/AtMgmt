import './App.css';
import ComeBtn from './compounents/comeBtn';
import OutBtn from './compounents/outBtn';
import Clock from './compounents/clock';

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
        <Clock />
        </div>
        <div className='Btn'>
          {/* <ComeBtn />
          <OutBtn /> */}
        </div>
      </div>
    </>
  );
}

export default App;
