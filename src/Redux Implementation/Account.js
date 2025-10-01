import React from "react";
import { useSelector } from "react-redux";
const Account = () => {
  let data = useSelector((state) => {
    return state;
  });
  console.log(data);
  return (
    <>
      <div className="container">
        <h2 className="text-primary">Account details</h2>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Balance</th>
              <th>UserName</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.account.balance}</td>
              <td>{data.account.fullName}</td>
              <td>{data.account.mobile}</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-primary">Transaction Details</h2>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.transaction.map((trans, index) => (
              <tr key={trans.id}>
                <td>{trans.id+1}</td>
                <td>{trans.amount}</td>
                <td>{trans.type}</td>
                <td>{trans.date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
