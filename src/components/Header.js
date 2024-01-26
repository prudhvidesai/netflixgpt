import React from 'react'
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store=>store.user)
  console.log(user);
  const navigate = useNavigate()
  const handleLogout=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div className='absolute w-screen px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-[180px]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo-img'/>
      {user && <div className='flex justify-between w-[150px] align-middle'>
        {user && <p className='text-green-800 font-bold mt-7'>{user.displayName}</p>}
        <button className='p-3 rounded-lg bg-red-500 text-white' onClick={handleLogout}>Logout</button>
      </div>}
    </div>
  )
}

export default Header
