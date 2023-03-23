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
      <Link to="/" className=' flex justify-center items-center'>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 spacefocus:ring-offset-2"
        >
          Go Back
        </button>
      </Link>

      {/* main section */}
      <div className=''>
        {countrySearched?.length >= 1 ? (
          <>
            <div className='flex flex-col space-y-3 space-x-0 md:flex-row md:-y-0 md:space-x-4'>
              {/* IMAGE */}
              <div className='w-max'>
                <img src={countrySearched[0].flags.png} alt={countrySearched[0].name} className='object-contain w-48' />
              </div>

              {/* CONTENT */}
              <div className=' flex'>
                <h1>{countrySearched[0].name.official}</h1>
              </div>
            </div>
          </>
        ) : (
          <div>Sorry! No details found.</div>
        )}
      </div>
    </div>
  )
}

export default SingleCountry