import s from './ExpForm.module.css'
function ExpensesForm() {
    return (
  
      <form onSubmit={()=> {}}>
          <input type="text"  onChange={()=> {}} placeholder="Цель расхода" />
          <input type="text"  onChange={()=> {}} placeholder="Сумма" />
          <button type="submit" className={s.exp__button}>Создать</button>
      </form>
    )
  }
  export default ExpensesForm;