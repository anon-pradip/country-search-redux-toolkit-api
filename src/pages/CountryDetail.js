import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchByRegion, showAllCountries } from '../features/countries/countryActions';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([])
  const { countriesData, error, region, searchTerm, loading } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(showAllCountries())
    if (region) {
      dispatch(searchByRegion(region))
    }
    if (error) {
      console.log(error)
    }
  }, [dispatch, region, error])

  useEffect(() => {
    setCountries(countriesData)
  }, [countriesData])

  const data = countriesData.filter((item) => {
    return item.name.common.toLowerCase().includes(searchTerm)
  })


  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=' grid place-items-center gap-y-4 py-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-slate-100'>
          {data.map((country, index) => {
            return (
              <Link to={`/${country.cioc}`} className=' flex flex-col rounded shadow-xl p-2 w-48 object-contain bg-white hover:translate-x-1 transform transition duration-300 hover:scale-105' key={index}>
                <div>
                  <img src={country.flags.png} alt={country.flags.alt} className=' object-contain h-28 w-full' />
                </div>
                <div>
                  <p className=' text-center font-semibold bg-slate-200 rounded-sm mt-1'>{country.name.common}</p>
                  <p>Population: {country.population} </p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CountryDetail