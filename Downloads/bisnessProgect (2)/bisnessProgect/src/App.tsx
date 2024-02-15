import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Balance from "./pages/balance/App";
import Layout from "./components/Header/Layout";
import Income from "./pages/income/App";
import Expenses from "./pages/expenses/App";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="balance" element={<Balance />} />
            <Route path="income" element={<Income />} />
            <Route path="expenses" element={<Expenses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
