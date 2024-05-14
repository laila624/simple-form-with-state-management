import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // 
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData);
    navigate('/userinfo'); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
