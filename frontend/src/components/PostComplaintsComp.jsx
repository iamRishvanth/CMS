import React, { useState } from 'react';
import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:3000'
})

function PostComplaintsComp() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [catagory, setCatagory] = useState("Acadamics");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await server.post('user/post',{
            title,
            description,
            catagory
        },{
            withCredentials: true
        })
        alert(res.data.data)
        // if(res.data.data == 'Complaint Posted Succesfully'){
        //     navigate(`/${res.data.role}`)
        // }
    }

    return(
        <form style={{display: "flex", flexDirection: "column", gap: "10px", border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} method="post" onSubmit={handleSubmit}>
            <input placeholder="Complaint Title" type="text" name="title" onChange={e => setTitle(e.target.value)}/>
            <input placeholder="Describe Your Complaint" type="text" name="description" onChange={e => setDescription(e.target.value)}/>
            <div>
                <h3>Catagory:</h3>
                <input type='radio' name="Catagory" value="Acadamics" checked={catagory === "Acadamics"} onChange={e => setCatagory(e.target.value)}/> Acadamics
                <input type='radio' name="Catagory" value="Sports" checked={catagory === "Sports"} onChange={e => setCatagory(e.target.value)}/> Sports
                <input type='radio' name="Catagory" value="Hostel and Mess" checked={catagory === "Hostel and Mess"} onChange={e => setCatagory(e.target.value)}/> Hostel and Mess
            </div>
            <input type="submit" value="Post" />
        </form>
    )
}

export default PostComplaintsComp