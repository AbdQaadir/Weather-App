import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import { fetchCurrentWeather, fetchWeatherForecast } from './features/weather/weatherSlice';
import WeatherComponent from './components/WeatherComponent/WeatherComponent';
import { Container, Button, Input  } from './App.styles';

function App() {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const weather = useSelector((state) => state.weather);
    const {error, loading, current, forecast } = weather;

    const HandleSearch = () => {
        if(query){
            dispatch(fetchCurrentWeather({query})).then((res) => {
            if(!res.error){
                const {lat, lon} = res.payload.data.coord;
                dispatch(fetchWeatherForecast({lon, lat}))
            }
            })
        }
    };
    return (
        <Container>
            <img className="container-img" src={require("./assets/logo.png")} alt="Logo"/>
            <Input name="search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button className="search-button" onClick={() => HandleSearch()}>Search</Button>

            { forecast && !loading && !error ? <WeatherComponent current={current} forecast={forecast}/> : <></> }
            {loading ? <h2 className="api-status">Loading</h2>: <></>}
            {error ? <h2 className="api-status">Data Not Found</h2>: <></>}
        </Container>
    );
}

export default App;
