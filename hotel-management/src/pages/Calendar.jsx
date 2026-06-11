// src/pages/Calendar.jsx
import { useState } from "react";
import { bookings } from "../data/dummyData";

const Calendar = () => {
  const [view, setView] = useState("month");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const startDay = startOfMonth.getDay();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  const calendarDays = [
    ...Array(startDay).fill(null),
    ...Array(daysInMonth)
      .fill()
      .map((_, i) => i + 1),
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Reservation Calendar</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView("month")}
            className={`px-4 py-2 rounded ${view === "month" ? "bg-primary-500 text-white" : "bg-gray-200"}`}
          >
            Month
          </button>
          <button
            onClick={() => setView("week")}
            className={`px-4 py-2 rounded ${view === "week" ? "bg-primary-500 text-white" : "bg-gray-200"}`}
          >
            Week
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {days.map((day) => (
            <div key={day} className="text-center font-semibold p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, idx) => (
            <div key={idx} className="border rounded-lg p-2 min-h-[100px]">
              <div className="font-medium">{day}</div>
              {day &&
                bookings
                  .filter((b) => parseInt(b.checkIn.split("-")[2]) === day)
                  .map((b) => (
                    <div
                      key={b.id}
                      className="text-xs bg-primary-100 mt-1 p-1 rounded"
                    >
                      {b.guestName}
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
