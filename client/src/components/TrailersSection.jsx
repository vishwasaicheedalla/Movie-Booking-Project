import React from 'react'
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailersSection = () => {

    const [currTrailer, setCurrTrailer] = React.useState(dummyTrailers[Math.floor(Math.random() * 4)]);

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

            <div className='relative mt-6'>
                <BlurCircle top='-100px' left='-100px' />
                <ReactPlayer url={currTrailer.videoUrl} controls={false} className="mx-auto max-w-full" width="960px" height="540px" />
            </div>

            <div className='groyp grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
                {dummyTrailers.map((trailer)=>(
                    <div className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer' onClick={()=> setCurrTrailer(trailer)}> 
                        <img src={trailer.image} alt="Trailer Image" className='rounded-lg w-full h-full object-cover brightness-75 hover:brightness-100 cursor-pointer'/>
                        <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailersSection