import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
function ExpensesList(props) {

    if (props.items.length === 0){
      return <h2 className="expenses-list__fallback">No expenses found.</h2>
    } //alternative, no need to check it in the return, as you cannot use if in return, this is the better way

    return <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
}

export default ExpensesList;