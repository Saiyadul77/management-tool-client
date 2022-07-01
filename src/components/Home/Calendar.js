import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="bg-primary">
            <div class="card lg:card-side bg-primary shadow-xl p-10">
            <div>
            <figure><img src="https://i.ibb.co/NLTxn0c/calendar.png" alt="Album" /></figure>
            </div>
            <div class="card-body text-white pl-20">
                <h2 class="card-title text-2xl">Calendar</h2>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p className='text-xl'>Today date is: {format(date, "PP")}</p>
                
            </div>
        </div>
        </div>
    );
};

export default Calendar;