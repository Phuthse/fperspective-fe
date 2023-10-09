import React, { useState } from 'react';
import './login-form.css';
import background from './assets/images/bg.jpg'
import LoginForm from './login-form';


const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check correct
    if (SubmitEvent) {
        setIsSignUp(true); // Set login state to true
    }
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  // Conditional rendering based on login state
  if (isSignUp) {
    return <LoginForm />; // Render your home-page.tsx component here
  }

  return (
    <div className='row'>
      <div className='col-md3'></div>
      <div className='col-md6'>
        <div className='login-form' style={{backgroundImage: `url()`,
        backgroundSize: "cover",
      }}>
        
          <h2>Sign Up For Free</h2>
          <form onSubmit={handleSubmit}>
          <div className='row-username'>
            <label htmlFor="email"></label>
            <br></br><input
              placeholder=' Email'
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

        

          <button type='submit'>Sign Up</button>
          
          </form>
        </div>
      </div>
      <div className='col-md3'></div>

    </div>

    
  );
};

export default SignUpForm;
