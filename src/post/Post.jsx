import "./post.scss"

export default function Post() {
  return (
    <div className="post">
      <img 
        className="postImg" src="./assets/blogimg.jpg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Social</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus magnam fugiat quasi, laborum obcaecati facere fuga ducimus vel a distinctio.
      </p>
      </div>
    
  )
}
