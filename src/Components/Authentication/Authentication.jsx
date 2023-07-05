import React, { useState } from "react";

const AuthenticationCtx = React.createContext({
  isLoggedIn: "",
  onLogin:()=>{}
});

export const AuthenticationProvider = (props) => {
    localStorage.getItem('token')
    const [token,setToken]=useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(token);

  const loginHandler = (token1) => {
    setIsLoggedIn(true);
setToken(token1)

  };
localStorage.setItem('token',token)
  const ctxValue = {
    isLoggedIn: isLoggedIn,
    onLogin: loginHandler,
  };



  return (
    <AuthenticationCtx.Provider value={ctxValue}>
      {props.children}
    </AuthenticationCtx.Provider>
  );
};

export default AuthenticationCtx;
