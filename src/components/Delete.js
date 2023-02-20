// import {useState,useEffect} from "react";
// import {useNavigate} from "react-router-dom";

// export default function deletePost(){
//     const BASE = "https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt"
//     const[deletePosts,setDeletePosts]= useState([])


//     useEffect(()=>{
//         async function deletePosts(){
//              try{
//                  const response = await fetch(`${BASE}/posts/${postId}`,{
//                      method:"DELETE",
//                      headers:{
//                         'Content-Type': 'application/json',
//                            'Authorization': `Bearer ${token}`
//                      }
//                  })
//                  let result = await response.json();
//                  console.log(result)
//                     }
                 
 
//              }catch(err){
//                  console.log(err)
//              }
//          }
//          deletePosts()
//      },[])

//      onClick={()=>setPostId(post.id)}>Delete</button>

//     posts.map(post=>{ 
//         {return(
//             <div key={post._id} className="card">
//                 <div>{post.title}</div>
//                 <div>{post.description}</div>
//                 <div>{post.price}</div>
//                 <button type="button"
                
//             </div>

//         )}
// })}