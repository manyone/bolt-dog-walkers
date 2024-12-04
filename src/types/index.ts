export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  ownerId: string;
  notes: string;
  specialNeeds: string[];
}

export interface Walker {
  id: string;
  name: string;
  email: string;
  phone: string;
  availability: {
    [key: string]: string[]; // day: timeSlots
  };
  rating: number;
}

export interface Walk {
  id: string;
  dogId: string;
  walkerId: string;
  date: string;
  startTime: string;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string;
}

export interface Booking {
  id: string;
  ownerId: string;
  dogId: string;
  walkerId: string;
  walkId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  payment: {
    amount: number;
    status: 'pending' | 'paid';
  };
}

export interface Invoice {
  id: string;
  ownerId: string;
  bookingIds: string[];
  issueDate: string;
  dueDate: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  paymentDate?: string;
  notes?: string;
}