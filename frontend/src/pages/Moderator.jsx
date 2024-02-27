import { useEffect, useState } from "react"
import axios from "axios"

// function UpdateOptionsComp({props}){
//     const [newStatus, setNewStatus] = useState("Noted");
    
//     async function handleSubmit(e) {
//         e.preventDefault();
//         const res = await server.post('update-complaint-status',{
//             newStatus,
//             _id: props
//         },{
//             withCredentials: true
//         })
//         alert(res.data.data)
//         // if(res.data.data == 'Complaint Posted Succesfully'){
//         //     navigate(`/${res.data.role}`)
//         // }
//     }

//     return(
//         <form method="post" onSubmit={handleSubmit}>
//             <h3>Select New Status:</h3>
//             <input type='radio' name="status" value="Noted" checked={newStatus === "Noted"} onChange={e => setNewStatus(e.target.value)}/> Noted
//             <input type='radio' name="status" value="In Progress" checked={newStatus === "In Progress"} onChange={e => setNewStatus(e.target.value)}/> In Progress
//             <input type='radio' name="status" value="Completed" checked={newStatus === "Completed"} onChange={e => setNewStatus(e.target.value)}/> Completed
//             <input type="submit" value="Update New Status" />
//         </form>
//     )
// }

function ComplaintsComp({complaints}) {
    return(
        <>
            {complaints.map((complaint) => {
                return(
                    <div style={{border: "2px solid white", borderRadius: "10px", padding: "15px", margin: "10px"}} key={complaint._id}>
                        <h2>Title: {complaint.title}</h2>
                        <p>Description: {complaint.description}</p>
                        <p>Status: {complaint.status}</p>
                        {/* <h5>Status: {complaint.status}</h5> */}
                        {/* {setShowUpdateOptions ? <UpdateOptionsComp props={complaint._id}/> : null} */}
                    </div>
                )
            })}
        </>
    )
}

function Moderator(){
    const [complaints, setComplaints] = useState([])
    // const [ShowUpdateOptions, setShowUpdateOptions] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchComplaints(){
                try {
                    const res = await axios.get('http://localhost:3000/moderator/my-complaints',{
                        withCredentials: true
                    })
                    // const temp = []
                    // res.data.forEach(element => {
                    //     temp.push(element)
                    // });
                    // console.log(temp)
                    setComplaints(res.data)
                    console.log(complaints)
                } catch(error) {
                    console.log(error.message)
                }
            }
            fetchComplaints()
        },3000);
        return () => clearInterval(interval);
    },[ComplaintsComp])

    return(
        <> 
            <h1>COMPLAINTS</h1>
            <ComplaintsComp complaints={complaints} />
        </>
    )
}

export default Moderator