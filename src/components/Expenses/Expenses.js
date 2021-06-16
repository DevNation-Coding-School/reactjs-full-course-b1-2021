import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {

    const expenses = props.data

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    }))

    //Conditional Rendering
    // let expenseContent = <p className="white">No Expenses Found</p>;

    // if (filteredExpenses.length > 0) {
    //     expenseContent = filteredExpenses.map((expense) => {
    //         return (
    //             <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
    //         )
    //     })
    // }

    return (
    // <div className="expenses">
    <Card className="expenses">
        
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>

        {/* Chart */}
        <ExpensesChart expenses={filteredExpenses} />

        <ExpenseList items={filteredExpenses} />

        {/* {expenses.map((expense) => {
            return (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
            )
        })} */}

        {/* Filter */}
        {/* {filteredExpenses.map((expense) => {
            return (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
            )
        })} */}

        {/* Conditional Rendering */}
        {/* condition ? true: false */}

        {/* {filteredExpenses.length === 0 ? <p className="white">No Expenses Found</p> : (
            filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
                )
            })
        )} */}

        {/* {filteredExpenses.length === 0 && <p className="white">No Expenses Found</p>}

        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
                )
            })} */}

        {/* {expenseContent} */}

    </Card>

    
       

        
    )
}