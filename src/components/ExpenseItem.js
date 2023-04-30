import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import { FaTimesCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
  const { dispatch, Currency } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 1,
    };

    dispatch({
      type: "INCR_QUANTITY",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -1,
    };

    dispatch({
      type: "REDUCE_QUANTITY",
      payload: expense,
    });
  };

  return (
    <div className="mainn">
      <div
        id="element"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        <div class="d-flex w-100px justify-content-between">
          <h5 class="mb-1">{props.name}</h5>
          <small>
            {Currency}
            {parseInt(props.unitprice)}
          </small>
        </div>
        <p class="mb-1">{props.info}</p>
        <div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              className="btn"
              onClick={(event) => decreaseAllocation(props.name)}
            >
              -
            </button>

            <button className="btn">{props.quantity}</button>

            <button
              className="btn"
              onClick={(event) => increaseAllocation(props.name)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
