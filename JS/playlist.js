window.onload = function(){
  arrayIdsCanciones = JSON.parse(window.localStorage.getItem("listaPlaylist"))

  console.log(arrayIdsCanciones)


  // localStorage.removeItem('nombrePlaylist')

  
if (JSON.parse(window.localStorage.getItem("nombrePlaylist")=== null)) {
  var nuevoNombre = prompt('Ponele un nombre a tu playlist!')
  if (nuevoNombre == null) {
    document.querySelector('h1').innerHTML = '<h1 class="play-list">Tu PlayList</h1>'
    
  } else {
    window.localStorage.setItem('nombrePlaylist', JSON.stringify(nuevoNombre))
  document.querySelector('h1').innerHTML = nuevoNombre
  }
  
} else {
 
  var nombreDePlaylist = JSON.parse(window.localStorage.getItem("nombrePlaylist"))

  document.querySelector('h1').innerHTML = nombreDePlaylist
}


// if (JSON.parse(window.localStorage.getItem("nombrePlaylist")=== null)) {
//   var nuevoNombre = prompt('Ponele un nombre a tu playlist!')
//   if (nuevoNombre =='') {
//   contenidoH1 = 'Tu PlayList'
//     document.querySelector('h1').innerHTML = contenidoH1
//     window.localStorage.setItem('nombrePlaylist', JSON.stringify(contenidoH1))
//   } else {
//     window.localStorage.setItem('nombrePlaylist', JSON.stringify(nuevoNombre))
//   document.querySelector('h1').innerHTML = nuevoNombre
//   }
  
// } else {
 
//   var nombreDePlaylist = JSON.parse(window.localStorage.getItem("nombrePlaylist"))

//   document.querySelector('h1').innerHTML = nombreDePlaylist
// }






var trackId =''

var nombreCancion ='' 
var nombreArtista ='' 
var titulo ='' 

var duracion ='' 
var tiempoCancion ='' 
var tiempoMinuto ='' 
var tiempoSegundo ='' 
var segundos = ''


 if (arrayIdsCanciones == null || arrayIdsCanciones == "") {
   document.querySelector('.vacia').innerHTML = '<p class="tituloVacia">Todavia no agregaste canciones a tu Playlist... <br><br><br> ¡Explora la pagina y armala con tu musica favorita!</p><br><h4><a href="home.html">Home<a/></h4>'
 } else {
   for (let i = 0; i < arrayIdsCanciones.length; i++) {
     const element = arrayIdsCanciones[i];
    //  console.log(arrayIdsCanciones)
     trackId = element
    

     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+trackId)
     .then(function(response) {
       return response.json()
     })
     .then(function(information) {
       console.log(information);
    
 
          nombreCancion = information.title
          nombreArtista = information.artist.name;
          
   
          duracion = information.duration
          tiempoCancion = duracion / 60
          tiempoMinuto = Math.floor(tiempoCancion) ;
          tiempoSegundo = duracion - (tiempoMinuto * 60)
          segundos = ''
   
       
                   if(tiempoSegundo <10 ){
                     segundos ='0'+tiempoSegundo
       
                   }else {
                     segundos = tiempoSegundo
                   }
   
   
      
   
                   var contenido = '<li class="cancion">'
                   contenido += '<div class="cancion-play">'
                   contenido += '<i id="play-circle-cancion" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
                   contenido += ' <a href="track.html?IdTrack='+information.id+'">'+nombreCancion +'  '+'-'+'  '+ nombreArtista+'</a>'
                   contenido += ' </div>'
                   contenido += '<div class="duracion">'+tiempoMinuto+':'+segundos+'</div>'
                   contenido += '<div class="eliminar">'
                   contenido += '<i class="fas fa-minus fa-1x" id="eliminar-de-playlist"></i>'
                   contenido += '</div>'
                   contenido += '</li>'
                   
                  
                    
                
                  
                  
                   
                   
                   
              
                   document.querySelector('.canciones').innerHTML += contenido
                   console.log(information.id)
                 
       })
      
      .catch(function(error) {
         console.log("Error: " + error);
       })


   }// for NO BORRAR




   

}// no borrar!! IF ELSE

///// onclick del play circle, meter este iframe con inner html con el track id del track al que le puso play
//  <iframe class="cancion-player" scrolling="no" frameborder="0" allowTransparency="true" 
//      src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+Ccatenar id track+'&app_id=1" 
///     width="100%" height="96"></iframe>


// var botonEliminarPlaylist = document.querySelector('h1')

// botonEliminarPlaylist.onclick = function(){
//   localStorage.removeItem('listaPlaylist')
// }
}// no borrar. window.onload









