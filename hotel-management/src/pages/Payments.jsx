// src/pages/Payments.jsx
import { useState } from "react";
import { payments } from "../data/dummyData";
import SearchBar from "../components/common/SearchBar";
import Modal from "../components/common/Modal";
import { FiEye } from "react-icons/fi";

const Payments = () => {
  const [search, setSearch] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const filtered = payments.filter((p) =>
    p.guestName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payments</h1>
      <SearchBar value={search} onChange={setSearch} />
      <table className="w-full bg-white dark:bg-gray-800 rounded-xl">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Guest</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td className="p-3">{p.id}</td>
              <td>{p.guestName}</td>
              <td>${p.amount}</td>
              <td>{p.date}</td>
              <td>{p.method}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${p.status === "paid" ? "bg-green-100" : "bg-yellow-100"}`}
                >
                  {p.status}
                </span>
              </td>
              <td>
                <button onClick={() => setSelectedPayment(p)}>
                  <FiEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={!!selectedPayment}
        onClose={() => setSelectedPayment(null)}
        title="Payment Details"
      >
        <pre>{JSON.stringify(selectedPayment, null, 2)}</pre>
      </Modal>
    </div>
  );
};

export default Payments;
