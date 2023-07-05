import { useContext, useState } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthenticationCtx from "./Components/Authentication/Authentication";
import HomePage from "./Components/HomePage/HomePage";
import { useEffect } from "react";
import UserProfile from "./Components/UserProfile/UserProfile";
import ForgetPasword from "./Components/LoginPage/ForgetPasword";

function App() {
  const ctx = useContext(AuthenticationCtx);
  const navigate = useNavigate();

  // console.log(ctx.isLoggedIn);
  console.log('app running')
 
  useEffect(() => {
    console.log('useeffect running')
    if (ctx.isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [ctx.isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route index element={<SignUpPage />}></Route>

 { !ctx.isLoggedIn&&  <Route path="/login" element={<LoginPage></LoginPage>}></Route>}

  {ctx.isLoggedIn&&  <Route path="/home" element={<HomePage></HomePage>}></Route>}
        <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
        <Route path='/forget' element={<ForgetPasword></ForgetPasword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
