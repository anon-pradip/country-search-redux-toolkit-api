import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// show all countries

export const showAllCountries = createAsyncThunk("countries/showAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all")
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchByCode = createAsyncThunk("countries/searchByCode", async (code, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}
    `)
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

// SEARCH BY REGION
export const searchByRegion = createAsyncThunk("countries/searchByRegion", async (region, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}
    `)
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})