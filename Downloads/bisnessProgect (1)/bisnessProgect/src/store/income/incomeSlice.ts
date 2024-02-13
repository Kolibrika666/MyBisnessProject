import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IncomeType } from "../../api/swapi";

type initialStateType = {
  
  incomeList: IncomeType[],
  incomeSum: string,
  incomeSetSum: string[],
  incomeSource: string,
}
const initialState: initialStateType = {
incomeList: [],
incomeSum: "",
incomeSetSum: [],
incomeSource: "",
}
  
  const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {

   setIncomeList (state, action : PayloadAction<IncomeType>){
      state.incomeList.push(action.payload)
    },
   incomeSum (state, action : PayloadAction<string>){
    state.incomeSum = action.payload
    state.incomeSetSum.push(action.payload)
       },
    incomeSource(state, action : PayloadAction<string>) {
        state.incomeSource = action.payload
  }
}
})

  export const {setIncomeList, incomeSum, incomeSource} = incomeSlice.actions
  
  export default incomeSlice.reducer