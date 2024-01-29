import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import { useSelector } from "react-redux";
import VideoText from "./VideoText";
import MainCont from "./MainCont";

const Browse = () => {
  useNowplayingMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  //console.log(movies)
  if (!movies) return;
  //const{original_title,overview}=movies[0]

  return (
    <div>
      <Header />

      <MainCont/>
    </div>
  );
};

export default Browse;
