var arr = [20, 25, 41, 30, 73];

var total = arr.reduce((val, num)=>{
    return val+num;
});

console.log(total);

// var newArr = arr.filter(x => x>25);
// var newArr = arr.filter((x) => {
//     return x>25
// });
// console.log(newArr);


// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//     console.log(arr);
//   arr.push('new')
//   return word.length < 6
// });
// console.log("--------------------");
// console.log(appendedWords);

/*
arr.forEach((val, index)=>{
    console.log(val+1);
    
})
*/
/*
var arr2 = arr.map((val)=>{
    return val+1;
});
*/
var jsonData = [
    {
        name : "rohit",
        age : 25,
        salary : 5000
    },
    {
        name : "amar",
        age : 28,
        salary : 7000
    },
    {
        name : "nidhi",
        age : 22,
        salary : 5500
    },
    {
        name : "jaya",
        age : 23,
        salary : 6000
    }
];


// var newData = jsonData.map((obj, index, ar)=>{
//     console.log(ar);
//     obj.bonus = obj.salary*10/100;
//     return obj;
// })
// console.log(newData);



