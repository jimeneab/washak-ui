import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/home"
import Other from "./Views/Other/other"
import NotFound from './Views/NotFound/notFound';
import RegisterCar from './Views/RegisterCar/RegisterCar';
import Login from './Views/Login/Login';

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
