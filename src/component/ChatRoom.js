import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').orderBy('createdAt').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    firestore.collection('messages').add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNewMessage('');
  };

  return (
    <div>
      <div>
        {messages.map(message => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
