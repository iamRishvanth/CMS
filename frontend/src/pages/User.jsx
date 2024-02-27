import { useEffect, useState } from "react"
import axios, { all } from "axios"
import Cookies from "js-cookie"
import PostComplaintsComp from "../components/PostComplaintsComp.jsx"

function AllComplaintsComp({complaints}) {
    return(
        <>
            {complaints.map((complaint) => {
                return(
                    <div style={{border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} key={complaint._id}>
                        <h2>Titile: {complaint.title}</h2>
                        <p>Description: {complaint.title}</p>
                        <p>Status: {complaint.status}</p>
                    </div>
                )
            })}
        </>
    )
}

function MyComplaintsComp({complaints}) {
    return(
        <>
            {complaints.map((complaint) => {
                return(
                    <div style={{border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} key={complaint._id}>
                        <h2>Titile: {complaint.title}</h2>
                        <p>Description: {complaint.title}</p>
                        <p>Status: {complaint.status}</p>
                    </div>
                )
            })}
        </>
    )
}


function User() {
    const [allComplaints,setAllComplaints] = useState([])
    const [myComplaints,setMyComplaints] = useState([])
    const [currentMenu,setCurrentMenu] = useState("allComplaints")

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchAllComplaints() {
                try {
                    const res = await axios.get('http://localhost:3000/user/all-complaints',{
                        withCredentials: true
                    })
                    setAllComplaints(res.data)
                } catch(error) {
                    console.log(error.message)
                }
            }
            fetchAllComplaints()
        }, 3000);
        return () => clearInterval(interval);
    },[AllComplaintsComp])

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchMyComplaints() {
                try {
                    const res = await axios.get('http://localhost:3000/user/my-complaints',{
                        withCredentials: true
                    })
                    setMyComplaints(res.data)
                } catch(error) {
                    console.log(error.message)
                }
            }
            fetchMyComplaints()
        }, 3000);
        return () => clearInterval(interval);
    },[MyComplaintsComp])

    return(
        <>
            <button onClick={() => setCurrentMenu("allComplaints")}>All Complaints</button>
            <button onClick={() => setCurrentMenu("myComplaints")}>My Complaints</button>
            <button onClick={() => setCurrentMenu("postComplaints")}>Post Complaints</button>
            <br/>
            <br/> 
            {currentMenu == "allComplaints" ? <AllComplaintsComp complaints={allComplaints} />: null}
            {currentMenu == "myComplaints" ? <MyComplaintsComp complaints={myComplaints}/> : null}
            {currentMenu == "postComplaints" ? <PostComplaintsComp/> : null}
        </>
    )
}

export default User