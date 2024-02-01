import React from 'react'
import { movieCardUrl } from './constants'
const MovieCard = ({image}) => {
  if(!image) return null
  return (
    <div className='m-2 md:w-48 w-32 mb-40'>
      
      <img src={movieCardUrl+image} alt='image' />
    </div>
  )
}

export default MovieCard
