import { Route, Routes } from 'react-router-dom';
import './App.css';
import {LoginSignup} from './components/StudentDashboard/LoginSignup'
import { Signup } from './components/StudentDashboard/Signup'
import { DynamicTable } from './components/StudentDashboard/DynamicTable';
import { Mainpage } from './components/StudentDashboard/Mainpage';


function App() {
  return (
    <Routes>
      <Route path='' element={<LoginSignup/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='main' element={<Mainpage/>}/>
      <Route path='' element={<LoginSignup/>}/>
      <Route path='name' element={<DynamicTable/>}/>
    </Routes>
    );
}

export default App;
