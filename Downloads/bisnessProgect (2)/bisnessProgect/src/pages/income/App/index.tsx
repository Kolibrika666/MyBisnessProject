import { useEffect, useState } from "react";
import IncomeDataBase from "../components/DataBase";
import IncomeForm from "../components/Form";
import { IncomeType, getIncomeData } from "../../../api/incomeApi";

function Income() {
  const [incomeList, setIncomeList] = useState<IncomeType[]>([]);

  const getIncomeList = async () => {
    const data = await getIncomeData();
    setIncomeList(data);
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
