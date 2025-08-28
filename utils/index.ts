import axios from "axios";
import { FiltersProp, SumsByCategory, Transactions } from "@/types";

export async function fetchTransactions(filters: FiltersProp) {
  const { type, category } = filters;
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const { startdate, enddate } = filters;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions/?${startdate}&${enddate}`,
      {
        params: {
          type,
          category,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch transactions", error);
  }
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (value === "") {
    searchParams.delete(type);
  } else {
    searchParams.set(type, value);
  }
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const sumMovement = (
  transactions: Transactions,
  filter: string
): number => {
  return +transactions
    .filter((transaction) => transaction.type === filter)
    .reduce((sum, transaction) => sum + transaction.sum, 0)
    .toFixed(2);
};

export const calculateTotalBalance = (transactions: Transactions) => {
  return +transactions
    .reduce((sum, transaction) => {
      if (transaction.type === "expense") {
        return sum - transaction.sum;
      }
      return sum + transaction.sum;
    }, 0)
    .toFixed(2);
};

export const prepareDataForDoughnutChart = (transactions: Transactions) => {
  const sumsByCategory: SumsByCategory = {};
  transactions.forEach((transaction) => {
    const { category, sum } = transaction;

    if (transaction.type === "expense") {
      if (sumsByCategory.hasOwnProperty(category)) {
        sumsByCategory[category] += sum;
      } else {
        sumsByCategory[category] = sum;
      }
    }
  });
  return sumsByCategory;
};

export const prepareDataForVerticalChart = (
  transactions: Transactions,
  filter: string
) => {
  return transactions.map((item) => {
    if (item.type === filter) {
      return item.sum;
    } else {
      0;
    }
  });
};

export const filterCategories = (categories: string[], query: string) => {
  return query === ""
    ? categories
    : categories.filter((category) => {
        return category.toLowerCase().includes(query.toLowerCase());
      });
};
