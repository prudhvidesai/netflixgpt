import React from 'react'


const VideoText = (props) => {
    const{title,desc}=props
  return (   
    
    <div className='pt-[400px] py-2 px-24 absolute text-white bg-gradient-to-r from-black-300 aspect-video w-30' >
    <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='w-[700px]'>{desc}</p>
      <div className='mt-3'>
        <button className='bg-white text-black rounded-lg px-[40px] py-1.5 mr-2 hover:opacity-90'>Play</button>
        <button className='bg-white text-black rounded-lg px-[20px] py-1.5 opacity-80'>More Info</button>
        
      </div>
      
      
    </div>
    
     
      
   
  )
}

export default VideoText
