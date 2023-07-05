import React, { useRef } from "react";

const UserProfile = () => {
const nameRef=useRef('')
const photoRef=useRef('')
const token=localStorage.getItem('token')

// const nameHandler=e=>{
//   nameRef.current=e.target.value 
//   console.log(nameRef)
  
// }
const photoUrlHandler=e=>{
 

}
const updateHandler=e=>{
  // console.log(nameRef.current.value,photoRef)
  // console.log(token,'this is token')
   updateProfile()
}

 async function updateProfile(){
   const resp=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBgWxt6RxW_LbQKHbJk3IHn2MgI1yhAp6o',{
    method:'POST',
    body: JSON.stringify({
      idToken:token,
      displayName: nameRef.current.value,
      photoUrl: photoRef.current.value,
      returnSecureToken: true,
    }),
    headers: {
      "Content-type": "application/json",
    },

   })
   const data=await resp.json()

   if(resp.ok){
    console.log(data)
   }

 }





  return (
    <div>
        <div className="flex  gap-6 border justify-around text-2xl ">

      <div className="">
        Winners never quite,Quitters never win.
      </div>
      <div className="italic bg-red-600 text-white p-4 rounded-xl ">
        Your profile is 60% completed. A complete profile has higher chances of
        landing a page<span>Complete now</span>
      </div>
        </div>
      <div className="border-b border-black text-2xl font-bold font-serif text-center  mt-10">Contact Details</div>

      <div>
        <div className="flex flex-col items-center justify-center mt-5 gap-5">

        <label htmlFor="name">Full Name:</label>
        <div><input ref={nameRef} className="bg-white border p-3 rounded-lg border-black " type="text" id="name" /></div>
        <label  htmlFor="photo">Profile Photo URL:</label>
        <div><input ref={photoRef} const={photoUrlHandler}  className="bg-white border p-3 rounded-lg border-black " type="text" id="photo" /></div>
        </div>
        <div className="text-center mt-5">

       <button onClick={updateHandler} className="bg-red-800 m-auto p-2 rounded-xl border  text-white">Update</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
