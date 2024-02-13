import { useEffect} from "react";
import IncomeDataBase from "../components/DataBase";
import IncomeForm from "../components/Form";
import {getIncomeList } from "../../../api/swapi";
import { useAppSelector } from "../../../store";


function Income() {

  const incomeList = useAppSelector(store => store.incomeList.incomeList)

 useEffect(() => {
  getIncomeList()
}, [getIncomeList])

    return (
  <>
    <IncomeForm/>
    <IncomeDataBase  date = 'Дата' sum = "Сумма"  source = "Источник"/>
    {incomeList.map(item => (
       <IncomeDataBase date = {item.date} sum = {item.sum} source = {item.source}/>
      ))}
  </>
    )
  }
  
  export default Income;