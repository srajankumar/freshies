import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Menuu</h1>

        <h3>Shopping Cart</h3>

        <div>
          <div>
            <ExpenseList />
          </div>
        </div>

        <div>
          <div>
            <CartValue />
          </div>
        </div>

        <h3>Thanks For Shopping??</h3>
      </div>
    </AppProvider>
  );
};
export default App;
