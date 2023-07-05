import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex justify-around  items-center '>

    <div className='text-[2rem]'>Welcome TO expense tracker</div>
    <div>YOur Profile is incomplete <Link to='/userProfile'> <button className='border bg-green-500 p-1 rounded-lg'>Complete now</button> </Link></div>
    </div>
  )
}

export default HomePage