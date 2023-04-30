import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPhoneNumber} from "firebase/auth";
import "../style.css";
import { auth } from "./fireBase";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        number
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };





  return (
    <div className="App">
      
    
      <div className="register_user">
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
       <br></br>

        <button onClick={register}> Create User</button>
     <Link to="/login1"> <h5>you have account</h5></Link>  
     <Link to="/">Go to the home menu</Link>
      </div>

      
    

    </div>
    
  );
}

export default Register;
