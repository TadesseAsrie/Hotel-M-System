// src/pages/Reports.jsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiDownload } from "react-icons/fi";

const Reports = () => {
  const [dateRange, setDateRange] = useState({
    start: "2024-01-01",
    end: "2024-12-31",
  });
  const revenueData = [
    { month: "Jan", revenue: 12500 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 18000 },
  ];
  const occupancyRate = [
    { month: "Jan", rate: 65 },
    { month: "Feb", rate: 72 },
    { month: "Mar", rate: 78 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Reports</h1>
        <button className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded">
          <FiDownload /> Export
        </button>
      </div>
      <div className="flex gap-4">
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) =>
            setDateRange({ ...dateRange, start: e.target.value })
          }
          className="border rounded p-2"
        />
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          className="border rounded p-2"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <h3>Revenue Report</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <h3>Occupancy Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyRate}>
              <CartesianGrid />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
