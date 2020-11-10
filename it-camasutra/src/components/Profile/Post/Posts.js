import React from "react";
import './Posts.css'
import Post from "./Post";

const  Posts= React.memo((props) =>{

  let postElement = props.profilePage.postsData.map(post => <Post message={post.post} likes={post.likes}
                                                                  key={post.id}/>)
  let newPostValue = React.createRef()
  const addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostValue.current.value
    props.updatePost(text)
  }
  return (
      <div className="h2  col">
        <p className="text-center mb-3">My posts</p>
        <div className="col mb-4">
                <textarea className="w-100 h5 border shadow-none" onChange={onPostChange} value={props.value}
                          rows='5' ref={newPostValue}/>
          <button className="p-2 text-light col-3 h6 shadow-none border-0 bg-success btn-outline-success rounded"
                  onClick={addPost}>Add Post
          </button>

        </div>
        {postElement}
      </div>

  )
})


export default Posts
