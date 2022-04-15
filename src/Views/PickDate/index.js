import { ArrowLeft } from 'react-feather'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Button from '../../Components/Button/Button';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import './index.css'
import "react-datepicker/dist/react-datepicker.css";
import api from '../../lib/api';

const PickDate = () => {

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 8)
      );

    const saveHandlerDate = async () => {
        const result = await api.saveDate(startDate)
        console.log(result)
    }

    return (
        <section className='date'>
            <div className="add-position-header">
                <div id='add-positon-navbar'>
                    <ArrowLeft color="#666666" width={'40px'} className="mx-1" />
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
            </div>
            <div className='date-body'>
                <h1>Selecciona una fecha y hora</h1>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 8)}
                    maxTime={setHours(setMinutes(new Date(), 0), 19)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <div>
                <Button width={'medium'} color="primary" onClick={saveHandlerDate}>Agendar</Button>
            </div>

        </section>

    )
}

export default PickDate