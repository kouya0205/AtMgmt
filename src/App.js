import Clock from './compounents/clock';
import Home from './compounents/home';

function App() {
  return (
    <>
      <div className=' relative my-[5%] mx-auto w-[600px] h-[600px] shadow-custom bg-[#f0f0f0]'>
        <div className="flex items-center justify-center text-center flex-col">
          <Clock />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
