import React from 'react';
import { useStore } from '../store/useStore';
import { User, Star, Plus } from 'lucide-react';

export function Walkers() {
  const { walkers } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dog Walkers</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          <span>Add Walker</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {walkers.map((walker) => (
          <div key={walker.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <User className="h-12 w-12 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{walker.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{walker.rating}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">{walker.email}</p>
              <p className="text-sm text-gray-600">{walker.phone}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Availability</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(walker.availability).map(([day, slots]) => (
                    <div key={day} className="text-xs">
                      <span className="font-medium">{day}:</span>{' '}
                      <span className="text-gray-600">{slots.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}