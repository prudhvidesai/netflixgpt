import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MovieList from './MovieList'
import { removeMovies } from '../utils/gptSlice'

const GptSuggestions = () => {
   const dispatch = useDispatch()
   //const show = useSelector(store=>store.gpt.gptpagestat)
   const gpttitles = useSelector(store=>store.gpt.gptMovies)
   const gptmoviesList= useSelector(store=>store.gpt.gptMovieResults)  
   if(!gptmoviesList) return   
   
   
  return (
    <div className='bg-black opacity-80 absolute mt-[500px] p-4  pt-60 ml-20 mr-4 w-[90%] overflow-x-scroll'>
      {gpttitles.map((item,ind)=><MovieList key={item} title={item} list={gptmoviesList[ind]}/>)}
    </div>
  )
}

export default GptSuggestions
