// import React, { useState } from "react";

// const AuthenticationCtx = React.createContext({
//   isLoggedIn: "",
//   onLogin: () => {},
// });

// export const AuthenticationProvider = (props) => {
  
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [isLoggedIn, setIsLoggedIn] = useState(token);

//   const loginHandler = (token1) => {
//     setIsLoggedIn(true);
//     setToken(token1);
    
//     localStorage.setItem("token", token1);
// };

// const logOutHandler=e=>{
//   setToken(null)
//   setIsLoggedIn(null)
//   localStorage.removeItem('token')
// }

//   const ctxValue = {
//     isLoggedIn: isLoggedIn,
//     onLogin: loginHandler,
//     onLogOut:logOutHandler
//   };



//   return (
//     <AuthenticationCtx.Provider value={ctxValue}>
//       {props.children}
//     </AuthenticationCtx.Provider>
//   );
// };

// export default AuthenticationCtx;
