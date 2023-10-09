import React, { useState } from 'react';
import HomePage from './assets/home/home-page';
import './login-form.css';
import background from './assets/images/bg.jpg'


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
    <div className='row'>
      <div className='col-md3'></div>
      <div className='col-md6'>
        <div className='login-form' style={{
          backgroundImage: `url()`,
          backgroundSize: "cover",
        }}>

          <h2>Have an account?</h2>
          <form onSubmit={handleSubmit}>
            <div className='row-username'>
              <label htmlFor="username"></label>
              <br></br><input
                placeholder=' User Name'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='row-password'>
              <label htmlFor="password"></label>
              <br></br><input
                placeholder=' Password'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="row-refor">
              <a href="#" >Register</a>
              <a href="#" >Forgot Password</a>
            </div>

            <button type='submit'>Login</button>
            <p className="row-text">&mdash;  Or  &mdash;</p>
            <div className="row-google">
              <a href='#'><img src='' /></a>


            </div>
          </form>
        </div>
      </div>
      <div className='col-md3'></div>

    </div>


  );
};

export default LoginForm;
