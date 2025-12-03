let product = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

let processProducts = product.map((prod)=>prod.name)
console.log(processProducts);

product.forEach((element) => {
    if(element.price > 50){
        console.log(`${element.name} is above $50`);
    }else{
        console.log(`${element.name} is below $50`)
    }
});