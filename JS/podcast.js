window.onload =function(){






  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts')
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
   
    var contenedorPodcasts = document.querySelector('.lista-podcasts')
    var contenido =''
     
      for (let i = 0; i < information.data.length; i++) {
        const element = information.data[i];
        console.log(element)
      
        contenido += '<li class="informacion-podcast">'
        contenido += '<div class="imagen-podcast">'
        contenido += '<img src="'+element.picture_medium+'" alt="">'
        contenido += '<p>Fans: '+element.fans+'</p>'
        contenido += '</div>'
        contenido += '<div class="informacion">'
        contenido += '<h4><a href="#">'+element.title+'</a></h4>'
        contenido += '<p>Descripcion: <br>'+element.description+'</p>'
        contenido += '</div>'
        contenido += '</li>'

        


      }

        
      contenedorPodcasts.innerHTML = contenido
      
 
 
 
   
 
   })
   .catch(function(error) {
      console.log("Error: " + error);
    })
  



}