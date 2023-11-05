import React from 'react';
import { Link } from 'react-router-dom';
import './forgot-password.css'

const ForgotPasswordForm: React.FC = () => {

    return (
        <div className='forgot-password-form-container'>
            <div className="forgot-password-form-header">

                <Link to="/"><img src="https://media.discordapp.net/attachments/599068838151061544/1169593522853249124/f_grey.png?ex=6555f7d9&is=654382d9&hm=c7744635b2c35004d4e95e737f91a750818b504a1da277611b7521f37c8d99dd&=&width=150&height=166" alt="" className="login-logo" /></Link>
                <h1>Forgot your password ?</h1>
            </div>

            <div className="forgot-password-form">

                <form>

                    <div className="forgot-password-form-email">
                        <label >Email</label>
                        <input className="forgot-password-form-textfield" type="text" />
                    </div>

                    <div className='forgot-password-button'>
                        <input type="submit" value='Send reset link' />
                        <Link to='/login'>Go back</Link>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default ForgotPasswordForm;
