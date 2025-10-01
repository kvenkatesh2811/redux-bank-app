import { combineReducers, createStore } from "redux";
const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};
function accountReducer(state = initialState, action) {
  //   if (action.type === "deposite")
  //     return { ...state, balance: state.balance + action.palyload };
  //   else if (action.type === "withdraw")
  //     return { ...state, balance: state.balance - action.palyload };
  //   else if (action.type === "mobileUpdate")
  //     return { ...state, mobile: action.palyload };
  //   else if (action.type === "nameUpdate")
  //     return { ...state, fullName: action.palyload };
  //   else return state;
  switch (action.type) {
    case "deposite":
      return { ...state, balance: state.balance + +action.payload };

    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };

    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
}
function transactionReducer(state = [], action) {
  switch (action.type) {
    case "ADD TRANSACTION":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];
    default:
      return state;
  }
}
let rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});
// let store = createStore(accountReducer);
let store = createStore(rootReducer);
// console.log(store.getState());
/* store.dispatch({
  type: "deposite",
  palyload: 1000,
});
console.log(store.getState());
store.dispatch({
  type: "withdraw",
  palyload: 1000,
});
console.log(store.getState());
store.dispatch({
  type: "nameUpdate",
  palyload: "venky",
});
console.log(store.getState());
store.dispatch({
  type: "mobileUpdate",
  palyload: 9988776655,
}); */
// console.log(store.getState());
export default store;
