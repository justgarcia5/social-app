import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Conversations from './Conversations';

const Welcome = (props) => {
    const [currentUser, setCurrentUser] = useState(props.current_user);
    return (
        <div>
            <h1 style={styles.appTitle}>Chat</h1>
            <Conversations currentUser={currentUser} />
        </div>
    )
};

const styles = {
    appTitle: {
        textAlign: 'center',
    }
}

export default Welcome;