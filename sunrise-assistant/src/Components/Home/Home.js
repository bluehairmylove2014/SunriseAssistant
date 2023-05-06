
import './Home.scss';

import React, { useEffect, useRef, useState } from 'react';
import {
    useParams,
    useNavigate
} from 'react-router-dom';

// Subcomponent 
import Allchats from '../Allchats/Allchats';

const Home = () => {
    const tabBtnRef = useRef([]);
    const navigate = useNavigate();
    const params = useParams();
    const [curtab, setCurtab] = useState(params.page);
    useEffect (() => {
        tabBtnRef.current.forEach(btnRef => {
            if(btnRef.id === curtab) {
                btnRef.classList.add('active');
                return;
            }
        })
    }, [curtab])
    
    const changeTab = (e) => {
        const nexttab = e.target.id;
        // Change current tab
        setCurtab(nexttab);
        console.log(nexttab);
            // Change the link
        navigate(`/home/${nexttab}`);

        // Change the button interface
        tabBtnRef.current.forEach(btnRef => {
            if(btnRef.id === nexttab) {
                btnRef.classList.add('active');
            }
            else if(btnRef.classList.contains('active')) {
                btnRef.classList.remove('active');
            }
        })
    }
    return (
        <div className="home">
            <div className="tab-management">
                <div>
                    <img src="/Images/Graphics/logo-trans-words-vertical.png" className='logo' alt="logo" />

                    <button type='button' ref={el => tabBtnRef.current[0] = el} id="allchats" onClick={e => changeTab(e)}>
                        <div className="tab-icon">
                            <img src="/Images/Graphics/bubble-chat1.png" alt="allchats" />
                        </div>
                        <p>All Chats</p>
                    </button>
                    <button type='button' ref={el => tabBtnRef.current[1] = el} id="gallery" onClick={e => changeTab(e)}>
                        <div className="tab-icon">
                            <img src="/Images/Graphics/folder.png" alt="gallery" />
                        </div>
                        <p>Gallery</p>
                    </button>
                    <button type='button' ref={el => tabBtnRef.current[2] = el} id="assistant" onClick={e => changeTab(e)}>
                        <div className="tab-icon">
                            <img src="/Images/Graphics/bot.png" alt="assistant" />
                        </div>
                        <p>Assistant</p>
                    </button>

                    <hr />
                    <button type='button' ref={el => tabBtnRef.current[3] = el} id="calendar" onClick={e => changeTab(e)}>
                        <div className="tab-icon">
                            <img src="/Images/Graphics/calendar.png" alt="calendar" />
                        </div>
                        <p>Calendar</p>
                    </button>
                </div>
                <div>
                    <button type='button' ref={el => tabBtnRef.current[4] = el} id="setting" onClick={e => changeTab(e)}>
                        <div className="tab-icon">
                            <img src="/Images/Graphics/setting.png" alt="setting" />
                        </div>
                        <p>Setting</p>
                    </button>
                </div>
            </div>

            {/* Switch */}
            <div className="content">
                {curtab === 'allchats' && <Allchats/>}
            </div>
        </div>
    );
}

export default Home;


