import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
        className="postImage"
        alt="some pic of a post"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti incidunt atque sunt, nam at, architecto laboriosam, possimus recusandae autem totam non dignissimos impedit vero? Aliquam blanditiis recusandae quasi placeat?
      </p>
    </div>
  )
}
