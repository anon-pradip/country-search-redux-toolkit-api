import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice"

export default configureStore({
  reducer: {
    countries: countriesReducer
  }
})