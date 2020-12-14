import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
    `${sliceName}/fetchCurrentWeather`,
    ({ query }) => weatherAPI.fetchCurrentWeather({ query })
);

export const fetchWeatherForecast = createAsyncThunk(
    `${sliceName}/fetchWeatherForecast`,
    ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
    name: sliceName,
    initialState: {
        current: null,
        forecast: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.pending]: (state, { payload, meta }) => {
            state.loading = true;
            state.error = null;
        },
        [fetchCurrentWeather.fulfilled]: (state, { payload, meta }) => {
            state.error = null;
            state.loading = false;
            state.current = payload.data;
        },
        [fetchCurrentWeather.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
        },
        [fetchWeatherForecast.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.error = null;
            state.forecast = payload.data;
        },
    },
});

export default weatherSlice.reducer;
