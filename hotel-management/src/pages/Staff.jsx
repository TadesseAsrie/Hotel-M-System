// src/pages/Staff.jsx
import { useState } from "react";
import { staff } from "../data/dummyData";
import SearchBar from "../components/common/SearchBar";
import Modal from "../components/common/Modal";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const Staff = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const filtered = staff.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Staff</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FiPlus /> Add Staff
        </button>
      </div>
      <SearchBar value={search} onChange={setSearch} />
      <table className="w-full bg-white dark:bg-gray-800 rounded-xl">
        <thead>
          <tr>
            <th className="p-3">Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s) => (
            <tr key={s.id}>
              <td className="p-3">{s.name}</td>
              <td>{s.department}</td>
              <td>{s.position}</td>
              <td>{s.email}</td>
              <td className="flex gap-2">
                <button onClick={() => setEditingStaff(s)}>
                  <FiEdit2 />
                </button>
                <button>
                  <FiTrash2 className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen || !!editingStaff}
        onClose={() => {
          setIsModalOpen(false);
          setEditingStaff(null);
        }}
        title={editingStaff ? "Edit Staff" : "Add Staff"}
      >
        <form className="space-y-4">
          <input placeholder="Name" className="w-full p-2 border rounded" />
          <input
            placeholder="Department"
            className="w-full p-2 border rounded"
          />
          <input placeholder="Position" />
          <input placeholder="Email" />
          <button className="bg-primary-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Staff;
