import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr className="tablehead">
          <th />
          <th />
          <th />
          <th />
          <th />
          {/* <th scope="col">Items</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Add</th>
          <th scope="col">Sub</th>
          <th scope="col">Delete</th>
          <th scope="col">Items Price</th> */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            quantity={expense.quantity}
            unitprice={expense.unitprice}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
