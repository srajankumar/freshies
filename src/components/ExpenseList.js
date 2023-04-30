import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table">
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            quantity={expense.quantity}
            unitprice={expense.unitprice}
            info={expense.info}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
