import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
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
        expenses: state.expenses.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
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

// 1. Sets the initial state when the app loads
const initialState = {
  expenses: [
    { id: "Shirt", name: "Shirt", quantity: 0, unitprice: 500 },
    { id: "Jeans", name: "Jeans", quantity: 0, unitprice: 300 },
    { id: "Dress", name: "Dress", quantity: 0, unitprice: 400 },
    { id: "Dinner set", name: "Dinner set", quantity: 0, unitprice: 600 },
    { id: "Bags", name: "Bags", quantity: 0, unitprice: 200 },
  ],
  Currency: "₹",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
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
