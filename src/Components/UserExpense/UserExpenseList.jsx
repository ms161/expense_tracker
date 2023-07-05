import React, { useState } from "react";

const UserExpenseList = (props) => {
  const [showEditBtn, setShowEditBtn] = useState(false);

async function deleteApiData(e){
    e.target.parentElement.remove()
    console.log(props)
    await fetch(`https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses/${props.key2}.json`,{
        method: 'DELETE',
    })
}

  const showEditHandler = (e) => {
    setShowEditBtn(!showEditBtn);
  };
  console.log(props.currentData);

  async function editApiHandler() {
   try{ console.log("put api called ");
    const resp = await fetch(`https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses/${props.key2}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.currentData),
      }
    );
    console.log("edit clicked");
    setShowEditBtn(!showEditBtn);
    const data=await resp.json() 
    console.log(data)
    props.onEdit()
}
    catch(err){

    }
  }
  return (
    <div>
      <div className="flex gap-10 bg-red-500 p-5 text-white">
        <div>{props.desc}</div>
        <div>{props.amount}</div>
        <div>{props.cat}</div>
        <div>{props.key2}</div>

        <button onClick={deleteApiData}>delete</button>
        <div>
          {showEditBtn ? (
            <button onClick={editApiHandler}>Click here after editing</button>
          ) : (
            <button onClick={showEditHandler}> Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserExpenseList;
