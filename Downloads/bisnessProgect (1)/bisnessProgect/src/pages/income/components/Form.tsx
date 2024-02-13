import { useDispatch } from 'react-redux';
import s from './IncomeForm.module.css'
import { useAppDispatch, useAppSelector } from '../../../store';

function IncomeForm() {

  const incomeSum = useAppSelector(store => store.income.incomeSum)
  const incomeSource= useAppSelector(store => store.income.incomeSource)

  const dispatch = useAppDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

    return (
  
      <form  onSubmit={handleSubmit}>
          <input type="text"   value={incomeSource} onChange={(e) => dispatch(incomeSource(e.target.value))} placeholder="Источник" />
          <input type="text" value={incomeSum} onChange={(e) => dispatch(incomeSum(e.target.value))} placeholder="Сумма" />
          <button type="submit" className={s.inc__button }>Создать</button>
      </form>)
      }
  export default IncomeForm;