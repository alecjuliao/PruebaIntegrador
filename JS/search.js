window.onload = function(){
  console.log(location.search)

  var queryString = location.search 
  var queryStringOBJ = new this.URLSearchParams(queryString)
  var busqueda = queryStringOBJ.get('search')





  // ESTE ES EL FECH DE ARTISTAS. TRAE LOS 4 PRIMEROS
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
   
var contenedorArtista = document.querySelector('.resultado-artistas')
var contenido =''
 
  for (let i = 0; i < 4; i++) {
    const element = information.data[i];
    console.log(element)
    // element.id

    contenido +='<li class="informacion-artista">'
    contenido +='<div class="imagen-artista">'
    contenido +='<img src="'+element.picture_medium+'" alt="">'
    contenido +='</div>'
    contenido +='<div class="nombre-artista">'
    contenido +='<h2><a href="">'+element.name+'</a></h2>'
    // contenido +='<p>Fans: '+element.nb_fan+'</p>'
    contenido +='</div>'
    contenido +='</li>'


  }
  contenedorArtista.innerHTML = contenido
   })
   .catch(function(error) {
      console.log("Error: " + error);
    })





// ESTE ES EL FECH DE TRACKS. TRAE LOS 4 PRIMEROS
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
 
   




   
var contenedorTrack = document.querySelector('.resultado-tracks')
var contenido =''
 
  for (let i = 0; i < 4; i++) {
    const element = information.data[i];
    console.log(element)
  
  
    contenido += '<li class="informacion-track">'
    contenido += '<div class="imagen-artista">'
    contenido += '<img src="'+element.artist.picture_medium+'" alt="">'
    contenido += '</div>'
    contenido += '<div class="informacion">'
    contenido += '<h2><a href="">'+element.title+'</a></h2>'
    contenido += '<h5>Artista: <a href="">'+element.artist.name+'</a></h5>'
    // contenido += '<h5>Album: <a href="">'+element.album.title+'</a></h5>'
    contenido += '</div>'
    contenido += '</li>'

    


  }
  contenedorTrack.innerHTML = contenido
   })
   .catch(function(error) {
      console.log("Error: " + error);
    })




    // ESTE ES EL FECH DE ALBUMES. TRAE LOS 4 PRIMEROS
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
 
   




   
var contenedorAlbum = document.querySelector('.resultado-albumes')
var contenido =''
 
  for (let i = 0; i < 4; i++) {
    const element = information.data[i];
    console.log(element)
      
    // element.id
  
    contenido += '<li class="informacion-album">'
    contenido += '<div class="imagen-album">'
    contenido += '<img src="'+element.cover_medium+'" alt="">'
    contenido += '</div>'
    contenido += '<div class="informacion">'
    contenido += '<h2><a href="">'+element.title+'</a></h2>'
    contenido += '<h5><a href=""></a>'+element.artist.name+'</h5>'
    contenido += '</div>'
    contenido += '</li>'

    


  }
  contenedorAlbum.innerHTML = contenido
   })
   .catch(function(error) {
      console.log("Error: " + error);
    })

}//window.onload