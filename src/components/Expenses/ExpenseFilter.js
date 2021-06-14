import React from 'react';
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {

    const dropdownChangeHandler = (e) => {
        console.log('works')
        props.onChangeFilter(e.target.value)
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by Year</label>
                <select onChange={dropdownChangeHandler} value={props.selected}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}
