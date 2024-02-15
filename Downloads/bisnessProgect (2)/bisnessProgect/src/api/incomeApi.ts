export type IncomeType = {
  id?: string;
  date: string;
  sum: string;
  source: string;
};

export const doPostIncome = async (sum: string, source: string) => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/income.json",
    {
      method: "POST",
      body: JSON.stringify({
        date: new Date().toLocaleDateString(),
        sum,
        source, //target
      }),
    }
  );
  if (response.status === 200) return "success";
  throw new Error("fetch error");
};

export const getIncomeData = async () => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/income.json"
  );

  if (response.status !== 200) throw new Error("fetch error");
  const data = await response.json(); //type
  const correctData: IncomeType[] = [];
  for (const item in data) {
    correctData.push({
      id: item,
      ...data[item],
    });
  }
  return correctData;
};
