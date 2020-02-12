
        /* Récupère les donées d'un fetche */
        function Lecture(){
            fetch("https://workshop.neotechweb.net/ws/skimap/1.0.0/stations.php?massif=2")
            .then( response => response.json())
            .then(function (data){
              console.log(data);
              let liste = document.querySelector("ul");
  
              //Filtre les altitude_mini > 900 et tri par le nombre de piste
              data.filter(elt => elt.altitude_mini > 900).sort((a, b) => a.pistes - b.pistes).forEach(elt => {
                let li = document.createElement("li");
                
                //Fonctionne mais mauvaise manière de faire
                //li.innerText = elt.nom + " (" + elt.altitude_mini + " - " + elt.altitude_maxi + ")";
                
                //Bonne manière de faire altgr7
                //Interpolation de chaine avec `` permet mettre des varaible dans le text avec ${}
                li.innerText = `${elt.nom} (${elt.altitude_mini}m - ${elt.altitude_maxi}m - ${elt.pistes} pistes) `
                liste.appendChild(li);
  
              });
            })
            .catch(function (err) {
              console.log("Erreur !!!");
            });
          }
  
  
  