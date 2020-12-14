import React from 'react';
import WeatherComponent from './WeatherComponent.jsx';
import {shallow} from 'enzyme';


const currentDemo = {
    "dt": 1595243443,
    "sunrise": 1595243663,
    "sunset": 1595296278,
    "temp": 293.28,
    "feels_like": 293.82,
    "pressure": 1016,
    "main": {
        "feels_like": 31,
        "humidity": 62,
        "pressure": 1019,
        "temp": 29,
        "temp_max": 29,
        "temp_min": 29,
    },
    "humidity": 100,
    "dew_point": 293.28,
    "uvi": 10.64,
    "clouds": 90,
    "sys": {
        "country": "NG",
        "id": 1185,
        "sunrise": 1606974137,
        "sunset": 1607016478,
        "type": 1,
    },
    "visibility": 10000,
    "wind": {
        "deg": 220,
        "speed": 3.1
    },
    "wind_deg": 310,
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      },
      {
        "id": 201,
        "main": "Thunderstorm",
        "description": "thunderstorm with rain",
        "icon": "11n"
      }
    ],
    "rain": {
      "1h": 2.93
    }
  };

const foreCastDemo = {
    "clouds": 46,
    "dew_point": 23.04,
    "dt": 1606993200,
    "feels_like": {day: 35.15, night: 30.84, eve: 30.9, morn: 29.59},
    "humidity": 61,
    "pop": 0.46,
    "pressure": 1013,
    "rain": 1.33,
    "sunrise": 1606974137,
    "sunset": 1607016478,
    "temp": {day: 31.43, min: 24.85, max: 31.43, night: 27.49, eve: 27.54, morn: 24.85},
    "uvi": 7.44,
    "weather": [
        {description: "light rain",
        icon: "10d",
        id: 500,
        main: "Rain"}
    ],
    "wind_deg": 252,
    "wind_speed": 2.16,
}
describe("<WeatherComponent", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WeatherComponent current={currentDemo} forecast={foreCastDemo}/>);
    })

    it("defines the component", () => {
        expect(wrapper).toBeDefined();
        
    })

    it("should have an h4 element", () => {
        expect(wrapper.find(".title").exists()).toBe(true);
    })

    it("should have an h4 element with empty value", () => {
        expect(wrapper.find(".title").text()).toBe("");
    })
})