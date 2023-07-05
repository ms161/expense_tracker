import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const HomePage = () => {
  const token=localStorage.getItem('token')
  const [verificationError,setVerficicatoinError]=useState(null)
const verificationHandler=e=>{
  verificationApi()

}

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
    <div>
  <Header></Header>
    <div className='flex justify-around  items-center '>

    <div className='text-[2rem]'>Welcome TO expense tracker</div>
    <div>YOur Profile is incomplete <Link to='/userProfile'> <button className='border bg-green-500 p-1 rounded-lg'>Complete now</button> </Link></div>
    <button onClick={verificationHandler}>click here to verify ur Email</button>
    </div>
    </div>
  )
}

export default HomePage