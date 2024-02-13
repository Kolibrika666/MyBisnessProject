import { useAppDispatch, useAppSelector } from "../store";
import { setIncomeList } from "../store/income/incomeSlice";

export type IncomeType = {
    date: string;
    sum: string;
    source: string;
}

// const getFilmsList = useCallback(async () => {
//   const data = await getSWFilms()
//   dispatch(setFilmsList(data))
// }, [dispatch])

export const doPostIncome = () => {
  const incomeSum = useAppSelector(store => store.income.incomeSum)
  const incomeSource= useAppSelector(store => store.income.incomeSource)

  const dispatch = useAppDispatch()

  fetch(
    "https://income-1739b-default-rtdb.europe-west1.firebasedatabase.app/income.json",
    {
      method: "INCOME_POST",
      body: JSON.stringify({
          date: new Date().toDateString(),
          sume: incomeSum,
          source: incomeSource,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    getIncomeList();
  });
};

export const getIncomeList() = () => {
  fetch(
    "https://income-1739b-default-rtdb.europe-west1.firebasedatabase.app/income.json"
  )
    .then((res) => res.json())
    .then((data) => {
      // const rezult = [];
      for (const key in data) {
        (setIncomeList).push({
          id: key,
          date:  data[key].date,
          sume:  data[key].sum,
          source: data[key].source,
        });
      }

      incomeList(rezult);
    });
};