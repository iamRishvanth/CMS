import { useState } from "react"
import Signin from "../components/Signin"
import Signup from "../components/Signup"

function SigninSignup() {
    const [signinOrSignup, setSigninOrSignup] = useState("Signin")
    return(
        <>
            <button onClick={() => setSigninOrSignup("Signin")}>Signin</button>
            <button onClick={() => setSigninOrSignup("Signup")}>Signup</button>
            {signinOrSignup == "Signin" ? <Signin/> : <Signup/>}
        </>
    )
}

export default SigninSignup