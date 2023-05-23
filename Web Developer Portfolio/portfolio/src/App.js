import './App.css';
import FirstCard from './components/Card1/FirstCard';
import SecondCard from './components/Card2/SecondCard';
import ThirdCard from './components/Card3/ThirdCard';
import Mainheader from './components/Header/Mainheader';

function App() {
  return (
    <div className="App">
      <Mainheader />
      <div className="sections">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
}

export default App;
