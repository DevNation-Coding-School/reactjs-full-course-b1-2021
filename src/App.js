import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    {id: 1, title: "DevNation - Payment", amount: 5000, date: new Date(2021, 6, 7)},
    {id: 1, title: "HBR Subscription", amount: 80, date: new Date(2021, 6, 7)},
    {id: 1, title: "Books from Amazon", amount: 120, date: new Date(2021, 6, 7)},
    {id: 1, title: "Tennis Balls", amount: 50, date: new Date(2021, 6, 7)},
  ]

  const addExpenseHandler = expense => {
    console.log("in app.js")
    console.log(expense)

    //append the expense data in array
  }

  return (
    
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses data={expenses} />
    </div>

    // React.createElement('div', {}, 
    //   React.createElement('h1', {}, "Hello World"), 
    //   React.createElement('h2', {}, "Welcome to React.js"),
    //   React.createElement(Expenses, {data: expenses})
    // )
    

    
  );
}

export default App;
