export const getStoryUrl = (url) => {
    if (url === undefined) {
        return "No valid URL";
    }
    let start = url.split("://");
    let splited = start[1].split("/");
    let site = splited[0];
    return site
}