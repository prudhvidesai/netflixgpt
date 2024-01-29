import { useEffect } from "react"
import { API_OPTIONS } from "../components/constants"
import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/movieSlice"


const useTrailer = () => {
    const dispatch = useDispatch()
    const getTrailerApi = async()=>{
    
        const trailer = await fetch(`https://api.themoviedb.org/3/movie/572802/videos?language=en-US`,API_OPTIONS)
        const data = await trailer.json()
        //console.log(data)
        const filteredTrailer = data.results.filter(each=>each.type==="Trailer")
        //console.log(filteredTrailer);
        dispatch(addTrailer(filteredTrailer[0]))
    }
    useEffect(()=>{
     getTrailerApi()
    },[])
  
}

export default useTrailer

