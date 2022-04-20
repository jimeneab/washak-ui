import { Input } from "reactstrap";
import { Navigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import Crossover from "../../Components/Crossover";
import Moto from "../../Components/Motorcicle";
import Suv from "../../Components/Suv";
import Sedan from "../../Components/Sedan";
import Hatchback from "../../Components/Hatchback";
import Pickup from "../../Components/Pickup";
import Van from "../../Components/Van";
import { motion } from "framer-motion";
import ModalComponent from "../../Components/Modal/Modal"
import "./RegisterCar.css";
import './RegisterCar.css'

function RegisterCar() {
    const [current, setCurrent] = useState("");
    const [newCars, setNewCars] = useState({});
    const [widthTypes, setWidthTypes] = useState(0);
    const [token, setToken] = useState(null);
    const [isShowModal,setIsShowModal] = useState(false);
    const sliderTypes = useRef();
    const userId = window.localStorage.getItem('user')
    const config = {headers: {'Content-Type': 'application/json',authorization:`${token}`}}
  

    useEffect(() => {
      const token = window.localStorage.getItem('token')
      if (!token) {
        setToken(token)
        return <Navigate to="/login" replace />;
      }  
        setWidthTypes(sliderTypes.current.scrollWidth - sliderTypes.current.offsetWidth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formHandler = event => {
        const value = event.target.value
        const property = event.target.name
        setCurrent(event.target.value);
        setNewCars({ ...newCars, [property]: value })
    }
    const saveHandler = async () => {
        axios.post(`http://localhost:4000/cars/${userId}`, newCars, config)
        .then(res => {
            setIsShowModal(true)
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
    }

  return (
    <div className='row justify-content-center register'>
      <section className='bgimg-1'>
        <ModalComponent isShowModal={isShowModal} content='Vehiculo guardado' isShownFooter={false} setIsShowModal={setIsShowModal}/>
        <NavBar />
        <h1 className='title mx-4'>Añade un vehículo</h1>
        <h2 className='subtitle mx-4'>Tipo de vehículo</h2>
        <motion.div ref={sliderTypes} className='slider-container ps-4 py-2'>
          <motion.div
            className='slider-types d-flex'
            drag='x'
            dragConstraints={{ right: 0, left: -(widthTypes + 15) }}>
            <input
              type='radio'
              name='vehiculo'
              id='motocicleta'
              value='motocicleta'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='motocicleta'
              className={`type-button ${
                current == "motocicleta" ? "active" : ""
              }`.trimEnd()}>
              <Moto
                width={70}
                stroke={current == "motocicleta" ? "#f3f3f3" : "#036"}
              />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='sedan'
              value='sedan'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='sedan'
              className={`ms-4 type-button ${
                current == "sedan" ? "active" : ""
              }`.trimEnd()}>
              <Sedan
                width={90}
                stroke={current == "sedan" ? "#f3f3f3" : "#036"}
              />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='hatchback'
              value='hatchback'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='hatchback'
              className={`ms-4 type-button ${
                current == "hatchback" ? "active" : ""
              }`.trimEnd()}>
              <Hatchback
                width={90}
                stroke={current == "hatchback" ? "#f3f3f3" : "#036"}
              />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='crossover'
              value='crossover'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='crossover'
              className={`ms-4 type-button ${
                current == "crossover" ? "active" : ""
              }`.trimEnd()}>
              <Crossover
                width={90}
                stroke={current == "crossover" ? "#f3f3f3" : "#036"}
              />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='suv'
              value='suv'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='suv'
              className={`ms-4 type-button ${
                current == "suv" ? "active" : ""
              }`.trimEnd()}>
              <Suv width={90} stroke={current == "suv" ? "#f3f3f3" : "#036"} />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='pickup'
              value='pickup'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='pickup'
              className={`ms-4 type-button ${
                current == "pickup" ? "active" : ""
              }`.trimEnd()}>
              <Pickup
                width={90}
                stroke={current == "pickup" ? "#f3f3f3" : "#036"}
              />
            </label>
            <input
              type='radio'
              name='vehiculo'
              id='van'
              value='van'
              className='hide-radio'
              onChange={formHandler}
            />
            <label
              htmlFor='van'
              className={`ms-4 type-button ${
                current == "van" ? "active" : ""
              }`.trimEnd()}>
              <Van width={90} stroke={current == "van" ? "#f3f3f3" : "#036"} />
            </label>
          </motion.div>
        </motion.div>
        <h2 className='subtitle mx-4 mt-4'>Datos del vehículo</h2>
        <div className='input mx-4 py-2'>
          <Input
            onChange={formHandler}
            type='text'
            name='marca'
            className='mb-3 registerCar-input'
            placeholder='Marca'
          />
          <Input
            onChange={formHandler}
            type='text'
            name='modelo'
            className='mb-3 registerCar-input'
            placeholder='Modelo'
          />
          <Input
            onChange={formHandler}
            type='text'
            name='color'
            className='mb-3 registerCar-input'
            placeholder='Color'
          />
          <Input
            onChange={formHandler}
            type='text'
            name='placa'
            className='mb-3 registerCar-input'
            placeholder='Placa (Opcional)'
          />
        </div>
        <div className='registerCar-footer mx-4 mt-5'>
          <Button onClick={saveHandler} width={"large"} color={"primary"}>
            Guardar vehículo
          </Button>
        </div>
      </section>
    </div>
  );
}

export default RegisterCar;
