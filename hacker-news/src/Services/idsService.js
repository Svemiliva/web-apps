const endpoint = "https://hacker-news.firebaseio.com/v0/topstories.json";

export const getHackerIds = () => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(top10Ids => top10Ids.slice(0, 10))
}