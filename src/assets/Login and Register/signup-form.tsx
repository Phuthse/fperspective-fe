import React from 'react';
import './signup-form.css';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';


const SignUpForm: React.FC = () => {

  const responseGoogle = (response: any) => {
    console.log(response);

  };
  return (



    <div className='sign-up-form-container'>
      <div className="sign-up-form-header">

        <Link to="/"><img src="src/images/fperspective-logo.png" alt="" className="logo" /></Link>
        <h1>Start sharing your perspective</h1>
      </div>

      <div className="sign-up-form-action">
        <div className="sign-up-form-action-provider">

          <GoogleLogin
            className='google-sign-up-button'
            clientId="27389697282-aceacvu2tnn8qrjsakbi9kras8nj9f2s.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </div>
        
        <div className='sign-up-form-login'>
          Already have an account? <Link to='/login'>Log in</Link>
        </div>


      </div>

    </div>

  );
};

export default SignUpForm;
