import React, { useState } from "react";
import "animate.css";

const UserExpenseList = (props) => {
  const [showEditBtn, setShowEditBtn] = useState(false);

  async function deleteApiData(e) {
    e.target.parentElement.remove();
    console.log(props);
    await fetch(`https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses/${props.key2}.json`,
      {
        method: "DELETE",
      }


    );
    props.deleteAmount(props)
  }

  const showEditHandler = (e) => {
    console.log('list btn clicked')
    props.onEditP(props)
    setShowEditBtn(true);
    
  };
  console.log(props.currentData);

  async function editApiHandler() {
    props.onEditKey(props.key2);
    try {   setShowEditBtn(false)
    
      // props.sendGetData()
      console.log("put api called ");
      const resp = await fetch(
        `https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses/${props.key2}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(props.currentData),
        }
      );
      setShowEditBtn(!showEditBtn);
      const data = await resp.json();
      console.log("edit clicked");
      console.log(data);
   
      props.onEditKey(props.key2);
    //  props.sendGetData()
    console.log(resp)
    } 
    catch (err) {}

  
  }
  console.log(props.amount, props.cat,props.desc, "these are porps");
  return (
    <div>
      <div className="flex justify-around w-[60rem] animate__animated animate__backInLeft border items-center border-black rounded-full bg-slate-700 p-5 text-white">
        <div className="  ">{props.desc}</div>
        <div className="">{props.cat}</div>
        <div  className="  ">{props.amount}</div>
        {/* <div>{props.key2}</div> */}

        <button className="bg-red-600 p-2 hover:bg-red-950  hover:scale-110 rounded-2xl pl-6 pr-6 font-serif font-bold border border-gray-700" onClick={deleteApiData}>Delete</button>
        <div>
          {showEditBtn ? (
            <button className="" onClick={editApiHandler}>Click here after editing</button>
          ) : (
            <button className="bg-blue-700 p-2 hover:scale-110 hover:bg-blue-900 rounded-2xl pl-6 pr-6 font-serif font-bold border border-gray-700" onClick={showEditHandler}> Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserExpenseList;
