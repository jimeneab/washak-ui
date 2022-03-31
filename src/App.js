import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from "./Views/Register/register"
import Other from "./Views/Other/other"
import NotFound from './Views/NotFound/notFound';
import RegisterCar from './Views/RegisterCar/RegisterCar';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/profile';

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
      </Routes>
    </div>
  );
}

export default App;
