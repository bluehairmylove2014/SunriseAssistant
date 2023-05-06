import React, { useRef } from 'react';
import './Allchats.scss';

const Chattabs = ({ chatlist }) => {
    // This subcomponent creates multiple chat tabs 
    // on the chat list field. The argument is an 
    // array named "chatlist" that includes the details 
    // of each chat tab.
    const chattabRef = useRef([]);
    let index = -1;
    const handleChooseChattab = (e) => {
        // This function use 'useRef hook' and id to find
        // the target chat tab to handle
        chattabRef.current.forEach(ref => {
            if(ref) {
                if(ref.id === e.target.id) {
                    // Enable active
                    ref.classList.add('active');
                    return;
                }
                else if(ref.classList.contains('active')) {
                    // Disable
                    ref.classList.remove('active');
                }
            }
        });

    }

    let chattabs = chatlist.map(chattab => {
        return (
            <button 
                type='button' className='chattab' id={chattab.id} 
                key={chattab.id} onClick={e => handleChooseChattab(e)}
                ref={el => chattabRef.current[++index] = el}
            >
                <img src={chattab.img} alt="chattab-img" />
                <div className='chattab-detail'>
                    <div className='chattab-detail-title'>
                        <span>{chattab.name}</span>
                        <span>{chattab.last_msg.time}</span>
                    </div>
                    <div className='chattab-detail-content'>
                        <span>{chattab.last_msg.msg}</span>
                        {chattab.is_mark && <i className="fi fi-ss-thumbtack"></i>}
                    </div>
                </div>
            </button>
        )
    });

    return (
        <>{chattabs}</>
    );
}

export default Chattabs;
