import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { searchByCode } from '../features/countries/countryActions'

const SingleCountry = () => {
  const { loading, error, countrySearched } = useSelector(state => state.countries)
  const dispatch = useDispatch();
  console.log(useParams())
  const { code } = useParams()
  console.log(code)

  // useEffect(() => {
  //   dispatch(searchByCode())
  // })

  return (
    <div className=' py-7'>
      <div className=' text-center'>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default SingleCountry