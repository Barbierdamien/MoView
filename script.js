  /* Récupère les donées d'un fetche */
//   function Lecture(){
//     fetch("http://img.omdbapi.com/?apikey=[89190b50]&")
//        .then( response => response.json())
//        .then(function (data){
//            console.log(data);
//            let liste = document.querySelector("ul");
 
//        //  //Filtre les altitude_mini > 900 et tri par le nombre de piste
//            //  data.filter(elt => elt.altitude_mini > 900).sort((a, b) => a.pistes - b.pistes).forEach(elt => {
//            let li = document.createElement("li");
               
//        //Fonctionne mais mauvaise manière de faire
//            //li.innerText = elt.nom + " (" + elt.altitude_mini + " - " + elt.altitude_maxi + ")";
               
//        //Bonne manière de faire altgr7
//        //Interpolation de chaine avec `` permet mettre des varaible dans le text avec ${}
//            li.innerText = `${elt.nom} (${elt.altitude_mini}m - ${elt.altitude_maxi}m - ${elt.pistes} pistes) `
//            liste.appendChild(li);
 
       
//        })
//        .catch(function (err) {
//            console.log("Erreur !!!");
//        });
//    }


var randomMovieArray = ['Star wars', 'Game of thrones','Harry Potter','Lord of the rings'];



// console.log(randomMovie);

function apiCall() {

var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1 ) + 1);

var randomMovie = randomMovieArray[randomNumber];

    $.getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=81059d9e&t=' + encodeURI(randomMovie)).then(function(response){
        var image = response.Poster;
        var titre = response.Title;

        if(image !== "N/A"){
            $('.poster').attr('src', image);
        }

        if(titre !== "N/A"){
            $('.titre');
        }

    });
};

apiCall();

$('button').click(function(){
    apiCall();
})
