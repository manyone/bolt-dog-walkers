import { create } from 'zustand';
import type { Owner, Dog, Walker, Walk, Booking, Invoice } from '../types';

interface Store {
  darkMode: boolean;
  owners: Owner[];
  dogs: Dog[];
  walkers: Walker[];
  walks: Walk[];
  bookings: Booking[];
  invoices: Invoice[];
  toggleDarkMode: () => void;
  addOwner: (owner: Owner) => void;
  updateOwner: (id: string, owner: Owner) => void;
  deleteOwner: (id: string) => void;
  addDog: (dog: Dog) => void;
  updateDog: (id: string, dog: Dog) => void;
  deleteDog: (id: string) => void;
  addWalker: (walker: Walker) => void;
  updateWalker: (id: string, walker: Walker) => void;
  deleteWalker: (id: string) => void;
  addWalk: (walk: Walk) => void;
  updateWalk: (id: string, walk: Walk) => void;
  deleteWalk: (id: string) => void;
  addBooking: (booking: Booking) => void;
  addInvoice: (invoice: Invoice) => void;
  updateInvoice: (id: string, invoice: Invoice) => void;
  deleteInvoice: (id: string) => void;
  updateInvoiceStatus: (id: string, status: Invoice['status']) => void;
}

export const useStore = create<Store>((set) => ({
  darkMode: false,
  owners: [],
  dogs: [],
  walkers: [],
  walks: [],
  bookings: [],
  invoices: [],
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  addOwner: (owner) => set((state) => ({ owners: [...state.owners, owner] })),
  updateOwner: (id, owner) => set((state) => ({
    owners: state.owners.map((o) => (o.id === id ? owner : o)),
  })),
  deleteOwner: (id) => set((state) => ({
    owners: state.owners.filter((o) => o.id !== id),
  })),
  addDog: (dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
  updateDog: (id, dog) => set((state) => ({
    dogs: state.dogs.map((d) => (d.id === id ? dog : d)),
  })),
  deleteDog: (id) => set((state) => ({
    dogs: state.dogs.filter((d) => d.id !== id),
  })),
  addWalker: (walker) => set((state) => ({ walkers: [...state.walkers, walker] })),
  updateWalker: (id, walker) => set((state) => ({
    walkers: state.walkers.map((w) => (w.id === id ? walker : w)),
  })),
  deleteWalker: (id) => set((state) => ({
    walkers: state.walkers.filter((w) => w.id !== id),
  })),
  addWalk: (walk) => set((state) => ({ walks: [...state.walks, walk] })),
  updateWalk: (id, walk) => set((state) => ({
    walks: state.walks.map((w) => (w.id === id ? walk : w)),
  })),
  deleteWalk: (id) => set((state) => ({
    walks: state.walks.filter((w) => w.id !== id),
  })),
  addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
  addInvoice: (invoice) => set((state) => ({ invoices: [...state.invoices, invoice] })),
  updateInvoice: (id, invoice) => set((state) => ({
    invoices: state.invoices.map((i) => (i.id === id ? invoice : i)),
  })),
  deleteInvoice: (id) => set((state) => ({
    invoices: state.invoices.filter((i) => i.id !== id),
  })),
  updateInvoiceStatus: (id, status) => set((state) => ({
    invoices: state.invoices.map((i) => 
      i.id === id ? { ...i, status, paymentDate: status === 'paid' ? new Date().toISOString() : i.paymentDate } : i
    ),
  })),
}));