import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositeMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposite/Withdraw Money</h2>
      {/* <button
        className="btn btn-primary btn-sm mx-2"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary btn-sm mx-2"
        onClick={() => {
          dispatch(actionCreators.depositeMoney(100));
        }}
      >
        +
      </button> */}
      <button
        className="btn btn-primary btn-sm mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary btn-sm mx-2"
        onClick={() => {
          depositeMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
