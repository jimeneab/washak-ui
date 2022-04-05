import './App.css';
import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Home from "./Views/Home/home"
import Other from "./Views/Other/other"
import NotFound from './Views/NotFound/notFound';
import RegisterCar from './Views/RegisterCar/RegisterCar';
import Login from './Views/Login/Login';
import AddPosition from './Views/AddPosition/AddPosition'
import ModalComponent from './Components/Modal/Modal';

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
    
  const toggleModal = () => {
      setIsShowModal(!isShowModal)
  }

  return (
    <div className="App">
      <ModalComponent isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/other' element={<Other />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/registerCar' element={<RegisterCar />} />
        <Route path='/addPosition' element={<AddPosition />} />
      </Routes>
      <Link to='/home'>
        <button>home</button>
      </Link>
      <Link to='/login'>
        <button>login</button>
      </Link>
      <Link to='/other'>
        <button>other</button>
      </Link>
      <Link to='/notFound'>
        <button>notFound</button>
      </Link>
      <Link to='/registerCar'>
        <button>Reister car</button>
      </Link>
      <Link to='/addPosition'>
        <button>Agregar ubicacion</button>
      </Link>
      <Button onClick={toggleModal}> Abrir modal </Button>
    </div>
  );
}

export default App;
