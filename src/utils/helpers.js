export const generateId = () => "_" + Math.random().toString(36).substr(2, 9);
export const generateToken = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const getCurrentUser =()=>{
    const session = JSON.parse(localStorage.getItem("ticketapp_session"));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((u) => u.id === session?.userId);
    return currentUser
}
export const userLogout =()=>{
    localStorage.removeItem("ticketapp_session");
}
// storage.js
const STORAGE_KEY = 'tickets';

export const getTickets = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTickets = (tickets) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const addTicket = (ticket) => {
  const tickets = getTickets();
  ticket.id = generateId();
  tickets.push(ticket);
  saveTickets(tickets);
  return ticket;
};

export const updateTicket = (id, updates) => {
  const tickets = getTickets();
  const index = tickets.findIndex(t => t.id === id);
  if (index !== -1) {
    tickets[index] = { ...tickets[index], ...updates };
    saveTickets(tickets);
    return tickets[index];
  }
  return null;
};

export const deleteTicket = (id) => {
  const tickets = getTickets();
  const filtered = tickets.filter(t => t.id !== id);
  saveTickets(filtered);
  return true;
};