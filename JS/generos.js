window.onload = function(){
    document.querySelector('.img-generos1').innerHTML = '<img class="loading" src="../img/loading gif.gif" alt="loading"</img>'
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')

    .then(function(response){
        return response.json();
       })
       .then(function(resultadoFinal){
        console.log(resultadoFinal.data);
        var generos = document.querySelector(".img-generos1");
 var contenido = ''
        for (var i = 1; i < resultadoFinal.data.length; i++){
           console.log(resultadoFinal.data[i].name);
           
           contenido += '<li><a href="Ingeneros.html?id='+ resultadoFinal.data[i].id +'&name='+ resultadoFinal.data[i].name +'"><img src="https://api.deezer.com/genre/' + resultadoFinal.data[i].id + '/image"><h2>'+ resultadoFinal.data[i].name+'</h2></a></li>'
           
           generos.innerHTML = contenido
           console.log(generos);
         }
       })
    
       .catch(function(error) {
        console.log("Error: " + error);
      })


// ahora cuando clickeas en el genero , te lleva a los artistas correspondientes de ese mismo !!! ///

}


