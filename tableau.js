const monTableau = []
console.log(monTableau)

const Passagers=["didier","muriane","dounia"]
console.log(Passagers[1])

for (let index=0; index<Passagers.length;index++){
    console.log(Passagers[index])
}

console.log("for avec of------------------")
for(let compte of Passagers){
    console.log("le passager est :"+ compte)
}

console.log("for avec in-------------------")
for(let i in Passagers){
    console.log("le passager est :"+ Passagers[i])
}

console.log("foreach-------------------")
const passagersTranformers = Passagers.map(Passagers=> "le passagers est : "+Passagers)
console.log(passagersTranformers)

console.log("mon premier objet-------------------")
const monPemierObjet = {}
monPemierObjet.cle="valeur"

const contact={"nom":"Dounia",prenom:"muriane"}
console.log(contact)
console.log(contact.nom)

var lettres_restantes='abcdefghijklmnopqrstuvwxyz'
var tabEssaie =['chat', 'lapin', 'faisan','amie','tableau'];
var newMot=tabEssaie[2]
var i=newMot[1]
var newVoc=newMot.replace(newMot[1],"-")

console.log(newVoc)
console.log(newMot)