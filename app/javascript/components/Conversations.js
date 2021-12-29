import React from 'react';

export default function Conversations(props) {
    return(
        <div style={styles.convoContent}>
            {props.conversations &&
                props.conversations.map((conversation, i) => {
                    return(
                        <div key={conversation.id} onClick={() => props.fetchMessages(conversation.id)} style={styles.convoCard}>
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
    )
}

const styles = {
    convoCard: {
        height: 40,
        width: 300,
        backgroundColor: "dearkgrey",
        color: "white",
        cursor: "pointer",
        border: '1px solid dearkgrey',
        borderBottom: '1px solid lightgrey',
        padding: 10,
    },
    convoContent: {
        textAlign: 'left',
        backgroundColor: "darkgrey",
    },
}
