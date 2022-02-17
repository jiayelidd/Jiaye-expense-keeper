import React, { useState } from 'react';
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    //nothing is entered therefore useState('')

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');
    //第一种方法，分开好几个state

    //第二种方法，一个state, 但是这个state包含的是一个object, 这个object里面包含的property是所有input

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    function titleChangeHandler(event) {

        //第二种方法调用setUserInput的时候要保留其他所有的property, 只更改那这个listner更改的property
        //最好用第一种
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        //这种语法，保证其他所有的都和userInput对象一样，只有enteredTitle改变

        setEnteredTitle(event.target.value);
        //enteredTitle captures the event value
    }

    function amountChangeHandler(event) {
        
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // });

        setEnteredAmount(event.target.value);
        //enteredTitle captures the event value
    }

    function dateChangeHandler(event) {

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value);
        //enteredTitle captures the event value
    }

    function submitHandler(event) {
        event.preventDefault();
        //prevent page reload

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);

        //this can make sure data from a child can be passed up to parent
        props.onSaveExpenseData(expenseData); //execute the method passed dowm using props
        setEnteredTitle(''); //clear
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          {/*React will make sure every event listner such onChange will provide a variable describe the event*/}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="date" value={enteredDate}min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
          {/*the value here shows the input bar will display the state value, once it is cleared the input will be cleared*/}
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default ExpenseForm;
