import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import UserInfoPage from './components/UserInfoPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/userinfo" element={<UserInfoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
