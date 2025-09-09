//ackh-await behaviour to implement

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("DatA FetcH SuccessfullY");           //goes to .then
            }
            else{
                reject("Error fetching data");                   //goes to .catch
            }
        }, 3000);
    });
}

fetchData()
    .then((data)=>{
            console.log((`Before: ${data}`));
            return data.toLowerCase();
    })
    .then((value)=>{
        console.log(`After: ${value}`);
        
    })
    .catch((error)=> console.error(error)
    );
