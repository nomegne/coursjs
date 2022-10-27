// console.log("hello epsi")
// console.log("hello muriane ")
// const monBooolean=true
// typeof monBoolean
// const variable = "manger"
// // variable = variable.replaceAll("m","y")
// let monNom ="Nomegne"
// monNom = monNom.replaceAll("m","y")
// console.log(monNom)

// const userLogin = true

// if (userLogin ===true){
//     console.log("je suis un user loggue")
// } else{
//     console.log("je suis un user qui n'est pas loggue")
// }


let monNombre = 199

// for(i=1;i<=199;i++){

//     if(i%3==0){
//         console.log("coucou")
//     }
  
//     if(i%5==0){
//             console.log("Hello")
        
//     }
//     if(i%5==0 && i%3==0){
//         console.log("coucou Hello")
//     }
//     else{
//         console.log(i)
//     }
// }
   
let i=1
while(i<=199){
    let estMultiple = 0
    if(i%3==0) estMultiple=3
    if(i%5==0) estMultiple=5
    if(i%5==0 && i%3==0) estMultiple=10

   switch(estMultiple){
    case 3:
        console.log("coucou")
        break
    case 5:
        console.log("Hello")
        break
    case 10:
        console.log("coucou Hello")
        break
    default:
        console.log(i)

   }
   i++
}

// let i=1
// while(i<199){

//     if(i%3==0){
//         console.log("coucou")
//     }
  
//     if(i%5==0){
//             console.log("Hello")
        
//     }
//     if(i%5==0 && i%3==0){
//         console.log("coucou Hello")
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }





