//await: use to handle promise more easily.
//      ⚠️ It will only work inside the async function



let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Tessa Thompson");
    }, 3000)
});

async function getName(){
    const data = await promise;
    console.log("result using await::", data)
}

getName();


