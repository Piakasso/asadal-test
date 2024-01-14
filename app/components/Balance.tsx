import React from "react";

import TransactionButton from "./TransactionButton";

import { BalanceProp } from "@/types";

const Balance = ({ sums }: BalanceProp) => {
  const { totalBalance, incomeAmount, expenseAmount } = sums;
  return (
    <div className="flex flex-col gap-8 flex-1 md:flex-0">
      <div className="flex flex-col p-4 bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl">
        <span>Total Balance</span>
        <span className="text-2xl font-bold">$ {totalBalance}</span>
      </div>

      <div className="flex gap-4">
        <TransactionButton
          source="/income.png"
          text="Income"
          amount={incomeAmount}
        ></TransactionButton>
        <TransactionButton
          amount={expenseAmount}
          source="/expense.png"
          text="Expense"
        ></TransactionButton>
      </div>
    </div>
  );
};

export default Balance;
