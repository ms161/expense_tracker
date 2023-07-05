import React, { useState } from "react";


const UserExpense = () => {
const [amount,setAmount]=useState()
const [desc,setDesc]=useState()
const [cat,setCat]=useState()

const amountHandler=e=>{

}
const descHandler=e=>{

}
const catHandler=e=>{

}

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center ">
      <div>
        <input onChange={amountHandler} className="p-4" type="text" placeholder="Amount" />
      </div>
      <div>
        <input onChange={descHandler}  className="p-4" type="text" placeholder="Description " />
      </div>
      <select onChange={catHandler} className="p-4 text-2xl w-[11.4rem]" name="" id="">
        <option  value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="salary">Salary</option>
      </select>
      <div>
        <button className="text-black border p-4 bg-green-500 font-serif font-bold rounded-xl">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default UserExpense;
