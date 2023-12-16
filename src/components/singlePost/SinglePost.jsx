import "./singlepost.scss"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: 
              <b> Mihir Jaiswal</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam minus aspernatur odit ducimus beatae ab assumenda modi vitae quam voluptas autem officiis, iure dicta possimus dignissimos exercitationem, adipisci omnis id voluptate sequi voluptates molestias tempora? Illum reprehenderit voluptas quis quia assumenda veritatis nesciunt, nostrum eos voluptatum ipsa fugiat dolorem aspernatur inventore at dolores aperiam expedita dolore explicabo aliquid! Labore corrupti repudiandae illum modi aperiam sit, delectus perspiciatis et animi quis reprehenderit qui atque ea tempora, laborum deserunt accusamus laboriosam asperiores odit illo libero architecto error nostrum. Quaerat dicta cum ipsa voluptatum magni dignissimos asperiores pariatur. Aliquid animi aut dolores.orem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum, eum magni natus facilis, labore mollitia dolores eius quae expedita ducimus, molestias totam excepturi tempore earum praesentium nesciunt. Repudiandae tenetur quaerat unde eaque, beatae itaque labore nobis sit modi assumenda, velit consectetur amet mollitia magni, inventore minus illum odio veniam dolorem fuga ipsum? Deleniti laudantium consequuntur recusandae distinctio possimus impedit voluptas nihil omnis quae sapiente, obcaecati voluptates explicabo eum reiciendis aspernatur nesciunt commodi velit necessitatibus! Animi amet dicta quaerat hic, voluptatum provident ipsam, quasi aliquid ducimus ex perspiciatis. Nam quas ut unde iure sunt qui nulla eveniet. Culpa, nisi quisquam!
      </p>
    </div>
    </div>
  )
}
