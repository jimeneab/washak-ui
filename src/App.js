import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/home"
import Other from "./Views/Other/other"
import NotFound from './Views/NotFound/notFound';
<<<<<<< HEAD
import RegisterCar from './Views/RegisterCar/RegisterCar';
=======
import Login from './Views/Login/Login';
>>>>>>> 63d958fc7c4c13c32650b0e4a0cb5b1942e05fbd

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/other' element={<Other />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/registerCar' element={<RegisterCar />} />
      </Routes>
    </div>
  );
}

export default App;
