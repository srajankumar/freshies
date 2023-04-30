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
      {filteredExpenses.map((item, index) => (
        <div>
          <div
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div class="d-flex w-100px justify-content-between">
              <h4 class="mb-1">
                {item.quantity} {item.name}
              </h4>
              <small>
                {Currency}
                {item.unitprice * item.quantity}
              </small>
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        Total: {Currency}
        {totalExpenses}
      </div>
    </div>
  );
};

export default CartValue;
