// import { create } from "domain"
import {useState,useEffect} from "react"


export default function Register({setToken}){
   
    const[registerUser,setRegisterUser]=useState("")
    const[createPassword,setCreatePassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
   

    async function registerNewUser(event){
        event.preventDefault()
        console.log(registerUser, createPassword)
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt/users/register',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                        username: registerUser,
                        password: createPassword
                        }
                    })

            }

            )
            let result = await response.json()
            
            setToken(result.data.token)
            localStorage.setItem("token",result.data.token)
           
        }catch(err){
            console.log(err)
        }
    }
    return(
        
        <form onSubmit={(event)=>registerNewUser(event)}>
            <label>Username:</label>
            <input type="text" value={registerUser} onChange=
            {(event)=>setRegisterUser(event.target.value)}></input>

            <label>Password:</label>
            <input type="password" value={createPassword} onChange=
            {(event)=>setCreatePassword(event.target.value)}></input>

            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange=
            {(event)=>setConfirmPassword(event.target.value)}></input>
            {/* {createPassword==confirmPassword?<div>Passwords Match</div>:<div>Passwords Do Not Match!</div>} */}



            <button type="submit">Register</button>
        </form>
    )
}
