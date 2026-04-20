import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="page-container">
      <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: '40px', maxWidth: '600px', backgroundColor: 'white', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 30px rgba(99, 102, 241, 0.25)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#6366f1'
        }}>
          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <div>
          <h1 style={{ fontSize: '2.4rem', color: '#333', marginBottom: '15px', lineHeight: '1.2' }}>
            Welcome back,<br />
            {user?.name}!
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#1f2937', margin: 0 }}>
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
