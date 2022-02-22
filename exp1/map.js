// map()
const cities = ["NY", "LA", "TX"];
const low = cities.map((value, i, ar)=>{
    return value.toLowerCase();
})
console.log(low);


//filter()
const data= [23, 30, 24, 60, 70, 12, 22];
const newData = data.filter((age)=> (age>30));
// console.log(newData);

//reduce()

const sum = data.reduce((num, acc)=> num+acc, 1000);
// console.log(sum);

const myMap = new Map();
// console.log(myMap)