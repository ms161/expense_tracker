import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ForgetPasword = () => {
    const [noti,setNoti]=useState(false)
  const emailRef = useRef();
  const handler = (e) => {
    setNoti(true)
    setTimeout(() => {
        setNoti(false)
    }, 4000);
    forget();
  };

  async function forget() {
    const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBgWxt6RxW_LbQKHbJk3IHn2MgI1yhAp6o",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: emailRef.current.value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }
  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-gray-900 via-gray-100 to-gray-900 h-screen ">
      <div className="mt-6 animate__animated animate__backInRight">
        <input
        required
          className="text-white text-xl p-5 rounded-xl w-96"
          ref={emailRef}
          type="email"
          placeholder="Email"
        ></input>
      </div>
      {/* <Link to={"/login"}> */}
        <div>
          <button
            onClick={handler}
            className="mt-2 bg-slate-600 p-5 font-serif  rounded-xl text-2xl text-white animate__animated animate__backInLeft w-96"
          >
            Send Link to your Email
          </button>
        </div>
      {/* </Link> */}
     {noti&& <div className=" animate__animated animate__backInLeft mt-5 text-2xl bg-blue-700 p-4 text-white font-serif rounded-xl  bg-gradient-to-r from-purple-700 to-pink-700">
        Check Your Email
      </div>}
    </div>
  );
};

export default ForgetPasword;
