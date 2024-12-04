import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Dog, UserCheck, Route, Receipt } from 'lucide-react';

export function Admin() {
  const adminLinks = [
    { title: 'Manage Owners', path: '/admin/owners', icon: Users },
    { title: 'Manage Dogs', path: '/admin/dogs', icon: Dog },
    { title: 'Manage Walkers', path: '/admin/walkers', icon: UserCheck },
    { title: 'Manage Walks', path: '/admin/walks', icon: Route },
    { title: 'Manage Invoices', path: '/admin/invoices', icon: Receipt },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="bg-white dark:bg-dark-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <link.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-lg font-medium text-gray-900 dark:text-white">{link.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}