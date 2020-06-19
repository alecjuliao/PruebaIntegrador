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


  // localStorage.removeItem('nombrePlaylist')

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

var divIframe = document.querySelector('.eliminar-todo')
var divBoton = document.querySelector('.iframe-cancion')
 if (arrayIdsCanciones == null || arrayIdsCanciones == "") {
   document.querySelector('.vacia').innerHTML = '<p class="tituloVacia">Todavia no agregaste canciones a tu Playlist... <br><br><br> ¡Explora la pagina y armala con tu musica favorita!</p><br><h4><a href="home.html">Home<a/></h4>'
   divBoton.style.display = 'none'
   divIframe.style.display = 'none'
 } else {
   for (let i = 0; i < arrayIdsCanciones.length; i++) {
     const element = arrayIdsCanciones[i];
    //  console.log(arrayIdsCanciones)
     trackId = element
    
console.log(trackId)
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
   
   
       //MIRA ACAAAAAAAA Y SEGUILO VOS LINEA 108 Y ABAJO DE TODO TE DEJE UNA FUNCION PARA QUE VOS HAGAS LA MAGIA. ALGO MUY PARECIDO TENES QUE HACER PARA ELIMINAR.
  //  seria la tercera linea 
  //  contenido += '<i onclick="reproducirCancion(this.id)" id="' + information.Id + '" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
                   var contenido = '<li class="cancion">'
                   contenido += '<div class="cancion-play">'
                   contenido += '<i  onclick="reproducirCancion(this.id)" id="' + trackId + '"class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
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

   // si la lista no esta vacia, traeme el iframe. 
  //  var contenidoIframe = ' <iframe class="cancion-player" scrolling="no" frameborder="0" allowTransparency="true"'
  //   contenidoIframe += 'src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&'
  //   contenidoIframe += 'type=tracks&id=479348202&app_id=1" width="100%" height="96"></iframe>'
  //    document.querySelector('.iframe-cancion').innerHTML= contenidoIframe


     document.querySelector('.eliminar-todo').innerHTML = '<button type="button" class="eliminarToda">Eliminar la playlist</button>'
     var botonEliminarPlaylist = document.querySelector('.eliminar-todo')
            botonEliminarPlaylist.onclick = function(){
              localStorage.removeItem("listaPlaylist");
              location.reload();
                  }
}// no borrar!! IF ELSE

///// onclick del play circle, meter este iframe con inner html con el track id del track al que le puso play
//  <iframe class="cancion-player" scrolling="no" frameborder="0" allowTransparency="true" 
//      src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+Ccatenar id track+'&app_id=1" 
///     width="100%" height="96"></iframe>


// 

/////////// NO ME ESTA SALIENDO. NO ENTIENDO PORQUE NO ME DEJA PONERLE UN EVENT LISTENER A ALGO QUE PUSE CON INNER HTML ANTES. 
// cuando pongo probando boton = doc.qs h1 me deja pero si pongo la clase del play circle no me deja
// console.log(arrayIdsCanciones)
// var probandoBoton = document.querySelector('h1')
// var probandoBoton = document.querySelector('#eliminar-de-playlist') // este no me deja lrpm
// probandoBoton.addEventListener('click', function(){
// for (let i = 0; i < arrayIdsCanciones.length; i++) {
//   const element = arrayIdsCanciones[i];
//   // console.log(this.element)
//   console.log(element)
// }
// })



}// no borrar. window.onload



function reproducirCancion (trackId){

  //aca tenes que hacer lo que haga falta con el iframe para que ponga la cancion que vos quieras. 
  // console.log(idCancion)
  var contenidoIframe = ' <iframe class="cancion-player" scrolling="no" frameborder="0" allowTransparency="true"'
  contenidoIframe += 'src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&'
  contenidoIframe += 'type=tracks&id='+trackId+'&app_id=1" width="100%" height="96"></iframe>'
   document.querySelector('.iframe-cancion').innerHTML= contenidoIframe

}





