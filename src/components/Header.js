import React from 'react'
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store=>store.user)
  //console.log(user);
  const navigate = useNavigate()
  const handleLogout=()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate('/browse')
        
      } else {
        dispatch(removeUser())
        navigate('/')
      }
      return ()=> unsubscribe()
    });
  
   },[])
    
  
  return (
    <div className='absolute w-screen px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-[180px]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo-img'/>
      {user && <div className='flex justify-between w-[150px] align-middle'>
        {user && <p className='text-red-500 font-bold mt-7'>{user.displayName}</p>}
        <button className='p-3 rounded-lg bg-red-500 text-white' onClick={handleLogout}>Logout</button>
      </div>}
    </div>
  )
}

export default Header
