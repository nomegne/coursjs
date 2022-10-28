
let pointUser =0
let pointMachine=0
let reponseM

function entierAleatoire(min, max)
{
    const resultat = Math.floor(Math.random() * (max - min + 1)) + min
     return resultat
}


for (let index = 0; index < 3; index++) {

    const reponse = prompt ("choississez entre piere,feuille,ciseau","").toLowerCase()
    alert(reponse)
    

resultat =entierAleatoire(1,3)

if(resultat==1) reponseM ="feuille"
if(resultat==2) reponseM ="caillou"
if(resultat==3) reponseM ="ciseau"



switch(reponse){
    case "piere":
        if(reponse==reponseM){
            pointUser+=1
        } 
        else {
            pointMachine+=1
        } 
    break

    case "ciseau":
        if(reponse==reponseM)  {
            pointUser+=1
    
        } 
        else  {
           
            pointMachine+=1
        } 
    break

    case "feuille":
        if(reponse==reponseM)  {
            pointUser+=1
            
        } 
        else  {
            
            pointMachine+=1
        } 
    break

}

alert("user"+" "+pointUser+" "+"machine"+" "+pointMachine)
    
}



if (pointMachine>pointUser) {
    alert("vous avez perdu"+" "+"user"+" "+pointUser+" "+"machine"+pointMachine)
}else if (pointMachine<pointUser) {
    alert("vous avez gagné"+" "+"user"+" "+pointUser+" "+"machine"+pointMachine)
}else{
    alert("nous sommes à egalité"+" "+"user"+" "+pointUser+" "+"machine"+pointMachine) 
} 

