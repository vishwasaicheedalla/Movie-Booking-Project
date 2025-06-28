import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const { favoriteMovies } = useAppContext()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-3'>
      <Link to={'/'} className='max-md:flex-1'>
        <img src={assets.logo} alt="ShowTime Logo" className='w-36 h-auto' />
      </Link>
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/80 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300  ${isOpen ? 'max-md:w-full ease-in-out duration-300' : 'max-md:w-0 ease-in-out duration-300'}`}>
        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/'>Home</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/movies'>Movies</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/'>Theatres</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/'>Releases</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/favorite'>Favourites</Link>
      </div>

      <div className='flex items-center gap-8'>
        {user ? <Link className='px-4 py-2 bg-black/100 hover:bg-black/70 transition rounded-full font-bold cursor-pointer' onClick={() => { scrollTo(0, 0) }} to='/admin'>Admin</Link> : null}
        {
          !user ? (<button onClick={openSignIn} className='px-4 py-1 sm:px-5 sm:py-2 bg-red-500/100 hover:bg-red-500/70 transition rounded-full font-medium cursor-pointer'>Login</button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15} />} onClick={() => navigate('/mybookings')} />
              </UserButton.MenuItems>
            </UserButton>
          )
        }
      </div>
      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
    </div>
  )
}

export default Navbar