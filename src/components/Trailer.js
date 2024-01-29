import useTrailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux'

const Trailer = () => {   

    useTrailer()
   
  const trail = useSelector(store=>store.movies.trailer)  
  if(!trail) return
  console.log(trail.key);
 
  return (
    <div>
      <iframe className='w-screen aspect-video' 
     
      src={"https://www.youtube.com/embed/"+trail.key + "?&autoplay=1&mute=1"}
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
        
      </iframe>
    </div>
  )
}

export default Trailer
