import React from 'react'
import { useSelector } from "react-redux";
import { languageConfig } from "../utils/languageConfig";
import { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "./constants";


const GptSearchBar = () => {
  
    const dispatch = useDispatch();
    const searchInput = useRef();
    const lang = useSelector((store) => store.language.lang);
    //const gptSliceMovies = useSelector(store=>store.gpt.gptMovies)
    if (!lang) return;
    //if(!gptSliceMovies) return;
    console.log(lang);
  
    const getTmdbMovies = async (each) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+each+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json()
      return json.results
    };
  
    const handleGptSearchBtn = async () => {
      //console.log(searchInput.current.value);
      const gptQuery =
        "Act as a movie recomend system and suggest movies for the query:" +
        searchInput.current.value +
        ". only give me name of 5 movies, separated like the example given ahead Example: Sholay, Gadar, Golmaal, Fanaa, Don ";
      const gptresults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      //console.log(gptresults.choices);
      const gptMoviesList = gptresults.choices[0].message.content.split(",");
      const promiseArr = gptMoviesList.map(each=>getTmdbMovies(each))
      const tmdbMovieResults = await Promise.all(promiseArr)
      console.log((tmdbMovieResults));
      dispatch(addGptMovies({movieNames:gptMoviesList,movieResults:tmdbMovieResults}))
    };
  
  
  
    return (
    <div className="bg-black flex flex-col justify-center absolute p-5 mt-[250px] h-[100px] w-[800px] z-20 ml-[300px]">
    <form
      className="flex justify-between px-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchInput}
        className="px-2 ml-3 h-[30px] w-[550px] "
        type="text"
        placeholder={languageConfig[lang].placeholderTxt}
      />
      <button
        className="bg-red-500 ml-[20px] rounded-lg px-2 h-[30px] w-[90px] text-white"
        onClick={handleGptSearchBtn}
      >
        {languageConfig[lang].btnTxt}
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar
