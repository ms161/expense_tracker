import { useContext, useState } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AuthenticationCtx from "./Components/Authentication/Authentication";
import HomePage from "./Components/HomePage/HomePage";
import { useEffect } from "react";
import UserProfile from "./Components/UserProfile/UserProfile";
import ForgetPasword from "./Components/LoginPage/ForgetPasword";
import UserExpense from "./Components/UserExpense/UserExpense";
import { useSelector } from "react-redux";

function App() {
  const ctx = useContext(AuthenticationCtx);
  const navigate = useNavigate();
  const location=useLocation()
  const isAuth=useSelector(state=>state.auth.isAuthenticated)
console.log(location)
// if(ctx.isLoggedIn){
//   location.pathname='/home'
// }
// else{
//   location.pathname='/login'
// } 
 
  console.log(location)
  console.log('app running')
 
  // useEffect(() => {
  //   console.log('useeffect running')
  //   console.log(ctx.isLoggedIn);
  //   if (ctx.isLoggedIn) {
  //     navigate(`/home`);
  //   } else {
  //     navigate("/login");
  //   }
  // }, [ctx.isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route index element={<SignUpPage />}></Route>
<Route path="/login" element={<LoginPage></LoginPage>}></Route>
    <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
        <Route path='/forget' element={<ForgetPasword></ForgetPasword>}></Route>
        <Route path='/userExpense' element={<UserExpense></UserExpense>}></Route>
      </Routes>
    </div>
  );
}

export default App;
