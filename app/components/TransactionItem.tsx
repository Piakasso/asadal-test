"use client";
import React, { useState } from "react";
import Image from "next/image";

import DetailsTransaction from "./DetailsTransaction";

import { TransactionItemProps } from "@/types";

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { details, date, category, sum, type, time } = transaction;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <tr
        className=" items-center border-b border-grey cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <td className="flex flex-col justify-center basis-[50%]  py-3">
          <span className="font-bold">{details}</span>
          <span className="text-grey text-sm">
            {date} at {time}
          </span>
        </td>

        <td>
          <span className="px-2 border border-white rounded-md">
            {category}
          </span>
        </td>
        <td>
          <Image
            width={18}
            height={10}
            src={type === "income" ? "/income.png" : "/expense.png"}
            alt=""
            className="self-center m-auto"
          />
        </td>
        <td className="text-right font-bold text-md">$ {sum}</td>
        <td>
          <DetailsTransaction
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            transaction={transaction}
          />
        </td>
      </tr>
    </>
  );
};

export default TransactionItem;
