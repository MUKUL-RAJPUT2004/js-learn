function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommonData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Commment data fetched.");
        }, 3000);
    });
}

async function getBlogData(){
    try {
        console.log("Fetching blog Data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommonData(),

        ])
        console.log(postData);
        console.log(commentData);
        
        
        
    } catch (error) {
        console.error("Error fetching blog data", error);
    }
}

getBlogData();