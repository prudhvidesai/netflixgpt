import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMoies from '../hooks/useTopRatedMoies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const CardsCont = () => {
    usePopularMovies()
    useTopRatedMoies()
    useUpcomingMovies()
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    
    const pmovies = useSelector(store=>store.movies.popularMovies)
   
    const topmovies = useSelector(store=>store.movies.topMovies)
    //console.log(topmovies); 
    const upmovies = useSelector(store=>store.movies.upcomingMovies)
    //console.log(upmovies);
    if(!topmovies) return
    if(!pmovies) return
    if(!topmovies) return
    if(!upmovies) return
    //console.log(topmovies);
  return (
    <div className='bg-black mt-[60px] md:mt-0'>
      <MovieList title={"Now Playing"} list={movies}/>
      <MovieList title={"Popular"} list={pmovies}/>
      <MovieList title={"Top Rated Movies"} list={topmovies}/>
      <MovieList title={"Up Coming Movies"} list={upmovies}/>
      

    </div>
  )
}

export default CardsCont
