import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import weatherReducer from "./features/weather/weatherSlice";
import WeatherComponent from './components/WeatherComponent/WeatherComponent'

const middleware = [thunk];

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware,
});

import App from './App';


describe('Testing App component', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>)
  });

  it("should define the app component", () => {
    expect(wrapper).toBeDefined();
  })

  it("shouldn't render WeatherComponent at default", () => {
    const weatherComp = wrapper.find(<WeatherComponent />);
    expect(weatherComp.exists()).toBe(false);
  })
  describe("<img /> element", () => {
    it("should have a logo at the top", () => {
      expect(wrapper.find(".container-img").exists()).toBe(true);
    })
  });

 
  describe("Input Element", () => {
    it("must have an input element with name of search", () => {
        expect(wrapper.find("[name='search']").exists()).toBe(true);
    })

    it("simulating onChange on input", () => {
        const event = {
          target: { name: "search", value: '' },
        };
        const input = wrapper.find('input')
        input.simulate('change', event);
    });
  })
  
  describe('Button', () => {
    it("must have a button with text search", () => {
      const searchButton = wrapper.find(".search-button").first();
      expect(searchButton.exists()).toBe(true);
      expect(searchButton.text()).toEqual("Search");
    })
  })
  
});

