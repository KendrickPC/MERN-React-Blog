import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./singlepost.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PublicFolder = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  

  useEffect( () => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path, {username: user.username});
      setPost(res.data);
    }
    getPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {username: user.username},
      })
      window.location.replace("/");
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img 
            src={PublicFolder + post.photo}
            alt="" 
            className="singlePostImage"
          />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && 
            <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
          </div>   
          }
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: 
          <Link to={`/?user=${post.username}`} className="link" >
            <b>{post.username}</b>
          </Link>
          
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDescription">{post.desc}</p>
      </div>
    </div>
  )
}
