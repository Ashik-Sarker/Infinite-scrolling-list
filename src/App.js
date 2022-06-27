import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import RequireAuth from './Components/Authentication/RequireAuth';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='registration' element={<Registration/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
