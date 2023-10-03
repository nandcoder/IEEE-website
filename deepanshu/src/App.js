import './App.css';
import Aboutieee from './component/Aboutieee';
import Event from './component/Event';
import Features from './component/Features';

function App() {
  return (
    <div className="App">
      <>
        <Aboutieee/>
        <div className='text-4xl font-semibold p-4'>Events</div>
        <Event/>
        <Features/>
      </>
    </div>
  );
}

export default App;
