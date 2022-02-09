const endpoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    return fetch(endpoint)
        .then((result) => result.json())
        .then((blogs) => {
            return blogs;
        });
};

