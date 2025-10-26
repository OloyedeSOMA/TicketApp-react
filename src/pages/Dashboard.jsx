import { useState, useEffect } from 'react';

import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import QuickActionCard from '../components/QuickActionCard';

import {getTickets } from '../utils/helpers';
import icon from '../assets/icons/ticket.svg';


export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  

  // Load tickets on mount
  useEffect(() => {
    setTickets(getTickets());
  }, []);

  // Recalculate stats
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    closed: tickets.filter(t => t.status === 'Closed').length,
  };
  

  

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader  />

      <main className="p-4 sm:p-6 space-y-6">
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">Overview of your ticket management system</p>
        </section>

        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Tickets" value={stats.total} dotColor="bg-indigo-600" />
          <StatCard title="Open" value={stats.open} dotColor="bg-green-500" />
          <StatCard title="In Progress" value={stats.inProgress} dotColor="bg-yellow-500" />
          <StatCard title="Closed" value={stats.closed} dotColor="bg-gray-400" />
        </section>

        
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickActionCard
              icon={icon}
              title="View All Tickets"
              desc="Manage and organize your tickets"
              bg="bg-indigo-50"
              href="/tickets"
            />
            <QuickActionCard
              icon={icon}
              title="Create New Ticket"
              desc="Start tracking a new issue"
              bg="bg-green-50"
              href="/tickets"
            />
          </div>
        </section>
      </main>
    </div>
  );
}