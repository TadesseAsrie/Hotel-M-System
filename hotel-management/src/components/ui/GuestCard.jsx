// src/components/ui/GuestCard.jsx
const GuestCard = ({ guest }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold">{guest.name}</h3>
      <p className="text-sm">{guest.email}</p>
    </div>
  );
};

export default GuestCard;
