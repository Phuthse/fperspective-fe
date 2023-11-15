import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './login-form.css';
import GoogleButton from 'react-google-button';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const LoginForm: React.FC = () => {
  const loginGoogle = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/oauth2/authorization/google`;
  };

  const [loginUser, setLoginUser] = useState<User | null>();
  const fetchLoginData = async () => {
    try {
      const response = await loginApi.get("/currentUser", { withCredentials: true });
      setLoginUser(response.data);
    } catch (error) {
      console.error(error);
      setLoginUser(undefined); // Set loginUser to undefined in case of an error
    }
  };

  useEffect(() => {
    fetchLoginData();
  }, []);

  // Redirect if loginUser is not null or undefined
  useEffect(() => {
    if (loginUser !== null && loginUser !== undefined) {
      window.location.href = '/'; // Redirect to the desired URL (e.g., '/')
    }
  }, [loginUser]);

  return (
    <div className='login-form-container'>
      <div className="login-form-header">
        <Link to="/"><img src="https://media.discordapp.net/attachments/599068838151061544/1169593522853249124/f_grey.png?ex=6555f7d9&is=654382d9&hm=c7744635b2c35004d4e95e737f91a750818b504a1da277611b7521f37c8d99dd&=&width=150&height=166" alt="" className="login-logo" /></Link>
        <h1>Start sharing your perspective</h1>
      </div>

      <div className="login-form-action">
        <div className="login-form-action-provider">
          <GoogleButton
            type="dark"
            onClick={loginGoogle}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
