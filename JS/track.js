window.onload =function(){

    // FAVORITOS
    var recuperoStorage = localStorage.getItem("listaPlaylist");
  
    // Si todavía no tenía gifs favoritos
    if (recuperoStorage == null) {
      // Creo una lista vacia
      trackplaylist = [];
    } else {
      // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
      trackplaylist = JSON.parse(recuperoStorage);
    }
  
    
    /*FavoritoS */
  
    var datos = new URLSearchParams(location.search);
    var id = datos.get("IdTrack");
  
    if (trackplaylist.includes(id)) {
      document.querySelector("#button").innerHTML = "Quitar de mi Playlist";
    }


  
/*document.querySelector('.lista-canciones').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img> '*/
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+id)
var contenedorIframe = document.querySelector('.iframe-cancion')
contenedorIframe.innerHTML = '<iframe class="cancion-player" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+id+'&app_id=1" width="100%" height="90"></iframe>'





document.querySelector('.parte-album').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img>'
document.querySelector('.parte-artista').innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img>'
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+id)
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
          
  
        // var contenidoListaCanciones = '<div class="cancion-play">'
        // contenidoListaCanciones += '<i id="play-circle-cancion" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
        // contenidoListaCanciones += '<a  href="#button">'+nombreCancion+'</a>'
        // contenidoListaCanciones += '</div> '
        var contenidoListaCanciones = '<div class="duracion">Duracion: '+tiempoMinuto+':'+segundos+'</div>'
  
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
  


  
  
      document.querySelector("#button").onclick = function() {
  
        var botonFavorito = document.querySelector("#button")
    
        //Paso 2: Modificar la informacion
        // Si la serie ya era favorito
        if (trackplaylist.includes(id)) {
          // Lo quito
          var index = trackplaylist.indexOf(id);
          trackplaylist.splice(index, 1);
          botonFavorito.innerHTML = "Agregar a mi Playlist";
        } else {
          //Lo agrego
          trackplaylist.push(id);
          botonFavorito.innerHTML = "Quitar de mi Playlist";
        }
    
    
        //Paso 3: Escribir en storage
        var infoParaStorage = JSON.stringify(trackplaylist);
        localStorage.setItem("listaPlaylist", infoParaStorage);
        console.log(localStorage);
      }
    






var boton = document.querySelector('#button')


// var miObjeto = [];

// localStorage.setItem('listaPlaylist', JSON.stringify(miObjeto));

/*boton.onclick = function(){

  if (JSON.parse(localStorage.getItem('listaPlaylist')) === null) {
    var nuevaLista = [id];
    localStorage.setItem('listaPlaylist', JSON.stringify(nuevaLista));

  } else {
    var miLista = JSON.parse(localStorage.getItem('listaPlaylist'))
    miLista.push(id)
    localStorage.setItem('listaPlaylist', JSON.stringify(miLista));

  }


}*//// boton.onclick

console.log(JSON.parse(localStorage.getItem('listaPlaylist')))

  }// cierra window.onload







  ////// INTENTO DE WEBSTORAGE
   
//       var idCancionesPlaylist = [
  
//       ];

//       var arrayPlaylst = window.localStorage.getItem("idCancionesPlaylist")
      // var boton = document.querySelector('#button')
//       var idNuevaCancion =""

//       boton.onclick = function(){
// if (arrayPlaylst === null) {
  
//   var idCancionesPlaylist = [
  
//   ];
  
//     var arrayNuevo = JSON.stringify(idCancionesPlaylist.push(trackId))
//     window.localStorage.setItem("idCancionesPlaylist",JSON.stringify(arrayNuevo))

      
  
// } else {
  
  
//   var listaExistente = window.localStorage.getItem("idCancionesPlaylist")
//   var nuevaLista = JSON.stringify(listaExistente.push(trackId))
//   window.localStorage.setItem("idCancionesPlaylist",JSON.stringify(nuevaLista))
// }
   
// }// funcion boton.onclick   





  
  
  
//  console.log(localStorage)
  