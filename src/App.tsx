import React from 'react';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import { Routes,Route,Navigate } from 'react-router-dom';
import SingUp from './components/singup/singup';
import Shop from './components/Shop/Shop';
import LandignPage from './components/LandignPage/LandignPage';
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/singup' element={<SingUp/>}></Route>
        <Route path="/" element={<Navigate to="/landingPage" />} />
        <Route path="/" element={<Home/>}>
          <Route path='/landingPage' element = {<LandignPage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<About/>}/>
        </Route>
      </Routes>
      <Detail/>
    </div>
  );
}

export default App;
