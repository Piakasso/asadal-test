import moment from "moment";

import OverviewWidget from "./components/OverviewWidget";
import FiltersPanel from "./components/FiltersPanel";
import TransactionsList from "./components/TransactionsList";

import { fetchTransactions } from "@/utils";
import { HomeProp, Transactions } from "@/types";

export default async function Home({ searchParams }: HomeProp) {
  const transactions: Transactions = await fetchTransactions({
    type: searchParams.type || "",
    category: searchParams.category || "",
  });

  const isDataEmpty =
    !Array.isArray(transactions) || transactions.length < 1 || !transactions;

  const filteredByDateTransactions =
    !searchParams.startDate && !searchParams.endDate
      ? transactions
      : transactions.filter((transaction) => {
          const transactionDate = moment(transaction.date, "DD-MM-YYYY");
          const startDate = moment(searchParams.startDate, "DD-MM-YYYY");
          const endDate = moment(searchParams.endDate, "DD-MM-YYYY");

          return (
            transactionDate.isSameOrAfter(startDate) &&
            transactionDate.isSameOrBefore(endDate)
          );
        });

  return (
    <main className="flex flex-col">
      <h1 className="text-xl font-extrabold py-[40px]">Overview</h1>
      <OverviewWidget transactions={filteredByDateTransactions} />
      <h2 className="text-md font-bold mt-[80px]">Transactions</h2>
      <FiltersPanel />
      {isDataEmpty ? (
        <div>NO DATA</div>
      ) : (
        <TransactionsList transactions={filteredByDateTransactions} />
      )}
    </main>
  );
}
