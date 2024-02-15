import { useEffect, useState } from "react";
import { ExpensesType, getExpensesData } from "../../../api/expensesApi";
import ExpensesDataBase from "../components/DataBase";
import ExpensesForm from "../components/Form";

function Expenses() {
  const [expensesList, setExpensesList] = useState<ExpensesType[]>([]);

  const getExpensesList = async () => {
    const data = await getExpensesData();
    setExpensesList(data);
  };

  useEffect(() => {
    getExpensesList();
  }, []);

  return (
    <>
      <ExpensesForm />
      <ExpensesDataBase date="Дата" sum="Сумма" source="Источник" />
      {expensesList.map((item) => (
        <ExpensesDataBase
          date={item.date}
          sum={item.sum}
          source={item.source}
        />
      ))}
    </>
  );
}

export default Expenses;
