import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>
      <Link className='px-4 py-2 bg-red-500/100 hover:bg-red-500/70 transition rounded-full font-bold cursor-pointer' onClick={() => { scrollTo(0, 0) }} to='/'>User</Link>
    </div>
  )
}

export default AdminNavbar
