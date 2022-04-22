import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Views/Register/register"
import NotFound from './Views/NotFound/notFound';
import RegisterCar from './Views/RegisterCar/RegisterCar';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/profile';
import PickDate from './Views/PickDate';
import AddPosition from './Views/AddPosition/AddPosition'
import ModalComponent from './Components/Modal/Modal';
import MyVehicles from './Views/MyVehicles/MyVehicles';
import DateAndPay from './Views/DateAndPay/dateandpay'
import Landing from './Views/Landing/Landing';
import Historial from './Views/Historial/Historial'
import Progress from './Views/Progress/Progress';
import RateService from './Views/RateService/RateService';
import Home from './Views/Home/home';


function App() {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className="App">
      <ModalComponent isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/registerCar' element={<RegisterCar />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/addPosition' element={<AddPosition />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/fecha' element={<PickDate />} />
        <Route path='/myVehicles' element={<MyVehicles />} />
        <Route path='/dateAndPay' element={<DateAndPay />} />
        <Route path='/serviceHistory' element={<Historial />} />
        <Route path='/workInProgress' element={<Progress />} />
        <Route path='/rateService' element={<RateService />} />
      </Routes>

      <Link to='/addPosition'>
        <button>Agregar ubicacion</button>
      </Link>
      <Link to='/perfil'>
        <button>Perfil</button>
      </Link>
      <Link to='/fecha'>
        <button>Fecha</button>
      </Link>
      <Link to='/dateAndPay'>
        <button>Cita-Pago</button>
      </Link>
      <Link to='/workInProgress'>
        <button>En proceso</button>
      </Link>
      <Link to='/rateService'>
        <button>Calificar</button>
      </Link>
    </div>
  );
}

export default App;
