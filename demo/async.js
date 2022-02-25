async function hello(){
    console.log(2);
    await console.log(4);
    return "james";
    
}
console.log(1);
hello().then(function(data){
    console.log(data);
})
console.log(3);
