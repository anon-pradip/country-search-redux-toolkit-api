import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, setRegion, setSearhTerm } from '../features/countries/countriesSlice'

const SearchFilter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  const [filter, setFilter] = useState("")
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.countries)
  const handleChangeInput = (e) => {
    dispatch(setSearhTerm(e.target.value.toLowerCase()))
  }

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()))
    }
    return () => {
      dispatch(reset())
    }
  }, [dispatch, filter])

  return (
    <div className=' mt-8 flex items-center justify-between'>
      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 w-1/4">
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          Country Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChangeInput}
        />
      </div>

      <div className=' w-1/4 -mt-4 mb-2.5'>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Filter by Region
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="Canada"
          onChange={(e) => setFilter(e.target.value)}
        >
          {regions.map((region, index) => {
            return (
              <option value={region} key={index}>{region}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default SearchFilter