import { getSingleBlog, getAuthorPosts, getAuthor } from "../../../services/Services";
import { useState } from "react";
import { useEffect } from "react";
import "./SingleBlog.css";
import { Link } from "react-router-dom";

export const SingleBlog = (props) => {


    let [blog, setBlog] = useState(null);
    let [author, setAuthor] = useState([]);
    let [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsLoading(true);
        getSingleBlog(props.match.params.id)
            .then(blog => setBlog(blog))
    }, [props.match.params.id])



    useEffect(() => {
        if(!blog) return;
        const authorPromise = getAuthor(blog.userId);
        const authorPostsPromise =getAuthorPosts(blog.userId)
        .then(posts => {
            let rand1 = (range) => {
                let number = Math.floor(Math.random() * range / 2) * 2;
                return number;
            }
        
            let post1 = rand1(8);
            let post2 = post1+1;
            let post3 = post1+2;

            const postsArray = posts.map((post) => ({title: post.title, id: post.id}))
            const randomThree = [postsArray[post1], postsArray[post2], postsArray[post3]];
            return randomThree;
        })

        Promise.all([authorPromise, authorPostsPromise]).then((res) => {
            const [author, authorsPosts] = res;
            setAuthor(author);
            setPosts(authorsPosts);
            setIsLoading(false);
        });
    }, [blog])

 

    return (isLoading
        ? <h1>Loading...</h1>
        : <div>
            <a className="ms-5 backLink" href="/"> {"<"}Back</a>   {/* <Link to="/">{`<Back`}</Link> but without className*/}
            <h3 className="text-center m-4 mb-1 fw-bold">Title: {blog.title}</h3>
            <h5 className="text-center mb-5">Author: {author.name}</h5>
            <p className="text-center m-3 ms-5 fs-5">{blog.body}</p>

            <div className="horizontalLine m-3 mt-5 ms-5 me-5 "></div>

            <p className="ms-5 me-5">3 more posts from same author</p>
            {posts.map(post => <Link to={`/posts/${post.id}`}><p className="ms-5 me-5">Title {post.id} - {post.title}</p></Link>)}
        </div>
    )
}
