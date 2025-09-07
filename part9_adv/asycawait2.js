function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched")
        }, 2000)
    })
}
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("commentt Data Fetched")
        }, 3000)
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");

        const blogData = await fetchPostData();
        const commentData = await fetchCommentData();

        console.log("fetch complete");


    } catch (error) {
        console.error("error fetching blog data", error)
    }
}