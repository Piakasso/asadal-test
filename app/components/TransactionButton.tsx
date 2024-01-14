import { TransactionButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const TransactionButton = ({
  source,
  text,
  amount,
}: TransactionButtonProps) => {
  return (
    <span className="flex flex-col justify-center w-full bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl px-5 py-2">
      <div className="flex gap-2 justify-center">
        <Image
          width={18}
          height={10}
          src={`${source}`}
          alt=""
          className="self-center"
        />
        <span>{text}</span>
      </div>
      <span className="text-xl text-center font-semibold">$ {amount}</span>
    </span>
  );
};

export default TransactionButton;
