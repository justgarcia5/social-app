import React, { useState, useEffect } from "react";

export default function Messages(props) {
    const [lastConvo, setLastConvo] = useState();

    useEffect(() => {
        const convoIndex = props.conversations.length - props.conversations.length;
        fetch(`/conversations/${props.conversations[convoIndex].id}/messages.json`)
            .then(res => res.json())
            .then(data => setLastConvo(data))
    },[])

    return(
        <div style={styles.messagesDiv}>
            {props.clicked && props.messages &&
                props.messages.map((message, i) => {
                    return(
                        <div key={message.id} style={(message.user_id === props.currentUser.id) ? styles.userMessageCard : styles.recipientMessageCard}>
                            <p style={styles.message}>{message.body}</p>
                        </div>
                    )
                })
            }
            {!props.clicked && lastConvo &&
                lastConvo.map((message, i) => {
                    return(
                        <div key={message.id} style={(message.user_id === props.currentUser.id) ? styles.userMessageCard : styles.recipientMessageCard} >
                            <p style={styles.message}>{message.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const styles = {
    userMessageCard: {
        backgroundColor: "blue",
        color: "white",
        borderRadius: 8,
        margin: 0,
        maxWidth: 400
    },
    recipientMessageCard: {
        backgroundColor: "darkgrey",
        color: "white",
        borderRadius: 8,
        maxWidth: 400,
        // textAlign: "right",
        margin: 0,
    },
    message: {
        padding: 10,
    },
    messagesDiv: {
        width: 700,
        margin: 10
    }
}