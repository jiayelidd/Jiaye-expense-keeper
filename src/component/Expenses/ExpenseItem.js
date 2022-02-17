//a component in react is just a JS function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//{} 用来指定react 里面想要import 的东西
import React, { useState } from "react";

function ExpenseItem(props) {
    //there will only be one parameter for each component
    //all props are accessed through this component

    const [title, setTitle] = useState(props.title); //usestate is a hook, hooks always start with use, can only be called in the component fuction.
    //It is a function that allows us to define values as state where changes to these values should reflect the component being called again.
    //when the setTitle is called value will be updated, the component function will be called again
    /*
      useState会接受一个想改变变量
      然后会创建一个变量，这个变量的初始值就是传进去的parameter
      而且会创建一个方法，这个方法用来set之前传进来的变量
      这两个值可以用一个array来承接， 第一个是变量，第二个是set 方法

      const [title, setTitle] = useState(props.title);
      这种特殊array 是 array destructuring

    */

    function clickHandler() {
      setTitle('Updated!');
      //setTitle
      console.log(title);
    }
    //这里function keyword 都可以用
    // const clickHandler = () => {
    //   console.log('clicked!');
    // };

    

    
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card>
  );
}

export default ExpenseItem;
