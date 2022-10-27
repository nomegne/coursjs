console.log("on est jeudi")

//------------------------------null-undefined------------------------------------------------
let maVariableNull=null //créaton d'une variable null
let maVariableUndefined
let maVariable=0;

console.log(typeof maVariableNull)//bug Js c'est censé renvoyé un null et non object
if(maVariableNull==null){
    console.log("je  suis null")
}

console.log(typeof maVariableUndefined)
if(maVariable){//s'il y'a quelques choses dans ma variable j'entre dans ma condition
    console.log("je rentre dans la condition")
}

if(maVariable || maVariable===0){//s'il y'a quelques choses dans ma variable j'entre dans ma condition
    console.log("je rentre dans la condition je suis un nombre")
}





