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
    <tr>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>
        {Currency}
        {parseInt(props.unitprice)}
      </td>
      <td>
        {Currency}
        {parseInt(props.quantity) * parseInt(props.unitprice)}
      </td>
      <td>
        <button
          size="1.5em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        ></button>
      </td>
      <td>
        <button
          size="1.5em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        ></button>
      </td>

      <td>
        <button size="2.2em" color="red" onClick={handleDeleteItem}></button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
