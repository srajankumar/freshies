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
    <div>
      <div
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
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>
          <div>{props.quantity}</div>
          <button
            type="button"
            class="btn btn-success"
            onClick={(event) => increaseAllocation(props.name)}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={(event) => decreaseAllocation(props.name)}
          >
            -
          </button>
        </small>
      </div>
      <tr>
        {/* <td>
        <button size="2.2em" color="red" onClick={handleDeleteItem}></button>
      </td>
      <td>
        {Currency}
        {parseInt(props.quantity) * parseInt(props.unitprice)}
      </td> */}
      </tr>
    </div>
  );
};

export default ExpenseItem;
