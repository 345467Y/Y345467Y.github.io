let x = 10;
const promesa = new Promise((resolve, reject)=>{
    if (x==10){
        resolve("la variable es igual a 10")

    }else{
        reject("la variable no es igual a 10")
    }
})

promesa.then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)

})