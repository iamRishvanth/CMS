import React, { useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const server = axios.create({
    baseURL: 'http://localhost:3000'
})

function Signin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await server.post('auth/signin',{
            email,
            password
        },{
            withCredentials: true
        })
        // Cookies.set('jwt',token.data.jwt,{expires: 7})
        alert(res.data.data)
        if(res.data.data == 'Signed In Succesfully'){
            // alert("succes login")
            navigate(`/${res.data.role}`)
            //window.location.href = `/${token.data.role}`
        }
    }

    return(
        <form style={{display: "flex", flexDirection: "column", gap: "10px", border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} method="post" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input placeholder="Enter E-mail" type="email" name="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Enter Password" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <input type="submit" value="Sign In" />
        </form>
    )
}

export default Signin