import React from 'react'

const MessageCard = ({title, message}) => {
  return (
    <div style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "15px",
        width: "300px"
    }}>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>
  )
}

export default MessageCard