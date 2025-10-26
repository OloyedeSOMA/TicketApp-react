import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import DashboardHeader from '../components/DashboardHeader';
import TicketCard from '../components/TicketCard';
import TicketModal from '../components/TicketModal';
import {getTickets, addTicket, updateTicket, deleteTicket } from '../utils/helpers';
export default function TicketManager (){
    const [tickets, setTickets] = useState([]);
    const [modal, setModal] = useState({ isOpen: false, mode: 'create', ticket: null });
    const openModal = (mode, ticket = null) => {
    setModal({ isOpen: true, mode, ticket });
  };

  useEffect(() => {
      setTickets(getTickets());
    }, []);

  const closeModal = () => {
    setModal({ isOpen: false, mode: 'create', ticket: null });
  };
  
  const handleSave = (formData) => {
    if (modal.mode === 'create') {
      const newTicket = addTicket(formData);
      toast.info("ticket added successfully");
      setTickets([...tickets, newTicket]);
    } else if (modal.mode === 'edit') {
      const updated = updateTicket(modal.ticket.id, formData);
      toast.info("ticket updated successfully");
      setTickets(tickets.map(t => t.id === updated.id ? updated : t));
    } else if (modal.mode === 'delete') {
      deleteTicket(modal.ticket.id);
      toast.info("ticket deleted successfully");
      setTickets(tickets.filter(t => t.id !== modal.ticket.id));
    }
  };


    return(
        <div className="min-h-screen bg-gray-50">
              <DashboardHeader/>
            <main className="p-4 sm:p-6 space-y-6">
                <section>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <div>
                    <h2 className="text-2xl font-bold text-gray-900">Tickets</h2>
                    <p className="text-gray-600">Manage and track all your support tickets</p>
                    </div>
                    <button
                    onClick={() => openModal('create')}
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                    >
                    + Create New Ticket
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tickets.length === 0 ? (
                    <p className="text-gray-500 col-span-2 text-center py-8">No tickets yet. Create one!</p>
                    ) : (
                    tickets.map(ticket => (
                        <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        onEdit={() => openModal('edit', ticket)}
                        onDelete={() => openModal('delete', ticket)}
                        />
                    ))
                    )}
                </div>
                </section>
            

            <TicketModal
                isOpen={modal.isOpen}
                onClose={closeModal}
                mode={modal.mode}
                ticket={modal.ticket}
                onSave={handleSave}
            />
        </main>
    </div>
    )
}

