import React from 'react';
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPhoneNumber} from "firebase/auth";
import "../style.css";
import { auth } from "./fireBase";

function Login1() {

        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");
        const [loginEmail, setLoginEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");
        const [number, setNumber] = useState("");
        const [user, setUser] = useState({});
      
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
        
      <div className='register_user'>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <br></br>


        <button onClick={login}> Login</button>
        <br></br>


        <h4> User Logged In: </h4>
        
        {user?.email}
        <br></br>
      <button onClick={logout}> Sign Out </button>
      <Link to="/register"><p>Register menu </p></Link>
      </div>

     
    </div>
  )
}

export default Login1;