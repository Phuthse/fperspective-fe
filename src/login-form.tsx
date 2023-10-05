import React, { useState } from 'react';
import HomePage from './assets/home/home-page';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check login
    if (username === 'ad' && password === '1') {
      setIsLoggedIn(true); // Set login state to true
    }

    // Reset form fields after submission
    setUsername('');
    setPassword('');
  };

  // Conditional rendering based on login state
  if (isLoggedIn) {
    return <HomePage />; // Render your home-page.tsx component here
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
