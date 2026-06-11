// src/pages/Bookings.jsx
import { useState } from "react";
import { bookings } from "../data/dummyData";
import SearchBar from "../components/common/SearchBar";
import Modal from "../components/common/Modal";
import { FiEye, FiEdit2, FiXCircle } from "react-icons/fi";

const Bookings = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelModal, setCancelModal] = useState(null);

  const filtered = bookings.filter(
    (b) =>
      b.guestName.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? b.status === statusFilter : true),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bookings</h1>
      <div className="flex gap-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by guest..."
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border"
        >
          <option value="">All Status</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Checked In</option>
          <option>Checked Out</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-xl">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left">Booking ID</th>
              <th>Guest</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="p-3">{booking.id}</td>
                <td>{booking.guestName}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${booking.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100"}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  <button onClick={() => setSelectedBooking(booking)}>
                    <FiEye />
                  </button>
                  <button>
                    <FiEdit2 />
                  </button>
                  <button onClick={() => setCancelModal(booking)}>
                    <FiXCircle className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
        title="Booking Details"
      >
        {selectedBooking && (
          <pre>{JSON.stringify(selectedBooking, null, 2)}</pre>
        )}
      </Modal>
    </div>
  );
};

export default Bookings;
