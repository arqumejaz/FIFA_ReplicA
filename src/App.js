import { Route, Routes } from 'react-router-dom';
import CardHorizontal from './CardHorizontal';
import CardLower from './CardLower';
import CardVertical from './CardVertical';
import Fifa from './Fifa';
import Menu from './Menu';
import Privacy from './Privacy';
import Terms from './Terms';
import UpperMid from './UpperMid';
// import{Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Fifa/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
