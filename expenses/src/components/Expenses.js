import {
  faChampagneGlasses,
  faSquare,
  faBriefcase,
  faCommentDollar,
  faSackDollar,
  faCar,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import ItemIcon from "./Items/ItemIcon";
import ItemInfo from "./Items/ItemInfo";
import ItemCost from "./Items/ItemCost";
import { itemsList, classes } from "../itemsDB/items";
import ItemContainer from "./wrappers/ItemContainer";
import Wrapper from "./wrappers/Wrapper";
import { useState, useEffect } from "react";
import ExpensesFilter from "./ExpensesFilter";
import { expensesStats } from "../utils/expensesStats";
import { monthToString } from "../utils/monthToString";
import InfoAlert from "./alerts/InfoAlert";

function Expenses(props) {
  const [filter, setFilter] = useState(
    monthToString(new Date().toLocaleDateString())
  );
  const [expenses, setNewExpenses] = useState(itemsList);
  const filteredMonth = (month) => {
    setFilter(month);
  };
  let stats = [0, 0];

  const getIcons = (category) => {
    switch (category) {
      case "transfer":
        return [faSquare, faSackDollar];
      case "car":
        return [faSquare, faCar];
      case "bizum":
        return [faSquare, faCommentDollar];
      case "bill":
        return [faSquare, faChampagneGlasses];
      case "electricity":
        return [faSquare, faBoltLightning];
      default:
        return [faSquare, faBriefcase];
    }
  };
  let filteredMonths = [];

  useEffect(() => {
    if (Object.keys(props.onNewExpense).length > 0) {
      const expense = {
        icons: getIcons(props.onNewExpense.category),
        classes: classes[props.onNewExpense.category],
        data: {
          title: props.onNewExpense.title,
          date: new Date(props.onNewExpense.date).toLocaleDateString(),
        },
        money: {
          amount: props.onNewExpense.amount,
          income: props.onNewExpense.isIncome,
        },
      };
      setNewExpenses([...expenses, expense]);
    }
  }, [props.onNewExpense]);

  if (filter !== "") {
    filteredMonths = expenses.filter(
      (item) => monthToString(item.data.date) === filter
    );
    if (filteredMonths.length > 0) {
      stats = expensesStats(filteredMonths);
    } else {
      stats = [0, 0];
    }
  }

  return (
    <>
      <div>
        <ExpensesFilter
          onStats={stats}
          onSelectMonth={filteredMonth}
          month={expenses}
        />
        <Wrapper
          content={
            (filteredMonths.length > 0 &&
              filteredMonths.map((item, index) => {
                return (
                  <ItemContainer key={index}>
                    <ItemIcon icons={item.icons} classes={item.classes} />
                    <ItemInfo data={item.data} />
                    <ItemCost money={item.money} />
                  </ItemContainer>
                );
              })) || <InfoAlert info="No expenses availables." />
          }
        />
      </div>
    </>
  );
}

export default Expenses;
