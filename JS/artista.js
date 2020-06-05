window.onload = function(){

  console.log("funciona");
  console.log(location.search)

  var queryString = location.search 
  var queryStringOBJ = new this.URLSearchParams(queryString)
  var idArtista = queryStringOBJ.get('IdArtista')
 
 
  // var idArtista = 7626764
  // var idArtista = 632926
  
  
 
  ////// TOP CANCIONES
   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtista+'/top')
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information.data);
   var contenedorCancion = document.querySelector('.lista-canciones')
   var contenido = ' '
   var duracion = ' ';
   var tiempoCancion =' '
   var tiempoMinuto = ' '
   var tiempoSegundo = ' '
   var segundos = ''
       for (let i = 0; i < information.data.length; i++) {
         const element = information.data[i];
     
         
       duracion = element.duration;
       tiempoCancion = duracion / 60
       tiempoMinuto= Math.floor(tiempoCancion) ;
       tiempoSegundo = duracion - (tiempoMinuto * 60)
        
 
             if(tiempoSegundo <10 ){
               segundos ='0'+tiempoSegundo
 
             }else {
               segundos = tiempoSegundo
             }
         // console.log('la duracion en segundos es ' + duracion);
         // console.log('el tiempo en minuto con decimales es '+tiempoCancion)
         // console.log('los segundos que sobran son '+ tiempoSegundo);
         // console.log("el tiempo en minuto es "+ tiempoMinuto)
         // console.log(segundos);
       var trackId = element.id
        contenido+='<li class="cancion">'
        contenido+='<div class="cancion-play">'
        contenido+='<i id="play-circle-cancion" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
        contenido+='<a href="track.html?IdTrack='+trackId+'">'+element.title_short +'</a>'
        contenido+='</div> '
        contenido+='<div class="duracion">' + tiempoMinuto+':'+segundos + '</div>'+' '
        contenido+='<div class="agregar">'
        contenido+='<i class="fas fa-plus fa-1x" id="agregar-a-playlist"></i>'
        contenido+='</div>'
        contenido+='</li>'
       
          contenedorCancion.innerHTML = contenido;
        
 
         }
   
       
     })
 
 .catch(function(error) {
   console.log("Error: " + error);
 })
 
 ///////////// ALBUMES
 fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtista+'/albums')
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information.data);
   var contenedorAlbumes = document.querySelector('.lista-albumes')
   var contenido = ' '
       for (let i = 0; i < 4; i++) {
         const element = information.data[i];
         //console.log(element);
         // console.log(element.cover_medium);
         // console.log(element.title);
         
 
       var IdAlbum = element.id
     
       contenido += '<li class="album"><a href="album.html?IdAlbum='+IdAlbum+'">'
       contenido += '<img src="'+element.cover_medium+'" alt="foto album">'
       contenido += '<h5>'+element.title+'</h5>'
       contenido += '<div class="play-circle"><i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i></div>'
       contenido += '</a></li>'
         contenedorAlbumes.innerHTML = contenido;
     
 
       }
     })
 
 .catch(function(error) {
   console.log("Error: " + error);
 })
 
 /// NOMBRE ARTISTA
   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtista+'/')
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information.name);

   
   var nombreArtista = document.querySelector('.nombre-artista')
    var contenido = '<a href="#nombreArtista"><h1 id="nombreArtista">'+information.name+'</h1></a>'
    contenido += '<div class="numero-fans"> A '+information.nb_fan +' personas le gusta '+information.name
 
 
         nombreArtista.innerHTML = contenido;
     
 
     })
 .catch(function(error) {
   console.log("Error: " + error);
 })
 
 
 
 // ///////////// IMAGEN
 
 
 
 fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtista+'/')
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information);
   
   
     var contenedorImagen = document.querySelector('.foto-artista')
     var contenido = '<img src="'+information.picture_big+'" alt="imagenArtista">'
        
         contenido += '</div>'
       
     contenedorImagen.innerHTML = contenido
  })
  .catch(function(error) {
     console.log("Error: " + error);
   })
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // cierre del window.onload
 }
 
 