import s from "./IncomeForm.module.css";

import { doPostIncome } from "../../../api/incomeApi";
import { useState } from "react";
import { useAppDispatch } from "../../../store";
import { setIncomeSum } from "../../../store/income/incomeSlice";

function IncomeForm() {
  const [sum, setSum] = useState("");
  const [source, setSource] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    doPostIncome(sum, source);
    dispatch(setIncomeSum(sum));
    e.preventDefault();
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
export default IncomeForm;
