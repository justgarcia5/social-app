import React, { useState, useEffect } from 'react';

export default function MessageForm(props) {
    const [message, setMessage] = useState({
        body: '',
        user_id: null,
        conversation_id: null,
    })

    useEffect(() => {
        if(props.convoId)
            setMessage({
                user_id: props.currentUser.id,
                conversation_id: props.convoId
            })
    }, [props.convoId])

    const handleChange = e => {
        let { name, value } = e.target;
        setMessage(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/conversations/${props.convoId}/messages.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .catch(err => console.log(err))

        props.fetchMessages(props.convoId);
        setMessage({
            body: '',
        })
    }

    return(
        <form onSubmit={handleSubmit} style={styles.inputDiv}>
            <textarea style={styles.input} name='body' value={message.body} onChange={handleChange}/>
            <button>Send</button>
        </form>
    )
}

const styles = {
    inputDiv: {
        position: 'fixed',
        bottom: 100,
        right: 265,
    },
    input: {
        width: 580,
        height: 20,
        borderRadius: 16,
        borderColor: 'lightgrey',
        fontSize: 14,
        paddingTop: 6,
        outline: 'none'
    },
}