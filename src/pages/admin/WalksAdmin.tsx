import React from 'react';
import { useStore } from '../../store/useStore';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { format } from 'date-fns';

export function WalksAdmin() {
  const { walks, dogs, walkers, deleteWalk } = useStore();

  const getStatusColor = (status: string) => {
    const colors = {
      scheduled: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      completed: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      cancelled: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Manage Walks</h1>
        <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 dark:hover:bg-indigo-600">
          <Plus className="h-5 w-5" />
          <span>Schedule Walk</span>
        </button>
      </div>

      <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
          <thead className="bg-gray-50 dark:bg-dark-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Dog</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Walker</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
            {walks.map((walk) => {
              const dog = dogs.find(d => d.id === walk.dogId);
              const walker = walkers.find(w => w.id === walk.walkerId);
              return (
                <tr key={walk.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {format(new Date(walk.date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{walk.startTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{dog?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{walker?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{walk.duration} min</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(walk.status)}`}>
                      {walk.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => deleteWalk(walk.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}