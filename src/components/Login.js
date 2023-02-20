import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom";

export default function Login({setToken}){
    // return <div>Login</div>
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate();


    // creating a fetch request for login form 

    async function loginUser(event){
        event.preventDefault()
        
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt/users/login',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                        username: userName,
                        password: password
                    }
                })
                
            }
            
            )
            let result = await response.json()
           
            setToken(result.data.token)
            localStorage.setItem("token",result.data.token)
            localStorage.setItem("userName", userName)
            navigate(`/Profile/${userName}`)
           
        }catch(err){
            console.log(err)
        }
    }
    return(
        //create a login form 
        <form onSubmit={(event)=>loginUser(event)}>
            <label>Username:</label>
            <input type="text" value={userName} onChange=
            {(event)=>setUserName(event.target.value)}></input>

            <label>Password:</label>
            <input type="password" value={password} onChange=
            {(event)=>setPassword(event.target.value)}></input>
            <button type="submit">Login</button>
        </form>
    )

}




