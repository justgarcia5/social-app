import React, { useEffect, useState } from "react";
import Messages from "./Messages";

export default function Conversations(props) {
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetch('/conversations.json')
        .then(res => res.json())
        .then(data => {
            let filtered = data.filter(c => c.recipient_ids.find(r => r === props.currentUser.id) || c.sender_id === props.currentUser.id)
            setConversations(filtered)
        })
    },[])

    const fetchMessages = id => {
        fetch(`/conversations/${id}/messages.json`)
        .then(res => res.json())
        .then(data => {
            setMessages(data);
            setIsClicked(true);
        })
    }

    return(
        <div style={styles.dashboard}>
            <div style={styles.convoContent}>
                {conversations &&
                    conversations.map((conversation, i) => {
                        return(
                            <div key={conversation.id} onClick={() => fetchMessages(conversation.id)} style={styles.convoCard}>
                                <p>Recipients: {conversation.recipient_ids.map((r, i) => {
                                    return(
                                        <span key={i}>
                                            {r}
                                        </span>
                                    )
                                })

                                }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            {conversations.length > 0 &&
                <Messages
                    messages={messages}
                    conversations={conversations}
                    currentUser={props.currentUser}
                    clicked={clicked}
                />
            }
        </div>
    )
}

const styles = {
    convoCard: {
        height: 40,
        width: 300,
        backgroundColor: "lightgrey",
        color: "black",
        cursor: "pointer",
        border: '1px solid lightgrey',
        borderBottom: '1px solid darkgrey',
        padding: 10,
    },
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
    convoContent: {
        textAlign: 'left',
        backgroundColor: "lightgrey",
    },
}