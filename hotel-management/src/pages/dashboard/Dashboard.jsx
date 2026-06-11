
// src/pages/dashboard/Dashboard.jsx
import { useState, useEffect } from 'react';
import { FiHome, FiUsers, FiCalendar, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../../components/common/StatCard';
import { getDashboardStats, recentActivities, rooms, bookings, guests, payments } from '../../data/dummyData';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setStats(getDashboardStats());
      setLoading(false);
    }, 800);
  }, []);
  
  const revenueData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 19500 },
    { month: 'Jun', revenue: 25000 },
  ];
  
  // Fix: Use the imported 'rooms' array
  const occupancyData = [
    { name: 'Available', value: rooms.filter(r => r.status === 'available').length },
    { name: 'Occupied', value: rooms.filter(r => r.status === 'occupied').length },
    { name: 'Reserved', value: rooms.filter(r => r.status === 'reserved').length },
    { name: 'Maintenance', value: rooms.filter(r => r.status === 'maintenance').length },
  ];
  
  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];
  
  if (loading) {
    return <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>)}
      </div>
    </div>;
  }
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's your hotel overview</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Rooms" value={stats.totalRooms} icon={FiHome} color="blue" />
        <StatCard title="Available Rooms" value={stats.availableRooms} icon={FiHome} color="green" />
        <StatCard title="Occupied Rooms" value={stats.occupiedRooms} icon={FiHome} color="orange" />
        <StatCard title="Total Guests" value={stats.totalGuests} icon={FiUsers} color="purple" />
        <StatCard title="Today's Check-ins" value={stats.todayCheckIns} icon={FiCalendar} color="cyan" />
        <StatCard title="Today's Check-outs" value={stats.todayCheckOuts} icon={FiCalendar} color="red" />
        <StatCard title="Revenue" value={`$${stats.revenue}`} icon={FiDollarSign} color="emerald" trend={12} />
        <StatCard title="Pending Payments" value={stats.pendingPayments} icon={FiTrendingUp} color="yellow" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Room Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={occupancyData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                {occupancyData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Recent Bookings</h4>
            {recentActivities.bookings.map(b => <div key={b.id} className="flex justify-between py-2 border-b">{b.guestName} - Room {b.roomNumber}</div>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;