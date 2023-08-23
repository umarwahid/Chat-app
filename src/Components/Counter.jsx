import React, { useState } from 'react';
import "../App.css";

export default function Counter() {
    const [temperature, setTemperature] = useState(75);

    const increaseTemperature = () => {
        setTemperature(temperature + 1);
    };

    const decreaseTemperature = () => {
        setTemperature(temperature - 1);
    };

    return (
        <div className='counter-container'>
            <div className='counter'>
                <h1>Temperature</h1>
                <div className='temperature'>
                    <button className='icon-button' onClick={decreaseTemperature}><i className='fas fa-minus'></i></button>
                    <span>{temperature}</span>
                    <button className='icon-button' onClick={increaseTemperature}><i className='fas fa-plus'></i></button>
                </div>
            </div>
        </div>
    );
}
