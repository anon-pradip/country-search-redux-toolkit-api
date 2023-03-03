import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countryActions";

const initialState = {
  loading: true,
  countriesData: [],
  countryData: [],
  error: false,
  success: false,
  message: ""
}

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
      state.error = false
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(showAllCountries.pending, (state) => {
      state.loading = true
    })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false
        state.countriesData = action.payload
        state.success = true
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.countriesData = []
      })
  }

})

export default countriesSlice.reducer