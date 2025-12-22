// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Tekshiruv: majburiy maydonlar
    if (!username || !password) {
      setError('Iltimos, username va password kiriting.');
      return;
    }

    // Oddiy token yozish (haqiqiy login emas)
    localStorage.setItem('token', 'demo-token');

    // Redirect
    navigate('/dashboard');
  };

  return (
    <div className='login' style={{ padding: '2rem' }}>
      <div className="form">

        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={{ textAlign: 'left' }}>
            <label>Username: </label>
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Username ...'
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label>Password: </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password ...'
            />
          </div>
          <button type="submit" style={{ marginTop: '1rem' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
