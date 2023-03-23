import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { searchByCode } from '../features/countries/countryActions'

const SingleCountry = () => {
  const { loading, error, countrySearched } = useSelector(state => state.countries)
  const dispatch = useDispatch();
  const { code } = useParams()

  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()))
    }
    if (error) { console.log(error) }
  }, [dispatch, code, error])

  return (
    <div className=' py-7 px-4'>
      <Link to="/" className=' text-center max-w-max'>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 spacefocus:ring-offset-2"
        >
          Go Back
        </button>
      </Link>

      {/* main section */}
      <div className=' py-12'>
        {countrySearched?.length >= 1 ? (
          <>
            <div className=' flex justify-start space-x-14'>
              {/* IMAGE */}
              <div className='w-max'>
                <img src={countrySearched[0].flags.png} alt={countrySearched[0].name} className='object-contain w-48' />
              </div>

              {/* CONTENT */}
              <div className=' flex flex-col bg-red-500'>
                <h1 className='underline underline-offset-2 text-center font-bold font-mono text-2xl'>{countrySearched[0].name.common}</h1>

                <div className='flex flex-col space-y-2 space-x-0 md:flex-row md:justify-between md:items-center'>
                  {/* LEFT SIDE */}
                  <div>
                    <p className=''> <span className='font-semibold font-serif'>Official Name: </span>{countrySearched[0].name.official}</p>

                    <p className=''> <span className='font-semibold font-serif'>Population: </span>{countrySearched[0].population}</p>

                    <p className=''> <span className='font-semibold font-serif'>Region: </span>{countrySearched[0].region}</p>

                    <p className=''> <span className='font-semibold font-serif'>Sub-region: </span>{countrySearched[0].subregion}</p>

                    <p className=''> <span className='font-semibold font-serif'>Capital: </span>{countrySearched[0].capital}</p>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className=''>
                    <p className=''> <span className='font-semibold font-serif'>Top level domain: </span>{countrySearched[0].tld[0]}</p>

                    <div className=' flex flex-row'> <span className='font-semibold font-serif'>Currencies: </span>
                      <ul className=" pl-4">
                        {Object.values(countrySearched[0].currencies).map((item, index) => {
                          return (
                            <>
                              <li className='' key={index}>{item.name}</li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                    <p className=' flex flex-row'> <span className='font-semibold font-serif pr-1'>Languages: </span>
                      {Object.values(countrySearched[0].languages).map((item) => item).join(",")}
                    </p>


                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Sorry! No details found.</div>
        )}
      </div>

      {/* BORDERS */}
      <div>
        <h1 className=' text-2xl font-bold font-mono'>Borders:</h1>
        <ul>
          {countrySearched[0].borders?.map((border) => (
            <li key={border}>{border}</li>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default SingleCountry