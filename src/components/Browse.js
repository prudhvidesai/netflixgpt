import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import { useSelector } from "react-redux";
import VideoText from "./VideoText";
import MainCont from "./MainCont";
import CardsCont from "./CardsCont";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useNowplayingMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const gptbtnStat = useSelector((store)=>store.gpt.gptpagestat)
  //console.log(movies)
  if (!movies) return;
  //const{original_title,overview}=movies[0]

  return (
    <div>
      <Header />
    {gptbtnStat?<GptSearchPage/>:<> <MainCont/> 
       <div>
      <CardsCont/>
      </div></>}
     
      
      
    </div>
  );
};

export default Browse;
