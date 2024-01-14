"use client";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";

import { TransactionDetailsProp } from "@/types";

const DetailsTransaction = ({
  isOpen,
  closeModal,
  transaction,
}: TransactionDetailsProp) => {
  const { details, date, time, category, type, sum } = transaction;
  return (
    <Dialog
      as="div"
      className="relative z-10"
      onClose={closeModal}
      open={isOpen}
    >
      <div className="fixed inset-0 bg-black bg-opacity-90" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full  items-center justify-center p-4 text-center">
          <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-grey/90 p-6  shadow-xl transition-all flex flex-col justify-center text-center gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
            <p>
              {date} at {time}
            </p>
            <Dialog.Title className="text-xl  border-b">
              {type} operation
            </Dialog.Title>
            <p className="flex flex-col text-left">
              <span className="text-black">Amount</span>
              <span
                className={`font-bold text-md ${
                  type === "income" ? "text-blue-300" : "text-red"
                }`}
              >
                {sum} $
              </span>
            </p>

            <Dialog.Description as="div" className=" flex flex-col gap-3">
              <div className="flex flex-col text-left">
                <span className="text-black text-sm">Description</span>
                <span>{details}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-black text-sm">Category</span>
                <span>{category}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-black text-sm">Transactions uniq ID</span>
                <span>{uuidv4()}</span>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DetailsTransaction;
