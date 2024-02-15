import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  incomeSum: string[];
  incomeTotalSum: string;
  expensesSum: string[];
  expensesTotalSum: string;
  balance: number;
};
const initialState: initialStateType = {
  incomeSum: [],
  incomeTotalSum: "",
  expensesSum: [],
  expensesTotalSum: "",
  balance: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncomeSum(state, action: PayloadAction<string>) {
      state.incomeSum.push(action.payload);
      state.incomeTotalSum = state.incomeSum.reduce((a, b) =>
        String(Number(a) + Number(b))
      );
      state.balance += Number(state.incomeTotalSum);
    },
    setExpensesSum(state, action: PayloadAction<string>) {
      state.expensesSum.push(action.payload);
      state.expensesTotalSum = state.expensesSum.reduce((a, b) =>
        String(Number(a) + Number(b))
      );
      state.balance -= Number(state.expensesTotalSum);
    },
  },
});

export const { setIncomeSum, setExpensesSum } = incomeSlice.actions;

export default incomeSlice.reducer;
