//Option fonction anonyme

(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
const contenuJson = await contenu.json()
console.log(contenuJson)

})()

// (async() => {
// 	const contenu = await fetch("https://data.loire-atlantique.fr/explore/dataset/793866443_restaurants-en-loire-atlantique/api/?refine.type=Restaurant&refine.categorie=Cuisine+traditionnelle&refine.commune=NANTES&refine.modepaiement=Tickets+Restaurant&refine.departement=Loire-Atlantique");
// const contenuJson = await contenu.json()
// console.log(contenuJson)

// })()

