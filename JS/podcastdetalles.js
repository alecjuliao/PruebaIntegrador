window.onload = function(){
// Preguntar si tenemos que usar lo siguiente para obtener la info del Podcast
/*
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")
*/ 

//En nuemro 0 del fetch es algo???
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts")
    .then(function(respuesta){
        return respuesta.json();
       })
       .then(function(resultadoFinal){
        console.log(resultadoFinal.data);

        var banner = document.querySelector(".banner")
        var title = document.querySelector(".nombre-podcast")
        var info =document.querySelector(".infoPodcast")
        for (var i = 0; i < resultadoFinal.data.length; i++){
           console.log(resultadoFinal.data[i].name);
           banner.innerHTML += '<img src="'+resultadoFinal.data[i].picture+'">'
           title.innerHTML += '<h2>'+ resultadoFinal.data[i].title +'</h2>' 
           info.innerHTML += '<h2>'+ resultadoFinal.data[i].description +'</h2>' 
           console.log(generos);
         }
       })
    
       .catch(function(error) {
        console.log("Error: " + error);
      })
    
    }
    