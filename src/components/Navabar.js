import React from 'react'
import { Outlet } from 'react-router-dom'

const Navabar = () => {
  return (
    <>
      <div className=' max-w-screen-xl px-4 py-4 rounded mx-auto shadow-lg flex justify-between items-center'>
        <div className=' text-3xl font-bold text-center'>
          Where To Go?
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navabar