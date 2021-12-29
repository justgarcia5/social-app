import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ChatDashboard from './ChatDashboard';

const Welcome = (props) => {
    const [currentUser, setCurrentUser] = useState(props.current_user);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        fetch('/conversations.json')
        .then(res => res.json())
        .then(data => {
            let filtered = data.filter(c => c.recipient_ids.find(r => r === currentUser.id) || c.sender_id === currentUser.id)
            setConversations(filtered)
        })
    },[])

    return (
        <div>
            <h1 style={styles.appTitle}>Chat</h1>
            <ChatDashboard
                currentUser={currentUser}
                conversations={conversations}
            />
        </div>
    )
};

const styles = {
    appTitle: {
        textAlign: 'center',
    }
}

export default Welcome;