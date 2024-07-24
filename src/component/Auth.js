import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.error('Error signing up:', error);
    });
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.error('Error logging in:', error);
    });
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
