function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name: "chaicode", url: "https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData(){
    try {
        console.log('Fetching user data...');
        const userData = await fetchUserData();    //used with asyn
        console.log("User data:", userData);
        
        
    } catch (error) {
        console.log("Error feching data...", error);
        
    }
}

getUserData();