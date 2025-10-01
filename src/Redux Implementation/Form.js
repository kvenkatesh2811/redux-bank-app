import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposite, mobileUpdate, withdraw, nameUpdate, reset } from "./Actions";
const Form = () => {
  let dispatch = useDispatch();
  let [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [transactionID, setTransactionID] = useState(0);
  return (
    <>
      <h1 className="text-center text-primary">
        Use Redux in React Application
      </h1>
      <div className="container">
        <h1 className="text-primary">Form</h1>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="number"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 m-1"
            onClick={() => {
              dispatch(deposite(amount));
              setTransactionID(transactionID+1);
              setAmount("");
              dispatch({
                type: "ADD TRANSACTION",
                payload: {
                  id:transactionID,
                  amount: amount,
                  date: new Date(),
                  type: "Credit",
                },
              });
            }}
          >
            Deposite
          </button>
          <button
            className="btn btn-danger col-1 m-1"
            onClick={() => {
              dispatch(withdraw(amount));
              setTransactionID(transactionID+1);
              dispatch({
                type: "ADD TRANSACTION",
                payload: {
                  id:transactionID,
                  amount: amount,
                  date: new Date(),
                  type: "Debit",
                },
              });
              setAmount("");
            }}
          >
            withdraw
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value={fullName}
              placeholder="Enter full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 m-1"
            onClick={() => {
              dispatch(nameUpdate(fullName));
              setFullName("");
            }}
          >
            update
          </button>
          <div className="col-6">
            <input
              className="form-control"
              type="number"
              value={mobile}
              placeholder="Enter mobile number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 m-1"
            onClick={() => {
              dispatch(mobileUpdate(mobile));
              setMobile("");
            }}
          >
            update
          </button>
        </div>
        <button
          className="btn btn-danger col-1 mt-1"
          onClick={() => {
            dispatch(reset());
            setMobile(null);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Form;
