import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { online: false};
    }

    render() {
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status"
                    onClick={event => {
                        const setOnline = !this.state.online;
                        this.setState({online: setOnline});
                    }}
                    >
                    <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}



Contact.propTypes = {
     name: PropTypes.string.isRequired,
     avatar: PropTypes.string.isRequired,
     online: PropTypes.bool.isRequired,
 };

export default Contact;