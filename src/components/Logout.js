import { useState } from "react"
import {Link} from "react-router-dom"




export default function Logout({setToken}){
    
    // return <div>Navbar</div>
// const [name,setName]=useState()

        function logout(){
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            setToken("")
            
        }
        return(
            <button onClick={(event)=>{
                event.preventDefault()
                logout()
                
        }}>Logout
        </button>
        
    )
}