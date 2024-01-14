"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import FilterDropdownButton from "./FilterDropdownButton";
import Calendar from "./Calendar";

import { updateSearchParams } from "@/utils";
import { filtersByMovement } from "@/constants";

const FiltersPanel = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleUpdateParams = (e: { type: string; value: string }) => {
    const newPathname = updateSearchParams(e.type, e.value);
    setSelected(e.value);
    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="flex grow-0 flex-col md:flex-row gap-3 justify-between items-center py-5">
      <ul className="flex gap-3">
        {filtersByMovement.map((filter) => (
          <li key={filter.title}>
            <button
              value={filter.value}
              onClick={(e) => {
                handleUpdateParams({
                  type: "type",
                  value: e.currentTarget.value,
                });
              }}
              className={`${selected === filter.value && "border-b-2"}`}
            >
              {filter.title}
            </button>
          </li>
        ))}
      </ul>

      <FilterDropdownButton />
      <Calendar />
    </div>
  );
};

export default FiltersPanel;
