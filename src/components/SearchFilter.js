import React from 'react'

const SearchFilter = () => {
  return (
    <div className=' mt-8 flex items-center justify-between'>
      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 max-w-md">
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
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter