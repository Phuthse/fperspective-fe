import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Link } from 'react-router-dom';
import './login-form.css'

const LoginForm: React.FC = () => {


  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {

    console.log("Google Sign-In failed.", response);

  };

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("Login successful", response);
  }

  return (
    <div className='login-form-container'>
      <div className="login-form-header">

        <Link to="/"><img src="src/images/fperspective-logo.png" alt="" className="logo" /></Link>
        <h1>Start sharing your perspective</h1>
      </div>

      <div className="login-form-action">
        <div className="login-form-action-provider">

          <GoogleLogin
            className='google-login-button'
            clientId="27389697282-aceacvu2tnn8qrjsakbi9kras8nj9f2s.apps.googleusercontent.com"
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </div>

        <div className="login-form-action-user-name">

          <div className="login-form-divider-container">
            <hr className='login-form-divider' />
            <div className='login-form-label'>OR</div>
          </div>

          <form>

            <div className="login-form-user-name">
              <label >Email</label>
              <input className="login-form-textfield" type="email" />
            </div>

            <div className="login-form-password">
              <label >Password</label>
              <input className="login-form-textfield" type="password" />
            </div>

            <div className="login-form-extra">
              <div>
                <input className="checkbox" type="checkbox" />
                <label>Remember me</label>
              </div>

              <Link to='/forgot-password'>Forgot password</Link>

            </div>

            <div className='login-button'>
              <input type="submit" value='Log in' />
            </div>

          </form>

          <div className='login-form-register'>
            Don't have an account? <Link to='/sign-up'>Create account</Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LoginForm;
