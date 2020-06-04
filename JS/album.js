window.onload = function(){

  console.log("funciona");
  console.log(location.search)

  var queryString = location.search 
  var queryStringOBJ = new this.URLSearchParams(queryString)
  var idAlbum = queryStringOBJ.get('IdAlbum')
 
 
  // var idAlbum = 60067052
  // var idAlbum = 136522252
  // var idAlbum = 145596282
  
 
  ////// TOP CANCIONES
   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+idAlbum)
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information);
   var contenedorCancion = document.querySelector('.lista-canciones')
   var contenido = ' '
   var duracion = ' ';
   var tiempoCancion =' '
   var tiempoMinuto = ' '
   var tiempoSegundo = ' '
   var segundos = ''
       for (let i = 0; i < information.tracks.data.length; i++) {
         const element = information.tracks.data[i];
     
         
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
         
                 
         
       
        contenido+='<li class="cancion">'
        contenido+='<div class="cancion-play">'
        contenido+='<i id="play-circle-cancion" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>'
        contenido+='<a href="/html/track.html">'+element.title_short +'</a>'
        contenido+='</div> '
        contenido+='<div class="duracion">' + tiempoMinuto+':'+segundos + '</div>'+' '
        contenido+='<div class="agregar">'
        contenido+='<i class="fas fa-plus fa-1x" id="agregar-a-playlist"></i>'
        contenido+='</div>'
        contenido += '</li>'
       
          contenedorCancion.innerHTML = contenido;
        
 
         }
   
       
     })
 
 .catch(function(error) {
   console.log("Error: " + error);
 })
 

 

 
 
 ///////////////// IMAGEN + TITULO ALBUM + NOMBRE ARTISTA

 fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+idAlbum)
 .then(function(response) {
   return response.json()
 })
 .then(function(information) {
   console.log(information);

   var minutos = ''
   var tiempoMinuto=''

   var duracion = information.duration;
   var tiempoAlbum = duracion / 3600
   var tiempoHora= Math.floor(tiempoAlbum) ;
   if (tiempoHora < 1){
     tiempoMinuto= Math.ceil(duracion / 60) 
   }else{
    tiempoMinuto = Math.ceil((duracion  - (tiempoHora * 3600))/60)
   }
   
    

         if(tiempoMinuto <10 ){
           minutos ='0'+tiempoMinuto

         }else {
           minutos = tiempoMinuto
         }
         

var contenedorInformacion = document.querySelector('.nombre-imagen')
var contenido = '<div class="foto-album"> '
contenido += '<img src="'+information.cover_big+'" alt="">'
contenido += '</div>'
contenido += '<div id="nombreAlbum" class="nombre-album"> <a class="linkAlbum" href="#nombreAlbum">' + information.title +'</a> '
contenido += ' </div>'
contenido += ' <div class="artista-fechaLanzamiento">'
contenido += ' <p><a href="/html/artista.html">'+information.artist.name+'</a>  '+ information.release_date+'</p>'
contenido += ' <p>Duracion: '+tiempoHora+' hs '+tiempoMinuto+' min</p>'
contenido += '</div> '
         


contenedorInformacion.innerHTML = contenido 



  

  })
  .catch(function(error) {
     console.log("Error: " + error);
   })
 
 
 
 
 
 
 
 
                    //  ///////////// ALBUMES
                    //  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/60067052')
                    //  .then(function(response) {
                    //    return response.json()
                    //  })
                    //  .then(function(information) {
                    //    console.log(information);
                    //    var contenedorAlbumes = document.querySelector('.lista-albumes')
                    //    var contenido = ' '
                    //        for (let i = 0; i < 4; i++) {
                    //          const element = information.tracks[i];
                    //          //console.log(element);
                    //          // console.log(element.cover_medium);
                    //          // console.log(element.title);
                            
                    
                          
                        
                    //        contenido += '<a href="#"><li class="album">'
                    //        contenido += '<img src="'+element.cover_medium+'" alt="foto album">'
                    //        contenido += '<h5>'+element.title+'</h5>'
                    //        contenido += '<div class="play-circle"><i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i></div>'
                    //        contenido += '</li></a>'
                    //          contenedorAlbumes.innerHTML = contenido;
                        
                    
                    //        }
                    //      })
                    
                    //  .catch(function(error) {
                    //    console.log("Error: " + error);
                    //  })
                    

                    
 
 
 
 // cierre del window.onload
 }