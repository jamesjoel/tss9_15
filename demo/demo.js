/*async function hello(){
    console.log("inside function")
    const res = await fetch("https://api.github.com/users");
    console.log("before res");
    const user = res.json();
    console.log("user resolved");

    return user;
}
console.log("becore calling ---");
let a = hello();
a.then(data=>console.log(data));

console.log("after calling ---");
*/
console.log("START");
let p =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("1");
        // reject("1");
    }, 2000)
});

p.then((data)=>{
    console.log("succerss", data);
}).then((data)=>{
    
})


console.log("END");