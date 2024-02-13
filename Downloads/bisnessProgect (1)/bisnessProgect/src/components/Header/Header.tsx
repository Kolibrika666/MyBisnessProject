import {Route, Routes } from "react-router-dom";

import Balance from "../../pages/balance/App";
import Income from "../../pages/income/App";
import Expenses from "../../pages/expenses/App";
import Layout from "./Layout";

function Header() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        <Route path ='balance' element = {<Balance/>} />
      <Route path ='income' element = {<Income/>} />
      <Route path ='expenses' element = {<Expenses/>} />
        </Route>
      </Routes>
      </>
  )
}

export default Header;