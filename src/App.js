import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Views/Register/register"
import Other from "./Views/Other/other"
import NotFound from './Views/NotFound/notFound';
import RegisterCar from './Views/RegisterCar/RegisterCar';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/profile';
import AddPosition from './Views/AddPosition/AddPosition'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/other' element={<Other />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/registerCar' element={<RegisterCar />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/addPosition' element={<AddPosition />} />
      </Routes>
      <Link to='/login'>
        <button>home</button>
      </Link>
      <Link to='/'>
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
      <Link to='/perfil'>
        <button>Perfil</button>
      </Link>
    </div>
  );
}

export default App;
