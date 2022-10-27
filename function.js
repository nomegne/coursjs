//------------------------------LES FONCTIONS ------------------------------------------------
console.log("version classique ")
//aucun parametre
function afficheDeuxValeurs(){
    return "coucou"
}

const reponseFonction = afficheDeuxValeurs()
console.log(reponseFonction)

//un ou deux  parametres
function afficheDeuxValeurs1(param1,param2){
    return param1+ "---"+param2
}

const reponseFonction1 = afficheDeuxValeurs1("coucou",20)
console.log(reponseFonction1)

//FONCTION FLECHE
console.log("version fléché")

const afficheDeuxValeurs2 = (param1,param2) => {
    return param1+ "---"+param2
}

 const reponseFonctionF=afficheDeuxValeurs2("coucou TOI",50)
console.log(reponseFonctionF)


const sum = (nbre1,nbre2) => {
    return nbre1+nbre2
}

const sum1 = (nbre1,nbre2) => 
    nbre1+nbre2

const resultat =  sum(4,9)
console.log(resultat)
console.log(sum1(4,8))

function sum3(param1,param2){
    return param1+param2
}

console.log(sum3(4,12))