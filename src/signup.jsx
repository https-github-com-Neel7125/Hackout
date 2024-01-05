import React,{useState} from "react";
import "./signup.css";

function SignUp(){
    const [isregistred,setRegistered]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    function handlechange(){
        if(username && password && email){
            setRegistered(true);
        }
        else{
            alert('Please enter all required information');
        }
    };

    if(isregistred){
        return <redirect to="./home"></redirect>;
    }

    return (
        <div class="container">
             <label>Email: </label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <label>Username: </label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button onClick={handlechange}>Sign up</button>
            <br />
            <br />
            
        </div>
    );
};

export default SignUp;  