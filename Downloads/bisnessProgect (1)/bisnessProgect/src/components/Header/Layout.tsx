import { Link, NavLink, Outlet } from "react-router-dom";
import s from "./Header.module.css"
import Balance from "../../pages/balance/App";

function Layout() {

    return (
      <>
      <header className = {s.header}>
          <Link index element = {<Balance/>}></Link>
          <NavLink className={({isActive}) => isActive ? s.yellow : ''}  to ="/balance">Баланс - <span>1100</span></NavLink>
          <NavLink className={({isActive}) => isActive ? s.yellow : ''}  to="/income">Доходы</NavLink>
          <NavLink className={({isActive}) => isActive ? s.yellow : ''}  to="/expenses">Расходы</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
        </>
    )
  }

  export default Layout;