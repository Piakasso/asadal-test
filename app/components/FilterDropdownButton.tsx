import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Combobox } from "@headlessui/react";

import { filterCategories, updateSearchParams } from "@/utils";
import { categories } from "@/constants";

const FilterDropdownButton = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const handleUpdateParams = (e: { type: string; value: string }) => {
    const newPathname = updateSearchParams(e.type, e.value);
    setSelectedCategory(e.value === "" ? "all" : e.value);
    router.push(newPathname, { scroll: false });
  };

  const filteredCategories = filterCategories(categories, query);

  return (
    <Combobox
      value={selectedCategory}
      as="div"
      className="relative w-[120px]"
      onChange={(e) => {
        handleUpdateParams({ type: "category", value: e === "all" ? "" : e });
      }}
    >
      <Combobox.Input
        displayValue={(category: string) => category}
        className="relative w-full h-full border-2 border-blue-100 py-1 px-4 rounded-xl self-center text-blue-300"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Button className="absolute inset-y-0 right-2 flex items-center">
        <Image
          alt=""
          src="/arrows.png"
          width={10}
          height={10}
          className="h-4 w-4"
        />
      </Combobox.Button>

      <Combobox.Options className="absolute w-full flex flex-col border border-blue-100 rounded-md mt-2 ">
        {filteredCategories.map((category) => (
          <Combobox.Option value={category} as={Fragment} key={category}>
            {({ active }) => (
              <div
                className={`p-2 cursor-pointer ${
                  active
                    ? "bg-gradient-to-r from-blue-300 to-blue-100 text-white"
                    : "bg-white text-black"
                }`}
              >
                {category}
              </div>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default FilterDropdownButton;
