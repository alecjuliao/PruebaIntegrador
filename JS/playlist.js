window.onload = function(){
  arrayIdsCanciones = JSON.parse(window.localStorage.getItem("listaPlaylist"))

  console.log(arrayIdsCanciones)

var trackId =''

var nombreCancion ='' 
var nombreArtista ='' 
var titulo ='' 

var duracion ='' 
var tiempoCancion ='' 
var tiempoMinuto ='' 
var tiempoSegundo ='' 
var segundos = ''
var eliminar = ''
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



  




////////// ELIMINAR CANCION DE PLAYLIST

// var eliminar = document.querySelector('#eliminar-de-playlist')

  //  eliminar.onclick = function(){
  
  
  // console.log(this.trackId)
  
  //  }  
           







}// no borrar. window.onload









