import React, { useEffect, useState } from "react";


const UserExpense = () => {
const [amount,setAmount]=useState()
const [desc,setDesc]=useState()
const [cat,setCat]=useState('Food')
const [fireData,setFireData]=useState([])

const amountHandler=e=>{
  setAmount(e.target.value)

}
const descHandler=e=>{
  setDesc(e.target.value)

}
const catHandler=e=>{
setCat(e.target.value)
// console.log(e.target.value)

}
const userData={
  amount:amount,
  desc:desc,
  cat:cat,
}
const sendDataHandler=e=>{
  postData()
}



async function postData(){
  const resp=await fetch('https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses.json',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userData}),
  })

}
useEffect(()=>{

  getData()

},[])


async function getData(){
  const resp=await fetch('https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses.json')
  const data=await resp.json()
  // console.log(data)
  let arr=[]
  for(let key in data){
    // console.log(data[key].userData.amount) 
    arr.push({
       amount:data[key].userData.amount,
       desc:data[key].userData.desc,
       cat:data[key].userData.cat,
    })

  }
  setFireData(arr)
console.log(arr)

}
console.log('2222222')
console.log(fireData)
const content= fireData.map((ele)=> {
  console.log(fireData)
  return  <div className="flex gap-10 bg-red-500 p-5 text-white">
     <div>{ele.amount}</div>
     <div>{ele.desc}</div>
     <div>{ele.cat}</div>

   </div>
})

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center ">
      <div>
        <input onChange={amountHandler} className="p-4 text-white" type="text" placeholder="Amount" />
      </div>
      <div>
        <input onChange={descHandler}  className="p-4 text-white" type="text" placeholder="Description " />
      </div>
      <select onChange={catHandler} className="p-4 text-2xl w-[11.4rem]" name="" id="">
        <option  value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="salary">Salary</option>
      </select>
      <div>
        <button onClick={sendDataHandler} className="text-black border p-4 bg-green-500 font-serif font-bold rounded-xl">
          Add Expense
        </button>
      </div>
     {content}
    </div>
  );
};

export default UserExpense;
