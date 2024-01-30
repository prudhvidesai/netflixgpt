import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,list}) => {
    
  return (
    <div className='-mt-40 px-4'>
      <h1 className='text-white text-bold pl-2 text-l'>{title}</h1>
      <div className=' flex overflow-x-scroll'>        
        <div className='flex'>
           {list.map(each=><MovieCard key={each.id}  image={each.poster_path}/>)}
        </div>               
      </div>                  
    </div>
  )
}

export default MovieList
