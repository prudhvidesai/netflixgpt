import React from "react";
import VideoText from "./VideoText";
import Trailer from "./Trailer";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import { useSelector } from "react-redux";

const MainCont = () => {
  useNowplayingMovies()  
  const movie = useSelector(store=>store.movies.nowPlayingMovies)
  //console.log(movie);
  return (
    <div className="">
      {/* <VideoText title={movie[0].title} desc={movie[0].overview}/> */}
      <Trailer />
    </div>
  );
};

export default MainCont;
