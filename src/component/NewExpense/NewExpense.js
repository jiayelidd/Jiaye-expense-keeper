import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from 'react';

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function stopEditingHandler() {
        setIsEditing(false);
    }
    function startEditingHandler() {
        setIsEditing(true);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;