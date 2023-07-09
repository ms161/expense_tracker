import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'authentication',
    initialState:{isAuthenticated:false,idToken:null,expensesAmount:0},
    reducers:{
        login(state){
            state.isAuthenticated=true 
         },
         logout(state){
            state.isAuthenticated=false 
         },
         idToken(state,action){
            state.idToken=action.payload

         },
         expensesAmount(state,action){
            state.expensesAmount=state.expensesAmount+action.payload
            // state.expensesAmount=action.payload
         

         }
    }
})
export default authSlice.reducer
export const authActions=authSlice.actions 

