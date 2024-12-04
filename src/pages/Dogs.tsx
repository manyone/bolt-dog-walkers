import React from 'react';
import { useStore } from '../store/useStore';
import { Dog as DogIcon, Plus } from 'lucide-react';

export function Dogs() {
  const { dogs, owners } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dogs</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          <span>Add Dog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map((dog) => {
          const owner = owners.find(o => o.id === dog.ownerId);
          return (
            <div key={dog.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4">
                <DogIcon className="h-12 w-12 text-indigo-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{dog.name}</h3>
                  <p className="text-gray-600">{dog.breed}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">Age: {dog.age} years</p>
                <p className="text-sm text-gray-600">Owner: {owner?.name}</p>
                {dog.specialNeeds.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {dog.specialNeeds.map((need) => (
                      <span key={need} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                        {need}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}