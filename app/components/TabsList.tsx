"use client";
import { Tab } from "@headlessui/react";
import React from "react";

import ChartInfo from "./ChartInfo";
import ChartOfMovements from "./ChartOfMovements";
import { tabs } from "@/constants";

import { TabListProp } from "@/types";

const TabsList = ({ transactions }: TabListProp) => {
  return (
    <div className="flex flex-col gap-6 justify-center flex-1 md:flex-0">
      <Tab.Group>
        <Tab.List className="flex justify-around space-x-1 rounded-xl">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                ` rounded-lg py-1 px-1 text-sm font-medium leading-5 ${
                  selected
                    ? "bg-blue-100 text-white shadow"
                    : "text-blue-100  hover:bg-white/[0.12] hover:text-white"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex-1">
          <Tab.Panel className="h-full">
            <ChartInfo transactions={transactions} />
          </Tab.Panel>
          <Tab.Panel>
            <ChartOfMovements transactions={transactions} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabsList;
