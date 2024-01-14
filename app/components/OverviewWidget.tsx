import React from "react";

import Balance from "./Balance";
import TabsList from "./TabsList";

import { OverviewWidgetProp } from "@/types";
import { calculateTotalBalance, sumMovement } from "@/utils";

const OverviewWidget = ({ transactions }: OverviewWidgetProp) => {
  const incomeAmount = sumMovement(transactions, "income");
  const expenseAmount = sumMovement(transactions, "expense");
  const totalBalance = calculateTotalBalance(transactions);

  return (
    <div className="flex gap-3 flex-col  md:flex-row">
      <Balance sums={{ incomeAmount, expenseAmount, totalBalance }} />
      <TabsList transactions={transactions} />
    </div>
  );
};

export default OverviewWidget;
