import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Bookings } from './pages/Bookings';
import { Dogs } from './pages/Dogs';
import { Walkers } from './pages/Walkers';
import { Schedule } from './pages/Schedule';
import { Admin } from './pages/admin/Admin';
import { OwnersAdmin } from './pages/admin/OwnersAdmin';
import { DogsAdmin } from './pages/admin/DogsAdmin';
import { WalkersAdmin } from './pages/admin/WalkersAdmin';
import { WalksAdmin } from './pages/admin/WalksAdmin';
import { InvoicesAdmin } from './pages/admin/InvoicesAdmin';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/walkers" element={<Walkers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/owners" element={<OwnersAdmin />} />
          <Route path="/admin/dogs" element={<DogsAdmin />} />
          <Route path="/admin/walkers" element={<WalkersAdmin />} />
          <Route path="/admin/walks" element={<WalksAdmin />} />
          <Route path="/admin/invoices" element={<InvoicesAdmin />} />
        </Routes>
      </Layout>
    </Router>
  );
}