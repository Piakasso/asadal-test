"use client";
import React from "react";
import TransactionItem from "./TransactionItem";
import { TransactionsListProps } from "@/types";

const TransactionsList = ({ transactions }: TransactionsListProps) => {
  return (
    <div className="flex-1 pb-[80px]">
      {transactions.length > 0 ? (
        <table className="py-6 w-full">
          <tbody>
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No transactions in this filter</h1>
      )}
    </div>
  );
};

export default TransactionsList;
