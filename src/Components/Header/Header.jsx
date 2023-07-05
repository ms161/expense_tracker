import React, { useContext } from 'react'
import AuthenticationCtx from '../Authentication/Authentication'
import { Link } from 'react-router-dom'

const Header = () => {
    const ctx=useContext(AuthenticationCtx)
    
    const logoutHandler=e=>{
     ctx.onLogOut()

    }
  return (
    <div>

      <Link to={'/login'}>  <button onClick={logoutHandler} className='text-2xl font-bold bg-red-600 p-2 b rounded-xl'> LogOut</button></Link>
    </div>
  )
}

export default Header