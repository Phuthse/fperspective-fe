import React from 'react';
import { Link } from 'react-router-dom';
import './forgot-password.css'

const ForgotPasswordForm: React.FC = () => {

    return (
        <div className='forgot-password-form-container'>
            <div className="forgot-password-form-header">

                <Link to="/"><img src="src/images/fperspective-logo.png" alt="" className="logo" /></Link>
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
