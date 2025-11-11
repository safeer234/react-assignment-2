import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-center'>
      <h1 className=' mt-70 text-center text-6xl font-bold text-blue-600'>Welcome to the demo page build with <br /> react router </h1>
      <p></p>
     <Link to='/about'>
        <button className='inline-block mt-10 rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600'>
          Explore
        </button>
      </Link>


    </div>
  )
}

export default Home
