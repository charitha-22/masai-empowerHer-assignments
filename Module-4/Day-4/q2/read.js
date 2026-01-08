import fs from "fs";
// import fs from "fs/promises"

// using promise
export function read(){
    return new Promise((resolve,reject)=>{
        fs.readFile('data.txt','utf8',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data);
            }
        })
    })
}

//using async and await
// export async function read(){
//     return await fs.readFile('data.txt','utf8');
// } 