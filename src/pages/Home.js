import React from 'react'
import SearchFilter from '../components/SearchFilter'

import CountryDetail from './CountryDetail'

const Home = () => {
  return (
    <div className=' max-w-4xl mx-auto'>
      <SearchFilter />
      <CountryDetail />
    </div>
  )
}

export default Home