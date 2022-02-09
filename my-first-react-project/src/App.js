import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import { Input } from "./component/Input/Input";
import { BlogList } from "./component/BlogList/BlogList";
import { getBlogs } from "./Services/BlogService";



const App = () => {

    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
            setFilteredBlogs(blogs);
        });
    }, [])

    const onTyping = (event) => {
        setBlogs(blogs);
        const filtBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(event.target.value)
        setFilteredBlogs(filtBlogs);
    }

    return (
        <div className="App">
            <Header />
            <Input onChange={onTyping} />
            <BlogList filteredBlogs={filteredBlogs} />
        </div>
    )
}
export default App;
