import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




export default function Posts({ token }) {
    // return <div>Posts</div>
    const BASE = "https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt"
    const [posts, setPosts] = useState([])
    const[messages,setMessages]=useState("")



    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch(`${BASE}/posts`, {

                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })
                let result = await response.json()
                console.log(result)
                setPosts(result.data.posts);


            } catch (err) {
                console.log(err)
            }
        }
        getPosts()

    }, [])


    async function deletePosts(postId) {
        try {
            const response = await fetch(`${BASE}/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = await response.json();
            console.log(result)




        } catch (err) {
            console.log(err)
        }
    }

    async function sendMessages(event,postId){
        event.preventDefault()
         try{
             const response = await fetch(`${BASE}/posts/${postId}/messages`,{

                 headers:{
                     'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                     },
                     method:"POST",
                     body: JSON.stringify({
                        message: {
                          content:messages
                        }
                    })

                })

                let result = await response.json()
                console.log(result)
                
            
         }catch(err){
             console.log(err)
         }
     }

    return (
        <>

            <Link to="CreatePost">Create A Listing</Link>
            <>

                {posts.map(post => {

                    return (
                        <div key={post._id} className="card">
                            <div>{post.title}</div>
                            <div>{post.description}</div>
                            <div>{post.price}</div>

                            {!post.isAuthor ?
                                <>
                                    <label>Message:</label>
                                    <input type="text" value={messages} onChange=
                                        {(event) => setMessages(event.target.value)}></input>
                                    <button type="button" onClick={(event) => sendMessages(event, post._id)}>Message</button>
                                </>
                                :

                                <button type="button" onClick={() => deletePosts(post._id)}>Delete</button>
                            }


                        </div>

                    )
                })}
            </>
        </>
    )

}


