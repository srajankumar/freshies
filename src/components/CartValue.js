import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartValue = () => {
  const { expenses, Currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  const filteredExpenses = expenses.filter((item) => item.quantity > 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                {Currency}
                {item.unitprice}
              </td>
              <td>
                {Currency}
                {item.unitprice * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="alert alert-primary">
        <span>
          Cart Value: {Currency}
          {totalExpenses}
        </span>
      </div>
    </div>
  );
};

export default CartValue;
