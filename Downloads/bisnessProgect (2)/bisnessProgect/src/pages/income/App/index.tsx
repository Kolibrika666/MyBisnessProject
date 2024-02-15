import { useEffect } from "react";
import IncomeDataBase from "../components/DataBase";
import IncomeForm from "../components/Form";
import { getIncomeData } from "../../../api/incomeApi";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setIncomeList } from "../../../store/income/incomeSlice";

function Income() {
  // const [incomeList, setIncomeList] = useState<IncomeType[]>([]);
  const incomeList = useAppSelector((s) => s.income.income);
  const dispatch = useAppDispatch();
  const getIncomeList = async () => {
    const data = await getIncomeData();
    // setIncomeList(data);
    dispatch(setIncomeList(data));
  };

  useEffect(() => {
    getIncomeList();
  }, []);

  return (
    <>
      <IncomeForm />
      <IncomeDataBase date="Дата" sum="Сумма" source="Источник" />
      {incomeList.reverse().map((item) => (
        <IncomeDataBase date={item.date} sum={item.sum} source={item.source} />
      ))}
    </>
  );
}

export default Income;
