export interface Transaction {
  id: number;
  date: string;
  category: string;
  type: string;
  details: string;
  sum: number;
  time: string;
}

export interface Category {
  title: string;
  color: string;
}

export type Transactions = Transaction[];

export interface TransactionsListProps {
  transactions: Transaction[];
}

export interface TransactionItemProps {
  transaction: Transaction;
}

export interface TransactionButtonProps {
  source: string;
  text: string;
  amount: number;
}

export interface FilterDropdownButtonProps {
  data: string[];
}

export interface FiltersProp {
  type: string;
  category: string;
  startdate?: string;
  enddate?: string;
}

export interface HomeProp {
  searchParams: {
    type?: string;
    category?: string;
    startdate?: string;
    enddate?: string;
  };
}
export interface OverviewWidgetProp {
  transactions: Transactions;
}

export interface BalanceProp {
  sums: {
    incomeAmount: number;
    expenseAmount: number;
    totalBalance: number;
  };
}

export interface FiltersPanelProps {
  categories: string[];
}

export interface ChartInfoProps {
  transactions: Transactions;
}

export interface SumsByCategory {
  [key: string]: number;
}

export interface TabListProp {
  transactions: Transactions;
}

export interface ChartOfMovementsProp {
  transactions: Transactions;
}

export interface TransactionDetailsProp {
  isOpen: boolean;
  closeModal: () => void;
  transaction: Transaction;
}
