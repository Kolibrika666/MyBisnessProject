import { ExpensesType } from "../../../api/expensesApi";

function ExpensesDataBase({ date, sum, source }: ExpensesType) {
  return (
    <>
      <div className="table">
        <p>{date}</p>
        <p>{sum}</p>
        <p>{source}</p>
      </div>
      <hr />
    </>
  );
}

export default ExpensesDataBase;
