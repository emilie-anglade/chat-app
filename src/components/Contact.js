import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/45.jpg"/>
            <div>
                <h4 className="name">Lucille Owens</h4>
                <div className="status">
                    <div className="status-online"></div>
                        <p className="status-text">{online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;