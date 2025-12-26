import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Modules/Login/Login';
import Layout from './Modules/Dashboard/Layout';
import Employee from './Modules/Employee/addemployee';

function App() {
  useEffect(() => {
   
    if (window.location.pathname === '/') {
      document.body.classList.add('login-page');
    } else {
      document.body.classList.remove('login-page');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="employe" element={<Employee />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
