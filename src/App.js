import { useContext } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthenticationCtx from "./Components/Authentication/Authentication";
import HomePage from "./Components/HomePage/HomePage";
import { useEffect } from "react";

function App() {
  const ctx = useContext(AuthenticationCtx);
  const navigate = useNavigate();
  console.log(ctx.isLoggedIn);
 
  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/home");
    } else {
      // navigate("/login");
    }
  }, [ctx.isLoggedIn, navigate]);

  return (
    <div>
      <Routes>
        <Route index element={<SignUpPage />}></Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
