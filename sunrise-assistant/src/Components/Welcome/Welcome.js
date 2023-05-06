
import React from 'react';
import './Welcome.scss';
import {
    Link
} from 'react-router-dom';


export default function Welcome() {
    return (
        <React.Fragment>
            <div className="welcome">
                <div className='forest'>
                    <div className="left-side">
                        <Link to='/'>About us</Link>
                        <Link to='/'>License</Link>
                    </div>
                    <div className="logo">
                        <img src="/Images/Graphics/logo-trans-words.png" alt="logo" />
                    </div>
                    <div className="right-side">
                        <Link to='/'>
                            <img src="/Images/Graphics/premium-quality-white.png" alt="premium-icon" />
                            <span>Premium</span>
                        </Link>
                    </div>
                </div>

                <div className="home-body">
                    <div className="intro">
                        <p>Explore all the features of a personal assistant</p>
                        <Link to='/home/allchats'>Try it now!</Link>
                    </div>
                    <p className="text-decor">future</p>
                    <img src="/Images/Graphics/plane.png" alt="plane" />
                    <div className="city"></div>
                </div>

                <div className="footer">
                    <div className="social-link">
                        <Link to='https://www.facebook.com/MinMinPD2211/' target='_blank' className="facebook">
                            <img src="/Images/Graphics/facebook.png" alt="facebook" />
                        </Link>
                        <Link to='https://www.instagram.com/phucdat_dm/' target='_blank' className="instagram">
                            <img src="/Images/Graphics/instagram.png" alt="instagram" />
                        </Link>
                        <Link to='https://github.com/bluehairmylove2014' target='_blank' className="github">
                            <img src="/Images/Graphics/github(1).png" alt="github" />
                        </Link>
                        <Link to='https://www.youtube.com/channel/UCD2T2jAlO282XPmDfftRpvw' target='_blank' className="youtube">
                            <img src="/Images/Graphics/youtube.png" alt="youtube" />
                        </Link>
                        <Link to='https://twitter.com/PHAN_DUONG_MINH' target='_blank' className="twitter">
                            <img src="/Images/Graphics/twitter.png" alt="twitter" />
                        </Link>
                    </div>
                    <div className="tab-menu">
                        <Link to='/' className="about">
                            about
                        </Link>
                        <Link to='/' className="features">
                            features
                        </Link>
                        <Link to='/' className="pricing">
                            pricing
                        </Link>
                        <Link to='/' className="license">
                            license
                        </Link>
                        <Link to='/' className="team">
                            team
                        </Link>
                    </div>
                    <div className="copyright">
                        <hr/>
                        <p>Powered by Sunrise Continent © 2023 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}