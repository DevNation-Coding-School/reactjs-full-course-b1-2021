import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

import styled from 'styled-components';
import styles from './CourseInput.module.css';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red' : 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : "#ccc"};
  background: ${props => props.invalid ? "#ffd7d7" : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;

const ButtonTwo = styled.button`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;

  &:hover {
    color: black;
    background-color: white
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    // if input.length > 0, input = valid
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // 1. Don't do anything on submit if entered value is empty
    if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : '#ccc', backgroundColor: !isValid ? 'pink' : 'transparent'}}
        type="text" onChange={goalInputChangeHandler} />
      </div> */}


      {/* Dynamic Classname */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}


      {/* <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}

      {/* dynamic CSS with modules */}
      <div className={`${styles['form-control']} ${isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      {/* <ButtonTwo type="submit">Button Two</ButtonTwo> */}
    </form>
  );
};

export default CourseInput;