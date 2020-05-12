
var randomMovieArray ="https://www.omdbapi.com/?i=tt3896198&apikey=81059d9e&t=";

// console.log(randomMovie);

function apiCall() {


var randomNumber = Math.floor((Math.random() * randomMovieArray.length) + 1);

var randomMovie = randomMovieArray[randomNumber];

// var randomMovie = Math.floor((Math.random() * 25897) + 1);


    $.getJSON('https://www.omdbapi.com/?i=tt3896198&apikey=81059d9e&t=' + encodeURI(randomMovie)).then(function(response){

    


        var image = response.Poster;
        var titre = response.Title;
        var plot = response.Plot;
        var genre = response.Genre;
        var year = response.Year;
        var runtime = response.Runtime;
        var actors = response.Actors;
        var director = response.Director;
        var language = response.Language;
        var imdbrating = response.imdbRating;
        var type = response.Type;



        for (let i = 0; i < 10; i++) {
        
            if(type == "movie"){

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

                    if(imdbrating !== "N/A"){
                        $('.noteImdb').text(imdbrating)
                    }

                    if(language !== "N/A"){
                        $('.langue').text(imdbrating)
                    }

                    if(type !== "movie"){
                        $('.type').text('hello')
                    }else{
                        $('.type').text(type)
                    }
            }else{
                continue;
            }
        }
       
    });
};


apiCall();

$('button').click(function(){
    apiCall();
})









