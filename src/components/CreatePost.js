import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CreatePost({token}){
    const BASE = "https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt"
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[price,setPrice]=useState("")
    const[willDeliver,setWillDeliver]=useState(true)
    const navigate = useNavigate();



    
        async function createPosts(event){
            event.preventDefault()
             try{
                 const response = await fetch(`${BASE}/posts`,{

                     headers:{
                         'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                         },
                         method:"POST",
                         body: JSON.stringify({
                            post: {
                              title: title,
                              description: description,
                              price: price,
                              willDeliver: willDeliver
                            }})

                    })

                    let result = await response.json()
                    
                    navigate('/Posts', {replace: true})
                
             }catch(err){
                 console.log(err)
             }
         }
   


     return(
        //create a login form 
        <form onSubmit={(event)=>createPosts(event)}>
            <label>Title:</label>
            <input type="text" value={title} onChange=
            {(event)=>setTitle(event.target.value)}></input>

            <label>Description:</label>
            <input type="text" value={description} onChange=
            {(event)=>setDescription(event.target.value)}></input>

            <label>Price:</label>
            <input type="text" value={price} onChange=
            {(event)=>setPrice(event.target.value)}></input>

            <label>Will Deliver?</label>
            <input type="checkbox" value={willDeliver} onChange=
            {(event)=>setWillDeliver(event.target.value)}></input>
            <button>submit</button>
        </form>
    )


}