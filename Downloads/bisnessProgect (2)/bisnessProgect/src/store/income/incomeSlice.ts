import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IncomeType } from "../../api/incomeApi";

type initialStateType = {
  incomeSum: string[];
  incomeTotalSum: string;
  expensesSum: string[];
  expensesTotalSum: string;
  balance: number;

  totalIncome: number;
  totalExpenses: number;
  income: IncomeType[];
  expenses: IncomeType[];
};
const initialState: initialStateType = {
  incomeSum: [],
  incomeTotalSum: "",
  expensesSum: [],
  expensesTotalSum: "",
  balance: 0,

  totalIncome: 0,
  totalExpenses: 0,
  income: [],
  expenses: [],
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

    setIncomeList(state, action: PayloadAction<IncomeType[]>) {
      //balance
      state.income = action.payload;
      state.totalIncome = state.income.reduce((acc, item) => acc + +item, 0);
      state.balance = state.totalIncome - state.totalExpenses;
    },
  },
});

export const { setIncomeSum, setExpensesSum, setIncomeList } =
  incomeSlice.actions;

export default incomeSlice.reducer;
