const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

let data = [];

people.forEach(({name, address:{city, street:{name: streetName}}})=>{
    let sentence = `${name} lives in ${city} on ${streetName}`;
    data.push(sentence);
})

console.log(data);