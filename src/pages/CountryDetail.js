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
    <div>
      {countries.map((country) => {
        return (
          <>
            <img src={country.flags.png} alt={country.flags.alt} className='h-40 w-40' />
          </>
        )
      })}
    </div>
  )
}

export default CountryDetail