import React from 'react'
import { movieCardUrl } from './constants'
const MovieCard = ({image}) => {
  return (
    <div className='m-2 w-48 mb-40'>
      
      <img src={movieCardUrl+image} alt='image' />
    </div>
  )
}

export default MovieCard
