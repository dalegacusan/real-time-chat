import React from "react";

export default function Message(props) {
  const { message, username } = props;
  const { user, text, time } = message;

  let isSentByCurrentUser = false;

  const trimmedUsername = username.trim().toLowerCase();

  // We trimmed our username in the backend
  if (user === trimmedUsername) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        // Display to the RIGHT
        <div className="message backgroundDark">
          <p className="meta userName">{trimmedUsername} <span className="userTime">{time}</span></p>
          <p className="text">{text}</p>
        </div>
      )
      : (
        // Display to the LEFT
        <div className="message">
          <p className="meta">{user} <span>{time}</span></p>
          <p className="text">{text}</p>
        </div>
      )
  );
}