import "./BlogList.css";


export const BlogList = ({ filteredBlogs }) => {
    return (
        < div className="blogList" >
            {filteredBlogs.map((post, index) => (
                <div className="blogItem" key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div >
            ))}
        </div >
    )
}
