import React, { useEffect, useState } from "react";

export default function Conversations() {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        fetch('/conversations.json')
        .then(res => res.json())
        .then(data => setConversations(data))
    },[])

    console.log(conversations);

    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}