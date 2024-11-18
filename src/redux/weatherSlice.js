import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      // Save search history to localStorage
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      const updatedHistory = [city, ...new Set(searchHistory)].slice(0, 5); // limit to 5
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      return response.data;
    }
  );

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { data: null, status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default weatherSlice.reducer;
