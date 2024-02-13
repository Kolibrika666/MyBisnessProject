
// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
// import Balance from './pages/balance/App'
// import Expenses from './pages/expenses/App'
// import Income from './pages/income/App'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    </>
  )
}

export default App
