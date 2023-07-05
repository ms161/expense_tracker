import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ForgetPasword = () => {
    const emailRef=useRef()
    const handler=e=>{
        forget()

    }


    async function forget(){
        const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBgWxt6RxW_LbQKHbJk3IHn2MgI1yhAp6o',{
            method: "POST",
            body: JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:emailRef.current.value,

            }),
            headers: {
              "Content-type": "application/json",
            },
        })

        
    }
  return (
    <div>
        <div>
            <input className='text-white' ref={emailRef} type='email' placeholder='Email'></input>

        </div>
        <Link to={'/login'}>
        <div>
            <button onClick={handler}>Send

            </button>
        </div>
        </Link>
    </div>
  )
}

export default ForgetPasword