
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/homeComponents/about/About';
import Appointment from './pages/homeComponents/appointment/Appointment';
import Contact from './pages/homeComponents/contact/Contact';
import Reviews from './pages/homeComponents/reviews/Reviews';
import Login from './pages/login/Login';
import Meeting from './pages/meeting/Meeting';
import Footer from './pages/shared/footer/Footer';
import Navbar from './pages/shared/navbar/Navbar';

function App() {
  return (
    <div className='max-w-[1550px] mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
        <Route path='/meeting' element={ <Meeting></Meeting>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
