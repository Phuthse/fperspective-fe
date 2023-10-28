import React from 'react';
import './user-setting-profile.css';


const UserSettingProfile: React.FC = () => {


    return (
        <>

            <div className="user-setting-profile-container">
                <h2>User</h2>

                <div className="user-setting-profile-username">
                    <label>Username</label>
                    <input maxLength={30} placeholder="John Doe" size={30} type="text" />
                </div>

                <div className="user-setting-profile-bio">
                    <label>Bio</label>
                    <textarea
                        placeholder="Something about yourself..."
                    />
                </div>

                <div className="user-setting-profile-avatar-container">
                    <label>Profile image</label>

                    <div className="user-setting-profile-avatar">
                        <span>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--31AgXBLr--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1155334/af5758b5-fc22-4da7-bc64-5fea758733fb.jpg" />
                        </span>
                        <input accept="image/*" type="file" />
                    </div>
                </div>

                <div className="user-setting-profile-save">
                    <button type='submit'>Update profile</button>
                </div>
            </div>


        </>
    );
};

export default UserSettingProfile;
