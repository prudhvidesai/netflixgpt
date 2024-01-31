import React from 'react'
import { API_OPTIONS } from '../components/constants'
import { useDispatch } from 'react-redux'
import { addTopMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useTopRatedMoies = () => {

    const dispatch=useDispatch()
    const topRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        //console.log(json);
        dispatch(addTopMovies(json.results))

    }
    useEffect(()=>{
        topRatedMovies()
     },[])
  
}


export default useTopRatedMoies
