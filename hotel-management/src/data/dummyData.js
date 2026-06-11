// src/data/dummyData.js
export const rooms = [
  {
    id: 1,
    number: "101",
    type: "Standard",
    capacity: 2,
    price: 120,
    status: "available",
    description: "Comfortable standard room with city view",
    amenities: ["WiFi", "TV", "AC"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
    ],
  },
  {
    id: 2,
    number: "102",
    type: "Deluxe",
    capacity: 3,
    price: 180,
    status: "occupied",
    description: "Spacious deluxe room with balcony",
    amenities: ["WiFi", "TV", "AC", "Mini Bar"],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500",
    ],
  },
  {
    id: 3,
    number: "201",
    type: "Suite",
    capacity: 4,
    price: 350,
    status: "reserved",
    description: "Luxury suite with separate living area",
    amenities: ["WiFi", "TV", "AC", "Jacuzzi", "Butler Service"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    ],
  },
  {
    id: 4,
    number: "103",
    type: "Standard",
    capacity: 2,
    price: 115,
    status: "maintenance",
    description: "Under renovation",
    amenities: ["WiFi", "TV"],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
    ],
  },
  {
    id: 5,
    number: "202",
    type: "Deluxe",
    capacity: 3,
    price: 190,
    status: "available",
    description: "Ocean view deluxe room",
    amenities: ["WiFi", "TV", "AC", "Mini Bar", "Ocean View"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
    ],
  },
];

export const bookings = [
  {
    id: "B001",
    guestId: 1,
    roomId: 1,
    guestName: "John Smith",
    roomNumber: "101",
    checkIn: "2024-02-15",
    checkOut: "2024-02-18",
    guests: 2,
    status: "confirmed",
    paymentStatus: "paid",
    totalAmount: 360,
  },
  {
    id: "B002",
    guestId: 2,
    roomId: 2,
    guestName: "Emma Johnson",
    roomNumber: "102",
    checkIn: "2024-02-14",
    checkOut: "2024-02-16",
    guests: 2,
    status: "checked-in",
    paymentStatus: "paid",
    totalAmount: 360,
  },
  {
    id: "B003",
    guestId: 3,
    roomId: 3,
    guestName: "Michael Brown",
    roomNumber: "201",
    checkIn: "2024-02-20",
    checkOut: "2024-02-25",
    guests: 3,
    status: "pending",
    paymentStatus: "pending",
    totalAmount: 1750,
  },
  {
    id: "B004",
    guestId: 4,
    roomId: 5,
    guestName: "Sophia Wilson",
    roomNumber: "202",
    checkIn: "2024-02-10",
    checkOut: "2024-02-12",
    guests: 2,
    status: "checked-out",
    paymentStatus: "paid",
    totalAmount: 380,
  },
];

export const guests = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1234567890",
    nationality: "USA",
    address: "123 Main St",
    checkIn: "2024-02-15",
    checkOut: "2024-02-18",
  },
  {
    id: 2,
    name: "Emma Johnson",
    email: "emma@example.com",
    phone: "+1987654321",
    nationality: "UK",
    address: "45 Oxford St",
    checkIn: "2024-02-14",
    checkOut: "2024-02-16",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1122334455",
    nationality: "Canada",
    address: "789 Maple Ave",
    checkIn: "2024-02-20",
    checkOut: "2024-02-25",
  },
  {
    id: 4,
    name: "Sophia Wilson",
    email: "sophia@example.com",
    phone: "+1555666777",
    nationality: "Australia",
    address: "321 Beach Rd",
    checkIn: "2024-02-10",
    checkOut: "2024-02-12",
  },
];

export const staff = [
  {
    id: 1,
    name: "Alice Manager",
    department: "Management",
    position: "General Manager",
    email: "alice@hotel.com",
    phone: "+1111111111",
  },
  {
    id: 2,
    name: "Bob Reception",
    department: "Reception",
    position: "Front Desk",
    email: "bob@hotel.com",
    phone: "+1222222222",
  },
  {
    id: 3,
    name: "Charlie Clean",
    department: "Housekeeping",
    position: "Housekeeper",
    email: "charlie@hotel.com",
    phone: "+1333333333",
  },
];

export const payments = [
  {
    id: "P001",
    guestName: "John Smith",
    bookingId: "B001",
    amount: 360,
    date: "2024-02-10",
    method: "Card",
    status: "paid",
  },
  {
    id: "P002",
    guestName: "Emma Johnson",
    bookingId: "B002",
    amount: 360,
    date: "2024-02-12",
    method: "Mobile Payment",
    status: "paid",
  },
  {
    id: "P003",
    guestName: "Michael Brown",
    bookingId: "B003",
    amount: 1750,
    date: "2024-02-18",
    method: "Cash",
    status: "pending",
  },
];

export const recentActivities = {
  bookings: bookings.slice(0, 3),
  guests: guests.slice(0, 3),
  payments: payments.slice(0, 3),
};

export const getDashboardStats = () => {
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((r) => r.status === "available").length;
  const occupiedRooms = rooms.filter((r) => r.status === "occupied").length;
  const totalGuests = guests.length;
  const todayCheckIns = bookings.filter(
    (b) =>
      b.checkIn === new Date().toISOString().split("T")[0] &&
      b.status !== "checked-in",
  ).length;
  const todayCheckOuts = bookings.filter(
    (b) =>
      b.checkOut === new Date().toISOString().split("T")[0] &&
      b.status !== "checked-out",
  ).length;
  const revenue = payments
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingPayments = payments.filter((p) => p.status === "pending").length;

  return {
    totalRooms,
    availableRooms,
    occupiedRooms,
    totalGuests,
    todayCheckIns,
    todayCheckOuts,
    revenue,
    pendingPayments,
  };
};
