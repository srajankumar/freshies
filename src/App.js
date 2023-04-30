import React from "react";
import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <AppProvider>
      <div id="mainbody">
        <h1>Freshies</h1>
        <h6>Smoothies fresher than ever</h6>
        <div>
          <div>
            <ExpenseList />
          </div>
        </div>
        <div>
          <h3>Selected Items</h3>
          <div>
            <CartValue />
          </div>
        </div>
        <h6 className="footer">Bon Appetit!</h6>
        <div className="footer2">
          <a
            href="https://github.com/srajankumar/freshies-menu"
            target="_blank"
          >
            <h6>source_code</h6>
          </a>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
