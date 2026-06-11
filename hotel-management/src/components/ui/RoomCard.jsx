// src/components/ui/RoomCard.jsx
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
      <img
        src={room.images[0]}
        alt={room.type}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-semibold">Room {room.number}</h3>
          <span className="text-sm text-primary-500">${room.price}/night</span>
        </div>
        <Link
          to={`/rooms/${room.id}`}
          className="mt-2 inline-flex items-center text-primary-500"
        >
          <FiEye /> View Details
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
