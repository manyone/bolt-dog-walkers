import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Moon, Sun, Settings } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function Header() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <header className="bg-indigo-600 dark:bg-indigo-900 text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8" />
            <span className="text-2xl font-bold">PawfectWalks</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
            <Link to="/bookings" className="hover:text-indigo-200">Bookings</Link>
            <Link to="/dogs" className="hover:text-indigo-200">Dogs</Link>
            <Link to="/walkers" className="hover:text-indigo-200">Walkers</Link>
            <Link to="/schedule" className="hover:text-indigo-200">Schedule</Link>
            <Link to="/admin" className="hover:text-indigo-200">
              <Settings className="h-5 w-5" />
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}