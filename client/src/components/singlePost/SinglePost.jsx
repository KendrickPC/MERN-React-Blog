import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          alt="" 
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Liverpool Rookies To Watch Out For
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Kenjamin Button</b></span>
          <span className="singlePostDate">3 Hours Ago</span>
        </div>
        <p className="singlePostDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae consequatur distinctio deleniti dicta ipsa, soluta voluptatibus inventore tempore, illum beatae? Laboriosam dolor velit, dicta tempora totam consequatur suscipit? Repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae consequatur distinctio deleniti dicta ipsa, soluta voluptatibus inventore tempore, illum beatae? Laboriosam dolor velit, dicta tempora totam consequatur suscipit? Repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae consequatur distinctio deleniti dicta ipsa, soluta voluptatibus inventore tempore, illum beatae? Laboriosam dolor velit, dicta tempora totam consequatur suscipit? Repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae consequatur distinctio deleniti dicta ipsa, soluta voluptatibus inventore tempore, illum beatae? Laboriosam dolor velit, dicta tempora totam consequatur suscipit? Repellat!</p>
      </div>
    </div>
  )
}
