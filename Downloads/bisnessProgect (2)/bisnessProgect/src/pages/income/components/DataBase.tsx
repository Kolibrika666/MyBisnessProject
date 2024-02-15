import { IncomeType } from "../../../api/incomeApi";

function IncomeDataBase({ date, sum, source }: IncomeType) {
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
export default IncomeDataBase;
