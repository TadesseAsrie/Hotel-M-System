// src/pages/rooms/Rooms.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiFilter, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { rooms } from "../../data/dummyData";
import SearchBar from "../../components/common/SearchBar";
import Modal from "../../components/common/Modal";
import { motion } from "framer-motion";

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState(null);
  const itemsPerPage = 6;

  const filteredRooms = rooms.filter(
    (room) =>
      (room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.type.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter ? room.status === statusFilter : true) &&
      (typeFilter ? room.type === typeFilter : true),
  );

  const paginatedRooms = filteredRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);

  const getStatusColor = (status) => {
    const colors = {
      available: "green",
      occupied: "red",
      reserved: "yellow",
      maintenance: "gray",
    };
    return colors[status] || "gray";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Rooms Management</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search rooms..."
        />
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border dark:bg-gray-800"
          >
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="reserved">Reserved</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border dark:bg-gray-800"
          >
            <option value="">All Types</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={room.images[0]}
              alt={room.type}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Room {room.number}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {room.type}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(room.status)}-100 text-${getStatusColor(room.status)}-700`}
                >
                  {room.status}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-sm">Capacity: {room.capacity} guests</p>
                <p className="text-2xl font-bold text-primary-600">
                  ${room.price}
                  <span className="text-sm font-normal">/night</span>
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/rooms/${room.id}`}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  <FiEye /> View
                </Link>
                <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <FiEdit2 />
                </button>
                <button
                  onClick={() => setDeleteModal(room)}
                  className="p-2 bg-red-100 text-red-600 rounded-lg"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-primary-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <Modal
        isOpen={!!deleteModal}
        onClose={() => setDeleteModal(null)}
        title="Delete Room"
      >
        <p>Are you sure you want to delete Room {deleteModal?.number}?</p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setDeleteModal(null)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Rooms;
