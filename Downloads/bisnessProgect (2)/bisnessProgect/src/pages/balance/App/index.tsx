import { useAppSelector } from "../../../store";
import s from "./index.module.css";

function Balance() {
  const balance = useAppSelector((store) => store.income.balance);
  const sumExpenses = useAppSelector((store) => store.income.expensesTotalSum);
  const sumIncome = useAppSelector((store) => store.income.incomeTotalSum);

  return (
    <section className={s.section}>
      <article>
        Доходы за всё время <span>{sumIncome}</span>
      </article>
      <article>
        Расходы за всё время{" "}
        <span className={s.span__expenses}>{sumExpenses}</span>
      </article>
      <article className={s.item3}>
        {" "}
        Итог <span>{balance}</span>
      </article>
    </section>
  );
}

export default Balance;
