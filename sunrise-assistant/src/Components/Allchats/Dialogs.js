import React from 'react';

const Dialogs = ({dialogs}) => {
    let index = 0;
    const view = dialogs.map(dialog => {
        if(dialog) {
            if(dialog.sender === 'User') {
                return (
                    <div className='user-dialog' key={`dialog@${index++}`}>
                        <div className="bubble-container">
                            <div className="bubble">
                                {dialog.msg}
                            </div>
                        </div>
                        <img src="https://aldortio.sirv.com/Sunrise%20Assistant/User/me-small.png" alt="user" />
                    </div>
                );
            }
            else {
                return (
                    <div className='assistant-dialog' key={`dialog@${index++}`}>
                        <img src="https://aldortio.sirv.com/Sunrise%20Assistant/Assistants/assistant%20(9).png" alt="assistant" />
                        <div className="bubble-container">
                            <div className="bubble">
                                {dialog.msg}
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else {
            return (<></>);
        }
    })
    return (
        <>{view}</>
    );
}

export default Dialogs;
