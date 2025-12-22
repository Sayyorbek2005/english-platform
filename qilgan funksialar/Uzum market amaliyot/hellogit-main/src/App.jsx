// src/App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './page/home/Home';
import Login from './page/login/Login';
import Dashboard from './page/dashboard/Dashboard';
import Section from './page/section/Section';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/section" element={<Section />} />
      </Route>
    </Routes>
  );
}

export default App;
