import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";

export default function Messages(props) {
    const [convoId , setConvoId] = useState(null)
    const [messages , setMessages] = useState()

    useEffect(() => {
        if(props.messages)
            setConvoId(props.messages[0].conversation_id)
            setMessages(props.messages)
    }, [props.messages])

    console.log(messages)

    return(
        <div style={styles.messagesDiv}>
            {messages &&
                messages.map((message, i) => {
                    return(
                        <div key={message.id} style={(message.user_id === props.currentUser.id) ? styles.userMessageCard : styles.recipientMessageCard}>
                            <p style={styles.message}>{message.body}</p>
                        </div>
                    )
                })
            }
            <MessageForm
                messages={props.messages}
                currentUser={props.currentUser}
                convoId={convoId}
                fetchMessages={props.fetchMessages}
            />
        </div>
    )
}

const styles = {
    userMessageCard: {
        backgroundColor: "blue",
        color: "white",
        borderRadius: 16,
        width: 'max-content',
        marginLeft: 'auto'
    },
    recipientMessageCard: {
        backgroundColor: "darkgrey",
        color: "white",
        borderRadius: 16,
        width: 'max-content',
    },
    message: {
        padding: 10,
        margin: 4
    },
    messagesDiv: {
        padding: '2px 20px',
        width: 700,
        backgroundColor: 'lightgrey',
        display: 'inline'
    }
}