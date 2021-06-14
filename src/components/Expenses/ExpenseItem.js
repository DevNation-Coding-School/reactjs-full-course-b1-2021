import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    //useState
    // useState(props.title) //returns an array
    // 1. variable with the current state value
    // 2. function that we can call to assign a new value to our variable

    const [title, setTitle] = useState(props.title)

    const [array, setArray] = useState([])
    const [object, setObject] = useState({
        title: props.title,
        payment: 5000
    })
    const [number, setNumber] = useState()


    // let title = props.title;

    //write javascript code
    const titleChangeHandler = () => {
        console.log('Button Click')
        // setTitle('Updated')
        const newObject = {...object, title: "hello world"}
        setObject(newObject)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{object.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={titleChangeHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;