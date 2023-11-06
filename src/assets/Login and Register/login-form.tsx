import React from 'react';
// import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Link } from 'react-router-dom';
import './login-form.css'
import GoogleButton from 'react-google-button'

const LoginForm: React.FC = () => {


  // const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  //   console.log("Google Sign-In failed.", response);
  // };

  // const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  //   console.log("Login successful", response);
  // }

  const loginGoogle = () => {
    // window.location.replace("http://localhost:8080/oauth2/authorization/google");
    window.location.href = "http://localhost:8080/oauth2/authorization/google"
  }

  return (
    <div className='login-form-container'>
      <div className="login-form-header">

        <Link to="/"><img src="https://media.discordapp.net/attachments/599068838151061544/1169593522853249124/f_grey.png?ex=6555f7d9&is=654382d9&hm=c7744635b2c35004d4e95e737f91a750818b504a1da277611b7521f37c8d99dd&=&width=150&height=166" alt="" className="login-logo" /></Link>
        <h1>Start sharing your perspective</h1>
      </div>

      <div className="login-form-action">
        <div className="login-form-action-provider">

          {/* <GoogleLogin
            className='google-login-button'
            responseType='code'
            clientId="1024615608896-1njs6ro9910mqkbgdqfil5c6dpn6a08p.apps.googleusercontent.com"
            buttonText="Continue with Google"
            redirectUri="http://localhost:8080/oauth2/authorization/google"
            scope='openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
            theme='dark'
            onSuccess={onSuccess}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            prompt='consent'
            
            // cookiePolicy={'same-origin-allow-popups'}
          /> */}
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
