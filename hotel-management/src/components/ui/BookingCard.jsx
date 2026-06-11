// src/components/ui/BookingCard.jsx
const BookingCard = ({ booking }) => {
  return (
    <div className="border rounded-lg p-4">
      <p>
        <strong>{booking.guestName}</strong> - Room {booking.roomNumber}
      </p>
      <p className="text-sm">
        {booking.checkIn} → {booking.checkOut}
      </p>
    </div>
  );
};

export default BookingCard;
