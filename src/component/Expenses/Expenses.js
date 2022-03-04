import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  console.log(filteredExpenses);





  return (
    <Card className="expenses">
      {/*selected act as a 2 way binding, it will firstly set the default year to 2020*/}
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />

      {/*onchangefilter is used to pass data up, from child, pass a function down to the child, and the child can call that function when pass data */}
      {/*expenseItem被用了几次， expenseItem component 方法就会调用几次*/}
    </Card>
  );
}

export default Expenses;
