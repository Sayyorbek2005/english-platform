// src/pages/dashboard/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='dashboard' style={{ padding: '2rem' }}>
      <div className="form">

        <h2>Dashboard</h2>
        <p>Bu protected sahifa.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
