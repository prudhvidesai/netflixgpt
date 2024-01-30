import { useEffect } from 'react'
import { API_OPTIONS } from '../components/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getupmovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTIONS)
        const json = await data.json()
        console.log(json);
        dispatch(addUpcomingMovies(json.results))
    }
 useEffect(()=>{
    getupmovies()
 },[])
  
}

export default useUpcomingMovies
