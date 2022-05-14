
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './pages/shared/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
