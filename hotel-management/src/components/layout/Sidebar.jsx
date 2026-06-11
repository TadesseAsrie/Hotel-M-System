

// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiCalendar, FiUsers, FiBookOpen, FiUserCheck, 
  FiCreditCard, FiPieChart, FiSettings, FiUser, FiLayers 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { path: '/', name: 'Dashboard', icon: FiHome },
  { path: '/rooms', name: 'Rooms', icon: FiLayers },
  { path: '/bookings', name: 'Bookings', icon: FiBookOpen },
  { path: '/guests', name: 'Guests', icon: FiUsers },
  { path: '/staff', name: 'Staff', icon: FiUserCheck },
  { path: '/payments', name: 'Payments', icon: FiCreditCard },
  { path: '/reports', name: 'Reports', icon: FiPieChart },
  { path: '/calendar', name: 'Calendar', icon: FiCalendar },
  { path: '/settings', name: 'Settings', icon: FiSettings },
  { path: '/profile', name: 'Profile', icon: FiUser },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar - visible on desktop always, on mobile only when isOpen */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl z-30
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            HotelMS
          </h1>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 1024) toggleSidebar();
              }}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              <item.icon className="text-xl" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;