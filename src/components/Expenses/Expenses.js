import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

export default function Expenses(props) {

    const expenses = props.data

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(selectedYear)
    }

    return (
    // <div className="expenses">
    <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </Card>

    
       

        
    )
}