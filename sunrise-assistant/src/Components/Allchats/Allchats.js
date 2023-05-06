import React, { useEffect, useRef, useState } from 'react';
import './Allchats.scss'

// Subcomponent
import ChatTabs from './Chattabs';
import Dialogs from './Dialogs';

const Allchats = () => {
    const dialogFieldRef = useRef(null);
    const [chatList, setChatlist] = useState([]);
    const [dialogsData, setDialogs] = useState([]);

    useEffect(() => {
        const sampleChatListData = [
            {
                id: 'chattab@1',
                name: 'Khử răng cưa',
                last_msg: {
                    msg: 'Nên dùng khử răng cưa FXAA hay TAA, máy tôi mạnh',
                    time: '4m'
                },
                img: 'https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(9).png',
                is_mark: true
            },
            {
                id: 'chattab@2',
                name: 'Máy tính không lên nguồn',
                last_msg: {
                    msg: 'Kiểm tra lại nguồn xem sao',
                    time: '6h'
                },
                img: 'https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(1).png',
                is_mark: false
            },
            {
                id: 'chattab@3',
                name: 'Lỗi kết nối mạng',
                last_msg: {
                    msg: 'Kiểm tra lại kết nối mạng',
                    time: '10h'
                },
                img: 'https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(2).png',
                is_mark: true
            },
            {
                id: 'chattab@4',
                name: 'Không thể cài đặt phần mềm',
                last_msg: {
                    msg: 'Bạn có thể kiểm tra xem phần mềm cần thiết đã được cài đặt hay chưa',
                    time: '1d'
                },
                img: 'https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(3).png',
                is_mark: false
            },
            {
                id: 'chattab@5',
                name: 'Thiết bị lỗi',
                last_msg: {
                    msg: 'Bạn có thể kiểm tra xem có phần mềm nào xung đột với thiết bị không',
                    time: '2d'
                },
                img: 'https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(4).png',
                is_mark: true
            },
            {
                id: 'chattab@6',
                name: "Shingeki no Kyojin",
                last_msg: {
                    msg: "Attack on Titan là một bộ anime kinh điển của nhật bản",
                    time: "3h"
                },
                img: "https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(5).png",
                is_mark: true
            },
            {
                id: 'chattab@7',
                name: "One Piece",
                last_msg: {
                    msg: "Vua hải tặc là một bộ anime nổi tiếng khắp thế giới",
                    time: "5m"
                },
                img: "https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(6).png",
                is_mark: false
            },
            {
                id: 'chattab@8',
                name: "Kimi no Na Wa",
                last_msg: {
                    msg: "Your Name là một bộ phim hoạt hình Nhật Bản rất thành công",
                    time: "10m"
                },
                img: "https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(7).png",
                is_mark: true
            },
            {
                id: 'chattab@9',
                name: "Naruto",
                last_msg: {
                    msg: "Naruto là một bộ anime rất nổi tiếng của Nhật Bản",
                    time: "30m"
                },
                img: "https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(8).png",
                is_mark: false
            },
        ]
        setChatlist(sampleChatListData);
        setDialogs([
            {
                sender: 'User',
                msg: "Hi, can you help me book a flight?",
                time: '19:01'
            },
            {
                sender: 'Assistant',
                msg: "Of course! Where are you flying from and to, and when?",
                time: '19:01'
            },
            {
                sender: 'User',
                msg: "I'm flying from New York to Los Angeles on June 1st.",
                time: '19:02'
            },
            {
                sender: 'Assistant',
                msg: "Great. Do you have a preferred airline or a budget in mind?",
                time: '19:02'
            },
            {
                sender: 'User',
                msg: "No preference, but I'm looking to keep the cost under $300",
                time: '19:03'
            },
            {
                sender: 'Assistant',
                msg: "Understood. Let me check available flights for you. It looks like we have a few options within your budget. Would you prefer a morning or evening departure?",
                time: '19:03'
            },
            {
                sender: 'User',
                msg: "Morning, please",
                time: '19:04'
            },
            {
                sender: 'Assistant',
                msg: "Alright. I've found a flight with Delta Airlines departing at 9am and arriving in Los Angeles at 11:30am for $275. Would you like me to book that for you?",
                time: '19:04'
            },
            {
                sender: 'User',
                msg: "Yes, please",
                time: '19:05'
            },
            {
                sender: 'Assistant',
                msg: "Alright, I'll need some information from you to complete the booking. What is your full name and email address?",
                time: '19:06'
            },
            {
                sender: 'User',
                msg: "Okay thanks, have a good time today!",
                time: '19:07'
            },
            {
                sender: 'Assistant',
                msg: "Thanks sir! If you have any concern, do not hestitate to contact me.",
                time: '19:08'
            },
            {
                sender: 'User',
                msg: "Okay.",
                time: '19:09'
            },
            {
                sender: 'Assistant',
                msg: ":3",
                time: '19:10'
            },
            {
                sender: 'User',
                msg: "Are you still there?",
                time: '19:07'
            },
            {
                sender: 'Assistant',
                msg: "Yes sir! May I help you?",
                time: '19:08'
            },
            {
                sender: 'User',
                msg: "Ah, I just want to say 'good night'",
                time: '19:09'
            },
            {
                sender: 'Assistant',
                msg: "Oh, thanks you sir! Sweet dreams",
                time: '19:10'
            },
        ])
    }, [])

    useEffect(() => {
        dialogFieldRef.current.scrollTop = dialogFieldRef.current.scrollHeight;
    }, [dialogsData])

    return (
        <div className="allchats">
            <div className="chatlist">
                <div className="search-chat">
                    {/* <input type="text" /> */}
                    <div className="overlay">
                        <i className="fi fi-rr-search"></i>
                        <span>Search</span>
                    </div>
                </div>
                <div className="chattab-container">
                    {chatList.length ? <ChatTabs chatlist={chatList}/> : <img src='' alt='' />}
                </div>
            </div>
            <div className="chatview">
                <div className="chatview-title">
                    <div className="title">
                        <p>Khử răng cưa</p>
                        <p>Create at January 21, 2022</p>
                    </div>
                    <div className="btn-container">
                        <button type='button'>
                            <i className="fi fi-rr-search"></i>
                        </button>
                        <button type='button'>
                            <i className="fi fi-bs-menu-dots-vertical"></i>
                        </button>
                    </div>
                </div>
                <div className="chatview-content">
                    <div className="dialog-field" ref={dialogFieldRef}>
                        <div className="dialog-content">
                            <Dialogs dialogs={dialogsData}/>
                        </div>
                    </div>
                    <div className="user-interact-field">
                        <div className='msg-container'>
                            <div className="yourmsg-container">
                                <i className="fi fi-rs-clip"></i>
                                <span>
                                    Your message
                                </span>
                            </div>
                            <input type="text" />
                        </div>
                        <button type='button'>
                            <i className="fi fi-ss-microphone"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allchats;
