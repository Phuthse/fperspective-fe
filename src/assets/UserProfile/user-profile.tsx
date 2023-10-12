import './user-profile.css';
import FollowButton from '../home/button/FollowButton/follow-button';


const UserProfile: React.FC = () => {


  return (
    <>

      <div className="container">

        <div className='main-content'>

          <div className="user-profile-header-container">
            <header className="user-profile-header">
              <div className="user-profile-header-top">

                <span className="user-profile-avatar">
                  <img src="https://cdn.vox-cdn.com/thumbor/RcAdlMhw-adDQnJiVWKRPUSP10M=/0x0:2024x1038/1200x800/filters:focal(989x320:1311x642)/cdn.vox-cdn.com/uploads/chorus_image/image/71278865/Screen_Shot_2022_08_23_at_4.22.21_PM.0.png" />
                </span>

                <div className="user-profile-header-action">

                  <FollowButton />

                </div>
              </div>

              <div className="user-profile-header-body">

                <div className="user-profile-header-full-name">
                  <h1>
                    Andrew Tate
                  </h1>
                </div>

                <p className='user-profile-header-bio'>
                  I make the big bucks, while you're still driving a Ford Focus, I drive Bugatti
                </p>

                <div className="user-profile-header-detail">

                  <span className="user-profile-header-country">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aas0rqckv0742cinar0jk4k3wc0lsalf" className="crayons-icon mr-2 shrink-0"><title id="aas0rqckv0742cinar0jk4k3wc0lsalf">Location</title>
                      <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>

                    <span>
                      New York, USA
                    </span>
                  </span>

                  <span className="user-profile-header-join">
                    <svg width="24" height="24" className="crayons-icon mr-2 shrink-0">
                      <path d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z"></path>
                    </svg>

                    <span>
                      Joined on&nbsp;<time dateTime="2023-09-30T14:57:22Z" className="date">Sep 30, 2023</time>
                    </span>
                  </span>


                  {/* EXTRA LINK IF WANT TO */}
                  {/* <a href="https://github.com/mikhaelesa" target="_blank" rel="noopener me" className="profile-header__meta__item p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad8cgxp7y7ks8r5exmhwwdivqjpclwpp" className="crayons-icon shrink-0"><title id="ad8cgxp7y7ks8r5exmhwwdivqjpclwpp">github website</title>
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                    </svg>

                  </a> */}

                </div>
              </div>

              <div className="user-profile-header-work">
                <strong className="crayons-definition__title">
                  <p>Work</p>
                </strong>
                <p>
                  GIGA CHAD TOP G
                </p>
              </div>

            </header>

          </div>

          <div className="user-profile-body-container">

            <div className="user-profile-body-side">

              <span className='side-info'>
                <svg width="24" height="24">
                  <path d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"></path>
                </svg>

                <span>
                  6 perspective shared
                </span>
              </span>

              <span className='side-info'>
                <svg width="24" height="24" >
                  <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"></path>
                </svg>

                <span>
                  13 tags followed
                </span>
              </span>

              <span className='side-info'>
                <svg width="24" height="24" >
                  <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                </svg>
                <span>
                  10 people followed
                </span>
              </span>

              <span className='side-info'>
                <svg width="24" height="24" >
                  <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                </svg>

                <span>
                  18 followers
                </span>
              </span>

            </div>

            <div className="user-profile-body-main">

              <h1>hi</h1>

            </div>

          </div>

        </div>


      </div >
    </>
  );
};

export default UserProfile;
