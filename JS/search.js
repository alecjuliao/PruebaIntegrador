window.onload = function(){
  console.log(location.search)

  var queryString = location.search 
  var queryStringOBJ = new this.URLSearchParams(queryString)
  var busqueda = queryStringOBJ.get('search')





  // ESTE ES EL FECH DE ARTISTAS. TRAE LOS 4 u 8 (a definir) PRIMEROS
  document.querySelector('.resultado-artistas').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img> '
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
   
var contenedorArtista = document.querySelector('.resultado-artistas')
var contenido =''
 if (information.data.length == 0) {
   contenido= '<li id="informacion-sin-resultado" class="informacion-artista"><p class="sin-resultado">Lo sentimos, no encontramos resultados</p></li>'
   document.querySelector('.resultado-artistas').innerHTML = contenido
 } else {
  for (let i = 0; i < 4 && i< information.data.length; i++) {
    const element = information.data[i];
    console.log(element)
    // element.id
    var IdArtist = element.id
    contenido +='<li class="informacion-artista">'
    contenido +='<div class="imagen-artista">'
    contenido +='<a href="artista.html?IdArtista='+IdArtist+'"class="link-imagen-artista"><img src="'+element.picture_medium+'" alt=""></a>'
    contenido +='</div>'
    contenido +='<div class="nombre-artista">'
    contenido +='<h2><a href="artista.html?IdArtista='+IdArtist+'">'+element.name+'</a></h2>'
    // contenido +='<p>Fans: '+element.nb_fan+'</p>'
    contenido +='</div>'
    contenido +='</li>'


  }
  contenedorArtista.innerHTML = contenido
 }

   })
   .catch(function(error) {
      console.log("Error: " + error);
    })



    

// ESTE ES EL FECH DE TRACKS. TRAE LOS 4u 8 (a definir) PRIMEROS
document.querySelector('.resultado-tracks').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img> '
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
 
    var contenido =''
   if (information.data.length == 0) {
    contenido= '<li id="informacion-sin-resultado" class="informacion-track"><p class="sin-resultado">Lo sentimos, no encontramos resultados</p></li>'
    document.querySelector('.resultado-tracks').innerHTML = contenido
   } else {
    var contenedorTrack = document.querySelector('.resultado-tracks')
    var contenido =''
     
      for (let i = 0; i < 4 && i< information.data.length; i++) {
        const element = information.data[i];
        console.log(element)
      var trackId = element.id
      var IdArtist = element.artist.id
      var IdAlbum = element.album.id
        contenido += '<li class="informacion-track">'
        contenido += '<div class="imagen-artista">'
        contenido += '<a class="link-imagen-track" href="track.html?IdTrack='+trackId+'"><img src="'+element.album.cover_medium+'" alt=""></a>'
        contenido += '</div>'
        contenido += '<div class="informacion">'
        contenido += '<h2><a href="track.html?IdTrack='+trackId+'">'+element.title+'</a></h2>'
        contenido += '<p class="titulo-artista">Artista: <a href="artista.html?IdArtista='+IdArtist+'">'+element.artist.name+'</a></p><br><br>'
        // contenido += '<p class="titulo-album">Album: <a href="album.html?IdAlbum='+IdAlbum+'">'+element.album.title+'</a></p>'
        contenido += '</div>'
        contenido += '</li>'
    
        
    
    
      }
      contenedorTrack.innerHTML = contenido
   }




   

   })
   .catch(function(error) {
      console.log("Error: " + error);
    })




    // ESTE ES EL FECH DE ALBUMES. TRAE LOS 4 u 8 (a definir) PRIMEROS
    document.querySelector('.resultado-albumes').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img> '
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+busqueda)
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information);
    var contenido =''
   if (information.data.length == 0) {
    contenido= '<li id="informacion-sin-resultado" class="informacion-albumes"><p class="sin-resultado">Lo sentimos, no encontramos resultados</p></li>'
    document.querySelector('.resultado-albumes').innerHTML = contenido
   } else {
    var contenedorAlbum = document.querySelector('.resultado-albumes')
    var contenido =''
     
      for (let i = 0; i < 4 && i< information.data.length; i++) {
        const element = information.data[i];
        console.log(element)
          
       var IdAlbum = element.id
       var IdArtist = element.artist.id
      
        contenido += '<li class="informacion-album">'
        contenido += '<div class="imagen-album">'
        contenido += '<a href="album.html?IdAlbum='+IdAlbum+'" class="link-imagen-album"><img src="'+element.cover_medium+'" alt=""></a>'
        contenido += '</div>'
        contenido += '<div class="informacion">'
        contenido += '<h2><a href="album.html?IdAlbum='+IdAlbum+'">'+element.title+'</a></h2>'
        contenido += '<h5><a href="artista.html?IdArtista='+IdArtist+'">'+element.artist.name+'</a></h5>'
        contenido += '</div>'
        contenido += '</li>'
    
        
    
    
      }
      contenedorAlbum.innerHTML = contenido
     
   }




   

   })
   .catch(function(error) {
      console.log("Error: " + error);
    })

}//window.onload