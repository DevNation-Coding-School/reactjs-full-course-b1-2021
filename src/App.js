import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id: 'e1', title: "DevNation - Payment", amount: 5000, date: new Date(2021, 6, 7)},
  {id: 'e2', title: "HBR Subscription", amount: 80, date: new Date(2021, 6, 7)},
  {id: 'e3', title: "Books from Amazon", amount: 120, date: new Date(2021, 6, 7)},
  {id: 'e4', title: "Tennis Balls", amount: 50, date: new Date(2021, 6, 7)},
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    //New state depends on previous state
    setExpenses((expenses) => {
      return [expense, ...expenses]
    })
  }

  return (
    
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses data={expenses} />

    </div>

    
  );
}

export default App;
