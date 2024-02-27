import React, { useState } from 'react';
import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:3000'
})

function AddModeratorsComp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [catagory, setCatagory] = useState("Acadamics");
    const [password, setPassword] = useState();
    
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await server.post('admin/add-moderator',{
            name,
            email,
            password,
            catagory
        },{
            withCredentials: true
        })
        alert(res.data.data)
    }

    return(
        <form style={{display: "flex", flexDirection: "column", gap: "10px", border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} method="post" onSubmit={handleSubmit}>
            <input placeholder="Modetator Name" type="text" name="name" onChange={e => setName(e.target.value)}/>
            <input placeholder="Moderator Email" type="text" name="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Create Password" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <div>
                <h4>Catagory:</h4>
                <input type='radio' name="Catagory" value="Acadamics" checked={catagory === "Acadamics"} onChange={e => setCatagory(e.target.value)}/> Acadamics
                <input type='radio' name="Catagory" value="Sports" checked={catagory === "Sports"} onChange={e => setCatagory(e.target.value)}/> Sports
                <input type='radio' name="Catagory" value="Hostel and Mess" checked={catagory === "Hostel and Mess"} onChange={e => setCatagory(e.target.value)}/> Hostel and Mess
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddModeratorsComp