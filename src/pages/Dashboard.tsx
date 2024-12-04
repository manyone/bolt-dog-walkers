import React from 'react';
import { Calendar, Users, Dog, Clock } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Dashboard() {
  const { walks, dogs, walkers, bookings } = useStore();

  const stats = [
    { title: 'Active Bookings', value: bookings.length, icon: Calendar },
    { title: 'Registered Dogs', value: dogs.length, icon: Dog },
    { title: 'Dog Walkers', value: walkers.length, icon: Users },
    { title: 'Completed Walks', value: walks.filter(w => w.status === 'completed').length, icon: Clock },
  ];

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=800&q=80',
      alt: 'Professional dog walker with multiple dogs in park'
    },
    {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
      alt: 'Happy dogs running on grass'
    },
    {
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
      alt: 'Dog walker with golden retriever'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Photo Banner */}
      <div className="grid grid-cols-3 gap-4 h-64 mb-8 rounded-lg overflow-hidden">
        {photos.map((photo, index) => (
          <div key={index} className="relative h-full overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upcoming Walks</h2>
          {/* Add upcoming walks list component */}
        </div>
        
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Activities</h2>
          {/* Add recent activities component */}
        </div>
      </div>
    </div>
  );
}