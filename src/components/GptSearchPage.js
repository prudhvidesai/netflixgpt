import React from 'react'
import { useSelector } from 'react-redux'
import { languageConfig } from '../utils/languageConfig'

const GptSearchPage = () => {
    const lang = useSelector(store=>store.language.lang)
    if(!lang) return
    console.log(lang);
  return (
    <>
    <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="img"
          className="bg-opacity-100"
        />     
    </div>
       <div className='bg-black flex flex-col justify-center absolute p-5 mt-[250px] h-[100px] w-[800px] z-20 ml-[300px]'>
       <form className='flex justify-between px-2'>
           <input className="px-2 ml-3 h-[30px] w-[550px] " type="text" placeholder={languageConfig[lang].placeholderTxt}/>
           <button className='bg-red-500 ml-[20px] rounded-lg px-2 h-[30px] w-[90px] text-white'>{languageConfig[lang].btnTxt}</button>
       </form>
       </div>
    </>
      
    
  )
}

export default GptSearchPage
