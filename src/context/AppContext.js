import React, { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
  let new_expenses = [];
  switch (action.type) {
    case "INCR_QUANTITY":
      return {
        ...state,
        expenses: state.expenses.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + action.payload.cost }
            : item
        ),
      };
    case "REDUCE_QUANTITY":
      return {
        ...state,
        expenses: state.expenses.map((item) => {
          if (item.name === action.payload.name && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    case "DELETE_ITEM":
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = 0;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [
    {
      id: "Strawberry Banana",
      name: "Strawberry Banana",
      quantity: 0,
      unitprice: 149,
      info: "Strawberries, bananas, and milk",
    },
    {
      id: "Mango Madness",
      name: "Mango Madness",
      quantity: 0,
      unitprice: 169,
      info: "Mango, banana, orange juice, and milk",
    },
    {
      id: "Cherry Almond",
      name: "Cherry Almond",
      quantity: 0,
      unitprice: 159,
      info: "Cherries, almond milk, banana, and coconut",
    },
    {
      id: "Island Breeze",
      name: "Island Breeze",
      quantity: 0,
      unitprice: 129,
      info: "Pineapple, banana, yogurt, coconut, orange juice, and honey",
    },
    {
      id: "Tropical Sunset",
      name: "Tropical Sunset",
      quantity: 0,
      unitprice: 149,
      info: "Pineapple, banana, mango, fresh orange juice, lime, and honey",
    },
    {
      id: "Berry Blast",
      name: "Berry Blast",
      quantity: 0,
      unitprice: 149,
      info: "Mixed berries, banana, almond milk, and honey",
    },
    {
      id: "Green Goddess",
      name: "Green Goddess",
      quantity: 0,
      unitprice: 169,
      info: "Spinach, banana, mango, pineapple, and coconut water",
    },
    {
      id: "Peach Perfection",
      name: "Peach Perfection",
      quantity: 0,
      unitprice: 149,
      info: "Peach, banana, almond milk, and honey",
    },
    {
      id: "Citrus Cooler",
      name: "Citrus Cooler",
      quantity: 0,
      unitprice: 149,
      info: "Orange, grapefruit, banana, and coconut water",
    },
    {
      id: "Sunrise Surprise",
      name: "Sunrise Surprise",
      quantity: 0,
      unitprice: 149,
      info: "Mango, banana, orange juice, and yogurt",
    },
  ],
  Currency: "₹",
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.unitprice * item.quantity);
  }, 0);
  state.CartValue = totalExpenses;

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        CartValue: state.CartValue,
        dispatch,
        Currency: state.Currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
