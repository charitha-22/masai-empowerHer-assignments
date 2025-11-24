let data = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

let obj = data.reduce((acc, ele)=>{
    acc[ele] = (acc[ele]||0)+1;
    return acc;
}, {}) 
console.log(obj);

sortedObj = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
console.log(sortedObj.map(a=>a[0]));
