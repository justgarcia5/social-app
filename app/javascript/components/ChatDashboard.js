import React, { useEffect, useState } from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";

export default function ChatDashboard(props) {
    const [messages, setMessages] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [defaultMessages, setDefaultMessages] = useState();

    useEffect(() => {
        if(props.conversations.length > 0) {
            fetch(`/conversations/${props.conversations[0].id}/messages.json`)
                .then(res => res.json())
                .then(data => setDefaultMessages(data))
        }
    },[props.conversations])

    const fetchMessages = id => {
        fetch(`/conversations/${id}/messages.json`)
        .then(res => res.json())
        .then(data => {
            setMessages(data);
            setIsClicked(true);
        })
    }
    // console.log(messages)

    return(
        <div style={styles.dashboard}>
            <Conversations
                conversations={props.conversations}
                fetchMessages={fetchMessages}
            />
            <Messages
                messages={messages.length > 0 ? messages : defaultMessages}
                conversations={props.conversations}
                currentUser={props.currentUser}
                isClicked={isClicked}
                fetchMessages={fetchMessages}
            />
        </div>
    )
}

const styles = {
    dashboard: {
        display: "flex",
        justifyContent: 'space-evenly',
        margin: 'auto',
        width: 1000,
        height: 600,
        border: '1px solid lightgrey',
        borderRadius: 8,
        overflow: 'hidden'
    },
}
