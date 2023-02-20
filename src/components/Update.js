import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Update({token}){
    const BASE = "https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt"
    const[posts,setPosts]= useState([])
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[price,setPrice]=useState("")
    const[willDeliver,setWillDeliver]=useState(true)
    const navigate = useNavigate();



    
        async function updatePosts(event){
            event.preventDefault()
             try{
                 const response = await fetch(`${BASE}/{postId}`,{

                     headers:{
                         'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                         },
                         method:"PATCH",
                         body: JSON.stringify({
                            post: {
                              title: title,
                              description: description,
                              price: price,
                              willDeliver: willDeliver
                            }})

                    })

                    let result = await response.json()
                    console.log(result)
                    navigate('/Posts', {replace: true})
                    if(
                        result&&result.title
                    ){const newPosts=posts.map(post=>{
                        if(post.id===postId){
                            return result;
                        }else{
                            return post;
                        }
                    });
                    setPosts(newPosts);
                    setTitle("");
                    setDescription("");
                    setPrice("");
                    setWillDeliver("")
                    setPostId(null);

                    }
                
             }catch(err){
                 console.log(err)
             }
         }
   

         return(
            <div key={post._id} className="card">
                <div>{post.title}</div>
                <div>{post.description}</div>
                <div>{post.price}</div>
                <button type="button"
                onClick={()=>setPostId(post.id)}>Edit</button>
                
            </div>

        )


}