let ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
let VOCABULAIRE = ['chat', 'lapin', 'faisan','amie','tableau'];
let essaie =10
var lettres_restantes='abcdefghijklmnopqrstuvwxyz'
var mot

var jeu_en_cours = true
var victoire = false

//choix de mots dans notre tableau
function Choix_De_Mots(){
    var max =VOCABULAIRE.length
    var nombre = Math.random()*max //j'obtient un nombre inclu entre 0 et 1
    nombre = Math.round(nombre)//me renvoie un nombre entier
    mot=VOCABULAIRE[nombre]
    return mot
}

//comparaison lettre choisie et mots donné
function Contient_lettre_mot(lettreUser,motRobot){
    
    for(i=0; i<motRobot.length; i++){
        if(motRobot[i]==lettreUser){
            motRobot=motRobot.replace("")
            return true
        }
       
    }
    return false
 }

//verification des lettres
function LettreR(lettre){
    for(var i=0;i<lettres_restantes.length;i++){
        if(lettres_restantes[i]==lettre){
            lettres_restantes.replace(lettre,"-")
            return true  }
        // }else {  
        //     return false
        // } 
        
    }
    return false
}


var mot_à_deviner= Choix_De_Mots()
//le jeux commence ---------------------------------------------------------------------------------

for(var index=9;index>=0;index--){
    const reponse = prompt ("choississez une lettre ","").toLowerCase()
    alert(reponse)

    var verification =LettreR(reponse)

    if (verification) {
       var jeu_en_cours=Contient_lettre_mot(reponse,mot_à_deviner)  
       
          if(jeu_en_cours){
            alert ("Bravo vous avez trouvez"+" "+"lettre choisie"+" "+reponse+"du mot")    
            alert ("il vous rste "+ index+" "+"tentative")
          }else{
            alert ("Desolé"+" "+"lettre choisie"+" "+reponse+"  "+"n'est pas contenu dans ce mot")    
            alert ("il vous rste "+ index+" "+"tentative")
          }

    }else{
          alert ("lettre déja utilisé")
    }

    }
    

