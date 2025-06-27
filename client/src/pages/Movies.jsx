import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
import { useAppContext } from '../context/AppContext'

const  Movies = () => {

  const { shows } = useAppContext()

  return shows.length > 0 ? (
    <div className='relative my-40 mb-60 px-5 md:px-10 lg:px-15 xl:px-30 overflow-hidden min-h-[80vh]'>

      <BlurCircle top='150px' left='-100px'/>
      <BlurCircle bottom='250px' right='100px'/>

      <h1 className='text-lg font-medium my-4 text-gray-300'>Now Showing</h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {shows.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No movies available</h1>
    </div>
  )
}

export default Movies
