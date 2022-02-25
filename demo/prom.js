let dataCome = (data)=>{
    console.log(data);
}
let notCome = (err)=>{
    console.log(err);
}
let check=true;
let x = new Promise((reslove, reject)=>{
    if(check){
        reslove("success");
    }else{
        reject("error");
    }
});

// x.then((a)=>{
//     console.log(a);
// }).catch((b)=>{
//     console.log(b);

// });
x.then(dataCome);
x.catch(notCome);


