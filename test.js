const reponse = prompt ("ou avez vous mal?","").toLowerCase()
alert(reponse)

switch(reponse){
    case "Abdomen":
        alert("vous avez de l'appendicite")
        break
    case "Gorge":
        const m = prompt("es-ce de la fievre ?","").toLowerCase()
         alert(m)

         if(m=="oui"){
            alert("vous avez un rhume")
         }else{
            alert("vous avez un mal de gorge")
         }

     

         break
    case "aucune":
        const g = prompt("avez vous de la toux","").toLowerCase()
         alert(g)
         if(g=="oui"){
            const k = prompt("avez vous de la fievre","").toLowerCase()
            alert(k)
              if(k=="oui"){
                alert("vous avez un rhume")
              }else{
                alert("vous avez un refroidissement")
              }

         }else{
            alert("Bonne santé")
         }
         

}
