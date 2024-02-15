export type ExpensesType = {
  id?: string;
  date: string;
  sum: string;
  source: string;
};

export const doPostExpenses = async (sum: string, source: string) => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
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

export const getExpensesData = async () => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/expenses.json"
  );

  if (response.status !== 200) throw new Error("fetch error");
  const data = await response.json();
  const correctData = [];
  for (const item in data) {
    correctData.push({
      id: item,
      ...data[item],
    });
  }
  return correctData;
};
