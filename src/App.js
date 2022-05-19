
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import About from './pages/homeComponents/about/About';
import Appointment from './pages/homeComponents/appointment/Appointment';
import Contact from './pages/homeComponents/contact/Contact';
import Reviews from './pages/homeComponents/reviews/Reviews';
import Login from './pages/login/Login';
import Meeting from './pages/meeting/Meeting';
import Footer from './pages/shared/footer/Footer';
import Navbar from './pages/shared/navbar/Navbar';
import SignUp from './pages/signUp/SignUp';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './pages/RequireAuth';
import LoginModal from './pages/loginModal/LoginModal';
import SignupModal from './pages/signupModal/SignupModal';

function App() {
  return (
    <div className='max-w-[1488px] mx-auto'>
      <Navbar></Navbar>
      <LoginModal></LoginModal>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
        }>
        </Route>
        <Route path='/meeting' element={
            <RequireAuth>
              <Meeting></Meeting>
            </RequireAuth>
        }>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <ToastContainer />
    </div>
  );
}

export default App;
