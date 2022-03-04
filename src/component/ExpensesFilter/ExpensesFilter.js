import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  //这个方法调用的onChangeFilter, 实际上就是filterChangeHandler
  //这个value,会传给filterChangeHandler
function dropDownChangeHandler(event) {
  props.onChangeFilter(event.target.value);
}

    
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;