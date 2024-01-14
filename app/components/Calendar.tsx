import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartParams = (
    start: { type: string; value: string },
    end: { type: string; value: string }
  ) => {
    if (startDate !== null && endDate !== null) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(start.type, start.value);
      searchParams.set(end.type, end.value);

      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      router.push(newPathname);
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete("startDate");
      searchParams.delete("endDate");
      router.push(`${window.location.pathname}?${searchParams.toString()}`, {
        scroll: false,
      });
    }
  };

  useEffect(() => {
    handleStartParams(
      { type: "startDate", value: moment(startDate).format("DD-MM-YYYY") },
      { type: "endDate", value: moment(endDate).format("DD-MM-YYYY") }
    );
  }, [startDate, endDate]);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const oneYearsAgo = new Date();
  oneYearsAgo.setFullYear(oneYearsAgo.getFullYear() - 1);

  return (
    <div>
      <DatePicker
        calendarStartDay={1}
        minDate={oneYearsAgo}
        maxDate={new Date()}
        placeholderText="dd-mm-yyyy"
        isClearable
        closeOnScroll={true}
        dateFormat="dd/MM/yyyy"
        startDate={startDate}
        endDate={endDate}
        selectsRange
        selected={startDate}
        onChange={onChange}
      />
    </div>
  );
};

export default Calendar;
