import { NavLink, Outlet } from "react-router-dom";
import s from "./Header.module.css";
import { useAppSelector } from "../../store";

function Layout() {
  const balance = useAppSelector((store) => store.income.balance);
  return (
    <>
      <header className={s.header}>
        <NavLink
          className={({ isActive }) => (isActive ? s.yellow : "")}
          to="/balance"
        >
          {" "}
          Баланс - <span>{balance}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.yellow : "")}
          to="/income"
        >
          Доходы
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.yellow : "")}
          to="/expenses"
        >
          Расходы
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
