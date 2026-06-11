// src/pages/rooms/RoomDetails.jsx
import { useParams } from "react-router-dom";
import { rooms, bookings } from "../../data/dummyData";
import {
  FiWifi,
  FiTv,
  FiWind,
  FiCoffee,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";

const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));
  const roomBookings = bookings.filter((b) => b.roomId === room?.id);

  if (!room) return <div>Room not found</div>;

  const amenityIcons = {
    WiFi: FiWifi,
    TV: FiTv,
    AC: FiWind,
    "Mini Bar": FiCoffee,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Room {room.number} Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
          <img
            src={room.images[0]}
            alt={room.type}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Amenities</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {room.amenities.map((amenity) => {
                const Icon = amenityIcons[amenity] || FiCoffee;
                return (
                  <span
                    key={amenity}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    <Icon /> {amenity}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Booking History</h2>
          {roomBookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            roomBookings.map((booking) => (
              <div key={booking.id} className="border-b py-3">
                <p>
                  <strong>Guest:</strong> {booking.guestName}
                </p>
                <p>
                  <strong>Check-in:</strong> {booking.checkIn} →{" "}
                  {booking.checkOut}
                </p>
                <p>
                  <strong>Status:</strong> {booking.status}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
