function Home() {
    return(
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <h2>Continue as</h2>
            <button onClick={() => window.location.href = '/signin-signup'}>User</button>
            <button onClick={() => window.location.href = '/signin'}>Moderator</button>
            <button onClick={() => window.location.href = '/signin'}>Admin</button>
        </div>
    )
}

export default Home