import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList(props) {

    // let expenseContent = <p className="white">No Expenses Found</p>;

    // if (filteredExpenses.length > 0) {
    //     expenseContent = filteredExpenses.map((expense) => {
    //         return (
    //             <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
    //         )
    //     })
    // }

    if (props.items.length === 0) {
        return (
            <h2 className="expeses-list__fallback">No Expenses Found</h2>
        )
    }
    return (
        <ul className="expenses-list">
            {
                props.items.map(expense => {
                    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
                })
            }
        </ul>

    )
}
