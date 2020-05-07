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


var randomMovieArray = "https://www.omdbapi.com/?i=tt3896198&apikey=81059d9e";



// console.log(randomMovie);

function apiCall() {

var randomNumber = Math.floor((Math.random() * randomMovieArray.length) +1);

var randomMovie = randomMovieArray[randomNumber];

    $.getJSON('https://www.omdbapi.com/?i=tt3896198&apikey=81059d9e&t=' + encodeURI(randomMovie)).then(function(response){
        // var type = response.Type;
    // var movie = "movie";

    // var type = response.Type;

    // for (type = 0; type !== movie; type++) {

        var image = response.Poster;
        var titre = response.Title;
        var plot = response.Plot;
        var genre = response.Genre;
        var year = response.Year;
        var runtime = response.Runtime;
        var actors = response.Actors;
        var director = response.Director;
        var language = response.Language;

        if(image !== "N/A"){
            $('.poster').attr('src', image);
        }

        if(titre !== "N/A"){
            $('.titre').text(titre);
        }

        if(plot !=="N/A"){
            $('.resume').text(plot);
        }

        if(genre !== "N/A"){
            $('.genre').text(genre);
        }

        if(year !== "N/A"){
            $('.annee').text(year)
        }

        if(runtime !== "N/A"){
            $('.duree').text(runtime)
        }

        if(actors !== "N/A"){
            $('.acteurs').text(actors)
        }

        if(director !== "N/A"){
            $('.realisateur').text(director)
        }

        if(language !== "N/A"){
            $('.langue').text(language)
        }

        
  
    // };
       
    });
};

apiCall();

$('button').click(function(){
    apiCall();
})

// "Type":"movie"




