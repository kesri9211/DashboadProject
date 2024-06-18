import './App.css'
import './Components/Sidebar/Sidebar'
import Sidebar from './Components/Sidebar/Sidebar';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';
function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        </div>
    </div>
  );
}

export default App;
