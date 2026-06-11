// src/pages/Guests.jsx
import { useState } from "react";
import { guests, bookings } from "../data/dummyData";
import SearchBar from "../components/common/SearchBar";
import Modal from "../components/common/Modal";
import { FiEye } from "react-icons/fi";

const Guests = () => {
  const [search, setSearch] = useState("");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const filtered = guests.filter(
    (g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.email.includes(search),
  );

  const guestBookings = selectedGuest
    ? bookings.filter((b) => b.guestId === selectedGuest.id)
    : [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Guests</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((guest) => (
          <div
            key={guest.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <h3 className="font-semibold">{guest.name}</h3>
            <p className="text-sm text-gray-500">{guest.email}</p>
            <button
              onClick={() => setSelectedGuest(guest)}
              className="mt-2 text-primary-500"
            >
              <FiEye /> View Profile
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedGuest}
        onClose={() => setSelectedGuest(null)}
        title="Guest Profile"
      >
        {selectedGuest && (
          <div>
            <p>
              <strong>Name:</strong> {selectedGuest.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedGuest.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedGuest.phone}
            </p>
            <h4 className="font-semibold mt-4">Booking History</h4>
            {guestBookings.map((b) => (
              <div key={b.id}>
                {b.id} - {b.checkIn} to {b.checkOut}
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Guests;
