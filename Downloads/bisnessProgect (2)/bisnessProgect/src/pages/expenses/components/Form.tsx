import { doPostExpenses } from "../../../api/expensesApi";
import { useAppDispatch } from "../../../store";
import { setExpensesSum } from "../../../store/income/incomeSlice";
import s from "./ExpForm.module.css";
import { useState } from "react";
function ExpensesForm() {
  const [sum, setSum] = useState("");
  const [source, setSource] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    doPostExpenses(sum, source);
    dispatch(setExpensesSum(sum));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Источник"
      />
      <input
        type="text"
        value={sum}
        onChange={(e) => setSum(e.target.value)}
        placeholder="Сумма"
      />
      <button type="submit" className={s.inc__button}>
        Создать
      </button>
    </form>
  );
}
export default ExpensesForm;
