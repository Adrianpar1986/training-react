import "./ExpensesFilter.css";
import { useState } from "react";
import Wrapper from "./wrappers/Wrapper";
import { expensesStats } from "../utils/expensesStats";
import { monthToString } from "../utils/monthToString";

function ExpensesFilter(props) {
  const stats = expensesStats(props.months);
  return (
    <Wrapper
      content={
        <div className="chart">
          <div className="bars">
            <div className="label">
              <p>Incomes %</p>
              <div className="bar">
                <div className="incomes" style={{ width: `${stats[0]}` }}></div>
              </div>
            </div>
            <div className="label">
              <p>Expenses %</p>
              <div className="bar">
                <div
                  className="expenses"
                  style={{ width: `${stats[1]}` }}
                ></div>
              </div>
            </div>
          </div>
          <form>
            <select name="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </form>
        </div>
      }
    />
  );
}

export default ExpensesFilter;
