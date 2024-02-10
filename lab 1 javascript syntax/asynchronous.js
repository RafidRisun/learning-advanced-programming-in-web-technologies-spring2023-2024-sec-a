fetchData(process);

function fetchData(callback){
    setTimeout(() => {
        const data = "Hello Rafid";
        callback(data);
    }, 2000);
}

function process(data){
    console.log(data, "Received");
}


function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success){
                const data = "Hello Rafid";
                resolve(data);
            }
            else{
                const error = "Failed";
                reject(error);
            }
        }, 2000);
    });
}

async function process2(){
    try{
        const data = await fetchData2();
        console.log("Data: ", data);
    }catch(error){
        console.error("Error", error);
    }    
    finally{
        console.log("Operation Complete");
    }
}

process2();

