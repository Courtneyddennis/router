import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"



import {
    Error,
    Footer,
    Login,
    Register,
    Navbar,
    Posts,
    CreatePost,
    Profile,
    SinglePost,
    Update,
    Logout
} from "./components"

function App(){
   
    const[token,setToken]=useState("")
    const [postId,setPostId]=useState(null)
    

    useEffect(()=>{
        const savedToken = localStorage.getItem("token")
        console.log(savedToken)
        if(savedToken){
            setToken(savedToken)
        }
    },[])

   

    return(
        <>
            <Navbar token={token}/>
            <Routes>
                <Route path="Login" element={<Login setToken={setToken}/>}></Route>
                <Route path="Register" element={<Register setToken={setToken}/>}></Route>
                <Route path="/" element={<Posts/>}></Route>
                <Route path="Posts" element={<Posts token={token}/>}></Route>
                <Route path="/Posts/CreatePost" element={<CreatePost token={token}/>}></Route>
                <Route path="*" element={<Error/>}></Route>
                <Route path="Profile/:name" element={<Profile token={token}/>}></Route>
                <Route path="SinglePost" element={<SinglePost/>}></Route>
                <Route path="Update" element={<Update/>}></Route>
                <Route path="Logout" element={<Logout setToken={setToken}/>}></Route>
                
                

            </Routes>

        {
            
        }
            <Footer/>
            
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<BrowserRouter><App/></BrowserRouter>)
