import Home from './compounents/home';

function App() {
  return (
    <>
      <div className=' relative my-[5%] mx-auto w-[800px] h-[800px] shadow-custom bg-[#f0f0f0]'>
        <div className="flex items-center justify-center text-center flex-col">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
