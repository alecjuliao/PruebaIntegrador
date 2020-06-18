window.onload = function(){
    
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')

    .then(function(response){
        return response.json();
       })
       .then(function(resultadoFinal){
        console.log(resultadoFinal.data);
        var generos = document.querySelector("ul.img-generos1");
 
        for (var i = 0; i < resultadoFinal.data.length; i++){
           console.log(resultadoFinal.data[i].name);
           generos.innerHTML += '<li>'+'<a href="Ingeneros.html?id='+ resultadoFinal.data[i].id +'&name='+ resultadoFinal.data[i].name +'">'+ '<img src="https://api.deezer.com/genre/' + resultadoFinal.data[i].id + '/image">' + resultadoFinal.data[i].name +'</a>' + '</li>'
           console.log(generos);
         }
       })
    
       .catch(function(error) {
        console.log("Error: " + error);
      })




}


