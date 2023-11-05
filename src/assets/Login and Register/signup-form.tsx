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

        <Link to="/"><img src="https://media.discordapp.net/attachments/599068838151061544/1169593522853249124/f_grey.png?ex=6555f7d9&is=654382d9&hm=c7744635b2c35004d4e95e737f91a750818b504a1da277611b7521f37c8d99dd&=&width=150&height=166" alt="" className="login-logo" /></Link>
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
