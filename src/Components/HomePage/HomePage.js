import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const token=localStorage.getItem('token')
  const [notification,setNotification]=useState(null)
  const [verificationError,setVerficicatoinError]=useState(null)
  const idToken=useSelector(state=>state.auth.idToken)
const verificationHandler=e=>{
  verificationApi()
  setNotification('Verification Link Sent to your email')
  setTimeout(() => {
    setNotification(null)
  }, 7000);


}

console.log(idToken)
async function  verificationApi(){
try
{  const resp=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBgWxt6RxW_LbQKHbJk3IHn2MgI1yhAp6o',{
    method:"POST",
    body: JSON.stringify({
    
      requestType:"VERIFY_EMAIL",
      idToken:token,
    }),
    headers: {
      "Content-type": "application/json",
    },

  })

  const data=await resp.json()

  if(resp.ok){
    console.log(data)
  }}
  catch(error) {
    console.log(error)
    

  }


}


  return (
    <div className=' h-screen bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500'>
  <Header></Header>
    <div className='flex justify-around  flex-col gap-8 items-center '>

    <div className='text-[2rem] font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700  to-red-600'>Welcome TO expense tracker</div>
    <div className='text-white font-mono text-2xl font-bold'>Your Profile is Incomplete </div>
    <div><Link to='/userProfile'> <button className=' text-white font-bold  bg-slate-800  p-4  rounded-lg'>Complete now</button> </Link></div>
    <div>

    <button className='bg-blue-700 font-serif p-4 rounded-xl text-white' onClick={verificationHandler}>Click here to verify ur Email</button>
    </div>
    {notification&& <p className='bg-blue-700 animate__animated animate__backInLeft  text-white font-serif p-4 mt-[3rem]'>{notification}</p>}
    
    </div>
    </div>
  )
}

export default HomePage