window.onload =function(){

  console.log('funciona');
   var trackId = 904224282
   console.log(location.search)

var queryString = location.search 
var queryStringOBJ = new this.URLSearchParams(queryString)
var trackId = queryStringOBJ.get('IdTrack')
  
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+trackId)
    .then(function(response) {
      return response.json()
    })
    .then(function(information) {
      console.log(information);
       
      var IdArtista = information.artist.id
      var IdAlbum = information.album.id


        var nombreCancion = information.title
        var nombreArtista = information.artist.name;
        var titulo = document.querySelector('h1')
        var contenidoTitulo = ''
  
     

      contenidoTitulo += '<a href="../html/track.html">'+nombreCancion+'</a>'
        titulo.innerHTML = contenidoTitulo
  
        var duracion = information.duration
        var tiempoCancion = duracion / 60
        var tiempoMinuto = Math.floor(tiempoCancion) ;
        var tiempoSegundo = duracion - (tiempoMinuto * 60)
        var segundos = ''
  
      
                  if(tiempoSegundo <10 ){
                    segundos ='0'+tiempoSegundo
      
                  }else {
                    segundos = tiempoSegundo
                  }
  
        var contenedorCancion = document.querySelector('.lista-canciones')
          
  
        var contenidoListaCanciones = '<div class="cancion-play">'
        contenidoListaCanciones += '<i id="play-circle-cancion" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
        contenidoListaCanciones += '<a  href="#button">'+nombreCancion+'</a>'
        contenidoListaCanciones += '</div> '
        contenidoListaCanciones += '<div class="duracion">'+tiempoMinuto+':'+segundos+'</div>'
  
        contenedorCancion.innerHTML = contenidoListaCanciones
  
   
          
          var nombreAlbum = information.album.title;
          var imagenArtista = information.artist.picture_big;
          var imagenAlbum = information.album.cover_big;
  
          var contenedorAlbum = document.querySelector('.parte-album')
          var contenedorArtista = document.querySelector('.parte-artista')
                  
          var contenidoAlbum = '<div class="titulo">'
          contenidoAlbum += '<a href="album.html?IdAlbum='+IdAlbum+'"><h4 class="tituloEnlace">'+nombreAlbum+'</h4></a>'
          contenidoAlbum += '</div>'
          contenidoAlbum += '<a href="album.html?IdAlbum='+IdAlbum+'"><div class="foto-album">'
          contenidoAlbum += '<img src="'+imagenAlbum+'" alt="foto-album">'
          contenidoAlbum += '</div></a>'
      
        
  
  
        var contenidoArtista = '<div class="titulo">'
        contenidoArtista+= '<a  href="artista.html?IdArtista='+IdArtista+'"><h4 class="tituloEnlace">'+nombreArtista+'</h4></a>'
        contenidoArtista+= '</div>'
        contenidoArtista+= '<a href="artista.html?IdArtista='+IdArtista+'"><div class="foto-artista">'
        contenidoArtista+= '<img src="'+imagenArtista+'" alt="foto-artista">'
        contenidoArtista+= '</div></a>'
  
        contenedorAlbum.innerHTML = contenidoAlbum
        contenedorArtista.innerHTML = contenidoArtista
     
      })
     
     .catch(function(error) {
        console.log("Error: " + error);
      })
  





  
      var idCancionesPlaylist = [
  
      ];

  
  var boton = document.querySelector('#button')
  
  
var idNuevaCancion =""

  
boton.onclick = function(){

JSON.parse(localStorage.getItem("idCancionesPlaylist"))
console.log(idCancionesPlaylist);

  idNuevaCancion = JSON.stringify(idCancionesPlaylist.push(trackId))




  
  }// funcion boton.onclick


  localStorage.setItem("idCancionesPlaylist",JSON.stringify(idNuevaCancion))
  
  
  
  
  
  
  
  }// cierra window.onload