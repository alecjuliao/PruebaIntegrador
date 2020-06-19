window.onload = function(){

fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts")
.then(function(respuesta){
    return respuesta.json();
   })
   .then(function(resultadoFinal){
    console.log(resultadoFinal.data);
    var generos = document.querySelector("ul#podcastMas");
    for (var i = 0; i < resultadoFinal.data.length; i++){
       console.log(resultadoFinal.data[i].name);
       generos.innerHTML += '<li>'+'<a href="podcastdetalles.html?id='+ resultadoFinal.data[i].id +'&name='+ resultadoFinal.data[i].title +'">'+ '<img src="'+resultadoFinal.data[i].picture+'">' + resultadoFinal.data[i].title +'</a>' + '</li>'
       console.log(generos);
     }
   })

   /*.catch(function(error) {
    console.log("Error: " + error);
  })*/

}
