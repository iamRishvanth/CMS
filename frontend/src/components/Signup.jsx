import React, { useState } from 'react';
import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:3000'
})

async function SignupUser(signupDetails){
    const res = await server.post('auth/signup',{
        name: signupDetails.name,
        email: signupDetails.username,
        password: signupDetails.password,
        role: 'user',
        catagory: null
    })
    return res
}

function Signup() {
    const [name, setName] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    async function handleSubmit(e) {
        e.preventDefault();
        const token = await SignupUser({
            name,
            username,
            password
        });
        alert(token.data.data)
        if(token.data.data == 'Account Created Sucessfully, Please Sign in'){
            window.location.href = '/signin'
        }
    }

    return(
        <form style={{display: "flex", flexDirection: "column", gap: "10px", border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} method="post" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input placeholder="Enter Name" type="name" name="name" onChange={e => setName(e.target.value)}/>
            <input placeholder="Enter E-mail" type="email" name="email" onChange={e => setUserName(e.target.value)}/>
            <input placeholder="Enter Password" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up" />
        </form>
    )
}

export default Signup