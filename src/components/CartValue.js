import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartValue = () => {
  const { expenses, Currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Cart Value: {Currency}
        {totalExpenses}
      </span>
    </div>
  );
};

export default CartValue;
