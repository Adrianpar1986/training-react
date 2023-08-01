import "./App.css";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";
import { useState } from "react";

function App() {
  const [addExpense, setAddExpense] = useState({});
  const saveNewExpense = (expense) => {
    // console.log("in app.js");
    // console.log(expense);
    setAddExpense(expense);
  };

  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses onSaveNewExpense={saveNewExpense} />
      <Expenses onNewExpense={addExpense} />
    </div>
  );
}

export default App;
