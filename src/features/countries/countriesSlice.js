import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries, searchByCode } from "./countryActions";

const initialState = {
  loading: true,
  countriesData: [],
  countrySearched: [],
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
      state.countrySearched = []
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
      .addCase(searchByCode.pending, (state) => {
        state.loading = true
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false
        state.countrySearched = action.payload
        state.success = true
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.countrySearched = []
      })
  }

})

export const { reset } = countriesSlice.actions

export default countriesSlice.reducer