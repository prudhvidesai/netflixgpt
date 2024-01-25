import { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignin,setisSignin]=useState(true)

  const toggleSignup = ()=>{

    setisSignin(!isSignin)

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg'
      alt='img' className='bg-opacity-100'/>
      
      </div>
      
      <form className='absolute text-white rounded-lg p-10 bg-black bg-opacity-80 w-[300px] my-40 mx-auto left-0 right-0 flex flex-col justify-center align-middle'>
        <h1 className='font-bold text-2xl m-2'>{isSignin?'Sign In':'Sign Up'}</h1>
        {!isSignin && <input type='text' placeholder='First Name' className='py-0.9  px-2 m-2 mb-3 outline-none bg-gray-600'/>}
        <input type='text' placeholder='Email' className='py-0.9 px-2 m-2 mb-3 my-2outline-none bg-gray-600 outline-none'/>
        <input type="password" placeholder='Password' className='py-0.9 px-2 m-2 mb-3 outline-none bg-gray-600'/>
        <button className='rounded-lg w-[205px] p-2 py-1 m-2 mt-4 mb-3 bg-red-600 text-white'>{isSignin?'Sign In':'Sign Up'}</button>
        <p className='p-3 text-sm cursor-pointer' onClick={toggleSignup}>{isSignin?'New to NetFlix? Sign up Now':'Already User Sign In Now'}</p>
      </form>
      
      
     
    </div>
  )
}

export default Login
