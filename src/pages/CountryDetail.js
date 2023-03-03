import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showAllCountries } from '../features/countries/countryActions';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([])
  const { countriesData, error } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(showAllCountries())
  }, [dispatch])

  useEffect(() => {
    setCountries(countriesData)
  }, [countriesData])

  if (error) {
    console.log(error)
  }

  return (
    <div className=' grid place-items-center gap-y-4 py-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-slate-100'>
      {countries.map((country) => {
        return (
          <div className=' flex flex-col rounded shadow-xl p-2 w-48 h-48 object-contain bg-white hover:translate-x-1 transform transition duration-300 hover:scale-105'>
            <div>
              <img src={country.flags.png} alt={country.flags.alt} className=' object-contain h-28 w-full' />
            </div>
            <div>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CountryDetail