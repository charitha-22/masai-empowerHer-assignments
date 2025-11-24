let employeeDetails = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

let filteredData = employeeDetails.filter(data => data.tasksCompleted > 5);
console.log(filteredData);

let modifiedData = filteredData.map((data)=>{
    let performanceLevel = '';

    if(data.rating > 4.5){
        performanceLevel = 'Excellent';
    }else if(data.rating>3 && data.rating<4.5){
        performanceLevel = 'Good';
    }else{
        performanceLevel = 'Needs Improvement';
    }

    return {
        name : data.name,
        performanceLevel: performanceLevel
    };
})

console.log(modifiedData);

const priority = {
    "Excellent":3,
    "Good":2,
    "Needs Improvement":1
}

let sortedArray = modifiedData.sort((a,b)=>{
    return priority[b.performanceLevel] - priority[a.performanceLevel];
})

console.log(sortedArray)
