import React, { useState, forwardRef } from 'react'
import Button from '../../Components/Button/Button';
import NavBar from '../../Components/NavBar/NavBar';
import TimeButton from '../../Components/TimeButton/TimeButton';
import TimeInput from '../../Components/TimeInput/TimeInput';
import { MoreVertical } from 'react-feather';
import DatePicker from 'react-datepicker'
import { subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import api from '../../lib/api';
import './index.css';
import axios from 'axios';


const PickDate = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [dateAndHour, setDateAndHour] = useState({})

    const saveHandlerDate = async () => {
        const result = await api.saveDate(dateAndHour)
        console.log(result)
    }

    const monthsConfig = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <div className="date-input d-flex align-items-center justify-content-center position-relative" onClick={onClick} ref={ref}>
            <div style={{ fontSize: 40 }}>
                {value.slice(3, 5)}
            </div>
            <div className='ms-3' style={{lineHeight:1.2, fontWeight:400}}>
                <p className='mb-0'>{monthsConfig[startDate.getMonth()]}</p>
                <p className='mb-0'>{value.slice(6)}</p>
            </div>
            <MoreVertical color="#003366" size={20} />
        </div>
    ))

    const [time, setTime] = useState('00:00')
    const showTime = (value) => {
        const hour = value
        const day = startDate.getDate()
        const month = monthsConfig[startDate.getMonth()]
        setTime(hour)
        setDateAndHour({day, month, hour})
    }

    return (
        <section className='date bgimg-1'>
            <div className="add-position-header">
                <NavBar />
            </div>
            <div className='date-body mx-4'>
                <h1 className='subtitle'>Selecciona una fecha y hora</h1>
                <div className='d-flex justify-content-between mt-4'>
                    <DatePicker
                        popperPlacement='bottom-start'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={subDays(new Date(), 0)}
                        /* maxDate={addDays(new Date(), 6)} */
                        shouldCloseOnSelect={true}
                        customInput={<DateInput />}
                    />
                    <TimeInput input={time.slice(0, 5)} />
                </div>
                <div className="time-buttons mt-4">
                    <div className='time-row'>
                        <TimeButton manejarClick={showTime} isAm="am">10:00 - 11:00</TimeButton>
                        <TimeButton manejarClick={showTime} isAm="am">11:00 - 12:00</TimeButton>
                        <TimeButton manejarClick={showTime}>12:00 - 13:00</TimeButton>
                    </div>
                    <div className='time-row'>
                        <TimeButton manejarClick={showTime}>13:00 - 14:00</TimeButton>
                        <TimeButton manejarClick={showTime}>14:00 - 15:00</TimeButton>
                        <TimeButton manejarClick={showTime}>15:00 - 16:00</TimeButton>
                    </div>
                    <div className='time-row'>
                        <TimeButton manejarClick={showTime}>16:00 - 17:00</TimeButton>
                        <TimeButton manejarClick={showTime}>17:00 - 18:00</TimeButton>
                        <TimeButton manejarClick={showTime}>18:00 - 19:00</TimeButton>
                    </div>
                </div>
            </div>
            <div className='mx-4 mt-5'>
                <Button width={'large'} color="primary" onClick={saveHandlerDate}>Agendar</Button>
            </div>

        </section>

    )
}

export default PickDate