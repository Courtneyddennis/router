import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";

export default function Profile({token}){
    const BASE = "https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt"
    const[messages,setMessages]=useState("")
    const[profilePosts,setProfilePosts]=useState([])
    const[userId,setUserId]=useState("")
    
    
    let {name}= useParams()
    
    
    useEffect(()=>{
        
    async function getUser(){
        try{
            console.log(token)
            const response = await fetch (`${BASE}/users/me`,{

                headers:{
                    'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}`
                    },
        })
        let result = await response.json()
        setProfilePosts(result.data.posts)
        
       
    }catch(err){
        console.log(err)
    }

    }
    getUser()


},[])

    return(
        <div>

        
            <div>This is {name}'s profile</div>
        {
            profilePosts.map((post)=>{ 
                
                
            return(
            <div key={post._id}>

                
                
                    <div className="card">
                    <div>{post.title}</div>
                    <div>{post.description}</div>
                    <div>{post.price}</div>

                    {post.messages.map((message)=>{
                        return(
                            <div>
                                {
                                    message.fromUser.username !== name ?
                                    null : 
                                <div key={message._id} className="card">
                                <div>from user: {message.fromUser.username}</div>
                                <div>{message.content}</div>
                                </div>
                                    
                                }
                            </div>

                        )
                })}
                    </div>

                     


    
                </div>
    
            )
        })}

        
        </div>


    

        
    )

}