import { useEffect, useState } from "react"
import axios from "axios"
import AddModeratorsComp from "../components/AddModeratorComp"

function AllModeratorsComp({moderators}){
    return(
        <>
            {moderators.map((moderator) => {
                return(
                    <div style={{border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} key={moderator._id}>
                        <h2>Name: {moderator.name}</h2>
                        <h3>Email: {moderator.email}</h3>
                        <h3>Catagory: {moderator.catagory}</h3>
                    </div>
                )
            })}
        </>
    )
}

function Admin(){
    const [moderators, setModerators] = useState([])
    const [currentMenu, setCurrentMenu] = useState("allModerators")

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchModeratorsData() {
                try{
                    const res = await axios.get('http://localhost:3000/admin/get-moderators',{
                        withCredentials: true
                    })
                    setModerators(res.data)
                } catch(error) {
                    console.log(error.message)
                }
            }
            fetchModeratorsData()
        }, 3000);
        return () => clearInterval(interval);
    },[])


    return(
        <>
            <button onClick={() => setCurrentMenu("allModerators")}>All Moderators</button>
            <button onClick={() => setCurrentMenu("addModerator")}>Add Moderator</button>
            <br/>
            <br/>
            {currentMenu == "allModerators" ? <AllModeratorsComp moderators={moderators}/> : <AddModeratorsComp/>}
        </>
    )
}

export default Admin