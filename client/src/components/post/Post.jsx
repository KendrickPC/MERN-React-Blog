import {Link} from "react-router-dom";
import "./post.css"

export default function Post({ post }) {
  const PublicFolder = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImage" src={PublicFolder + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map( (c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="link" >
          <span className="postTitle"> {post.title} </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">{post.desc}
      </p>
    </div>
  )
}
