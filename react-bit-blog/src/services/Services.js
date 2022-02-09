const apiEndpoint = "https://jsonplaceholder.typicode.com/";

export const getDataFromApi = () => {
    return fetch(`${apiEndpoint}posts`)
        .then(response => {
            return response.json()
        })

        .then(data => {
            console.log(data)
            return data;
        })
}


export const getSingleBlog = (id) => {
    return fetch(`${apiEndpoint}posts/${id}`)
        .then(response => {
            return response.json()
        })
        .then(myResponse => {
            return {
                title: myResponse.title,
                body: myResponse.body,
                id: myResponse.id,
                userId: myResponse.userId
            }
        })
}

export const getAllAuthors = () => {
    return fetch(`${apiEndpoint}users`)
        .then(response => {
            return response.json()
        })
        .then(allAuthors => {
            return allAuthors
        })
}

export const getAuthor = (userId) => {
    return fetch(`${apiEndpoint}users/${userId}`)
        .then(response => {
            return response.json()
        })
        .then(authorResponse => {
            return {
                name: authorResponse.name,
            }
        })
}

export const getAuthorPosts = (userId) => {
    return fetch(`${apiEndpoint}users/${userId}/posts`)
        .then((response) => response.json())
        .then((result) => {
            return result
        })
}
