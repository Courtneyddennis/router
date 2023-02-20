import { useState } from "react"
import {Link} from "react-router-dom"


export default function Navbar({token}){
    
// const [name,setName]=useState()
const name=localStorage.getItem("userName")
    return(
        <>  
            <div>Stranger's Things</div>
            {!token? 
            <>
            <Link to="Login">Login</Link>
            <Link to="Register">Register</Link>
            <Link to="Posts">Posts</Link>
            </>:
            <>
            <Link to={`Profile/${name}`}>Profile</Link>
            <Link to="Logout">Logout</Link>
            <Link to="Posts">Posts</Link>
            
            
            </>
            
            
            

            }
            

        </>
        
    )
}