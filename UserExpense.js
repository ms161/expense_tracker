import React, { useEffect, useState } from "react";
import UserExpenseList from "./UserExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Redux-store/AuthRedux";

const UserExpense = () => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("Food");
  const [fireData, setFireData] = useState([]);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [totalAmountState, setTotalAmountState] = useState(0);

  let totalAmount = 0;
  //redux central store
  //redux central store
  const storeExpensesAmount = useSelector((state) => state.auth.expensesAmount);
  const dispatch = useDispatch();
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const catHandler = (e) => {
    setCat(e.target.value);
    // console.log(e.target.value)
  };

  const userData = {
    amount: amount,
    desc: desc,
    cat: cat,
  };
  //adding items to UI and firebase
  const sendDataHandler = async (e) => {
    console.log(storeExpensesAmount, "this is amount in our redux");

    setFireData((prevdata) => {
      return [...prevdata, userData];
    });
    console.log();
    // setTotalAmountState(totalAmountState+parseInt(userData.amount))
    console.log(totalAmount);
    totalAmount = parseInt(userData.amount);
    console.log(totalAmount);
    dispatch(authActions.expensesAmount(totalAmount));
    // getData();
    postData();
  };

  const amountDeleteHandler = (e) => {
    dispatch(authActions.expensesAmount(parseInt(-e.amount)));
  };

  async function postData() {
    try {
      const resp = await fetch(
        "https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
    } catch (err) {}
  }
  useEffect(() => {
    getData();
  }, []);

  function onEdit(dataFromExpenseListForEdit) {
    console.log("btn clicked in userexpense");
    console.log(
      dataFromExpenseListForEdit,
      "this is props from userexpnese list"
    );
    setAmount(dataFromExpenseListForEdit.amount);
    setDesc(dataFromExpenseListForEdit.desc);
    setCat(dataFromExpenseListForEdit.cat);
    // setFireData(prevdata=>{
    //   return [...prevdata,userData]
    // })
  }

  async function getData() {
    try {
      console.log("sendGetData running");
      const resp = await fetch(
        "https://expensetracker-ff73b-default-rtdb.firebaseio.com/UserExpenses.json"
      );
      const data = await resp.json();
      // console.log(data)
      let arr = [];

      for (let key in data) {
        // console.log(data[key].userData.amount)
        // console.log(key)
        console.log(data[key].amount);
        arr.push({
          amount: data[key].amount,
          desc: data[key].desc,
          cat: data[key].cat,
          key: key,
        });
        totalAmount = totalAmount + parseInt(data[key].amount);
        console.log(arr);
      }
      setTotalAmountState(totalAmount);
      dispatch(authActions.expensesAmount(totalAmount));
      // console.log(arr)
      // setFireData([...arr]);
      setFireData(arr);
      console.log(fireData);
    } catch (err) {
      console.log(err);
    }
  }
  console.log("2222222");
  console.log(fireData);
  fireData.map((ele) => {
    console.log(ele);
  });
  console.log(fireData);

  const editKey = (key) => {
    console.log(fireData);
    const editedData = fireData.filter((ele) => {
      console.log(key, ele.key);
      if (ele.key !== key) {
        return ele;
      }
    });
    console.log(editedData);
    setFireData([...editedData, userData]);
    console.log(fireData);
  };
  const data=fireData
  let a1=document.getElementById('download')
  
  const convertToCSV = (data) => {
    const headers = ["Amount", "Description", "Category"];
    const rows = data.map((expense) => [
      expense.amount,
      expense.desc,
      expense.cat,
    ]);
    const csvData = [headers, ...rows].map((row) => row.join(",")).join("\n");
    return csvData;
  };
  const blob2=new Blob([convertToCSV(data)])
  a1.href=URL.createObjectURL(blob2)

  return (
    <div className="flex flex-col gap-4 p-4 border border-black h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black items-center ">
        <a id='download' download={'myExpenses.csv'} className="fixed left-5 underline italic font-bold text-xl text-white cursor-pointer">Download Your Expenses</a>
      <div className="flex ">
        <div className="flex flex-col gap-5 ">
          <div>
            <input
              value={amount}
              onChange={amountHandler}
              className="p-4 text-white text-center w-96 rounded-xl"
              type="amount"
              placeholder="Amount"
            />
          </div>
          <div>
            <input
              value={desc}
              onChange={descHandler}
              className="p-4 text-white w-96 text-center rounded-xl "
              type="text"
              placeholder="Description "
            />
          </div>
          <select
            onChange={catHandler}
            className="p-4 text-2xl  text-white w-96 rounded-xl text-center"
            name=""
            id=""
          >
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="salary">Salary</option>
          </select>
          <div>
            <button
              onClick={sendDataHandler}
              className=" border p-4 bg-green-700 w-96 hover:scale-110 hover:bg-blue-700 text-white font-serif font-bold rounded-xl"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
   
   
        <div className="fixed right-20 top-2"> <div className="bg-gradient-to-b bg-black p-2 rounded-xl text-2xl text-white">
        Total Amount:{storeExpensesAmount}
      </div>
      {storeExpensesAmount >= 10000 && (
        <button className="mt-4 bg-gradient-to-b  from-blue-500 via-purple-500 to-pink-500 animate-pulse p-5 text-white rounded-xl">
          Activate Premium Membership
        </button>
      )}</div>
      {fireData.map((ele) => (
        <UserExpenseList
          currentData={userData}
          desc={ele.desc}
          amount={ele.amount}
          cat={ele.cat}
          key2={ele.key}
          onEditP={onEdit}
          onEditKey={editKey}
          sendGetData={getData}
          deleteAmount={amountDeleteHandler}
        />
      ))}
     
    </div>
  );
};

export default UserExpense;
