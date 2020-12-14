import React from 'react'
import moment from 'moment';

import {Container} from './WeatherComponent.styles'

const formatTime = num => moment.unix(num).format("hh:mm A");
const formatDay = num =>  moment.unix(num).format("dddd").substring(0, 3).toUpperCase();

const WeatherComponent = ({current, forecast}) => {
    const {name, weather} = current;
    const {sunrise, sunset} = current.sys;
    const { daily } = forecast;   

    return (
        <Container>
            <h4 className="title">{name}</h4>
            <div className="row-1">
                <div className="col">
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt=""/>
                    <h5 className="weather-description">{weather[0].description}</h5>
                </div>
                <div className="col">
                    <h4>{current.main.temp}<sup>o</sup>C</h4>
                </div>
                <div className="col">
                    <p>Wind: {current.wind.speed}m/s</p>
                    <p>Sunrise: {formatTime(sunrise)}</p>
                    <p>Sunset: {formatTime(sunset)}</p>
                </div>
            </div>

            <div className="row-2">
                {daily?.map((item, idx) => {
                    while(idx < 5){
                        return ( 
                            <div className="col" key={idx}>
                                <h5>{formatDay(item.dt)}</h5>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""/>
                                <h5>{Math.floor(item.temp.max)}<sup>o</sup>C</h5>
                            </div>
                        )
                    }
                    return null;                   
                })}         
            </div>
        </Container>
    )
}

export default WeatherComponent
