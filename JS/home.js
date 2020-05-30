window.onload = function(){
  console.log("Bienvenid@ a nuestra pagina web! Apretando en el icono de arriba a la derecha podras ver tu playlist! ");
  
  
  
  /////////SLIDER
  
  
  
  
  
  //////// ALBUMES
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information.data);
      var contenedorAlbumes = document.querySelector('.contenedor-albumes')
      var contenido = ' '
          for (let i = 0; i <  information.data.length ; i++) {
            const element = information.data[i];
            // console.log(element);
            // console.log(element.cover_medium);
            // console.log(element.title);
            // console.log(element.artist.name);
      
  
          
            contenido +='<li>'
            contenido +='<a href="/html/album.html">'
            contenido +='<img class="imagen" src="'+element.cover_medium+'" alt="Abbey-Road">'
            contenido +='<h5 class="nombre-album">'+element.title +'</h5>'
            contenido +='<i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i>'
            contenido +=' <a href="/html/artista.html"><h6 class="nombre-artista">'+element.artist.name +'</h6></a>'
            contenido +='</a> '
            contenido +='</li> '
      
       contenedorAlbumes.innerHTML = contenido;
      
  
      }
      })
  
  .catch(function(error) {
    console.log("el error es el siguiente: " + error);
  
  
  })
  
  
  ///////////// Artistas
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information.data);
      var contenedorAlbumes = document.querySelector('.contenedor-artistas')
      var contenido = ' '
          for (let i = 0; i <  information.data.length; i++) {
            const element = information.data[i];
            // console.log(element);
      //       // console.log(element.picture_medium);
      //       // console.log(element.name);
            
      
      // var idArtista = element.id    mati dijo esto
  
  
  
  
          
            contenido +='<li>'
            contenido +='<a href="/html/artista.html">'
            contenido +='<img src="'+element.picture_medium+'" alt="imagen">'
            contenido +='<h5 class="nombre-artista">'+element.name +'</h5>'
            contenido +='<i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i>'
            contenido +='</a> '
            contenido +='</li> '
      
       
      
  
      }
      contenedorAlbumes.innerHTML = contenido;
      })
  
    .catch(function(error) {
    console.log("Error: " + error);
    })
  
  
  
  ///////////// TRACKS
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    console.log(information.data);
      var contenedorTracks = document.querySelector('.contenedor-tracks')
      var contenido = ' '
          for (let i = 0; i < information.data.length ; i++) {
            const element = information.data[i];
            // console.log(element);
      //       // console.log(element.album.cover_medium);
                //console.log(element.title)
      //       // console.log(element.artist.name);
                  
            
  
  
  
          
            contenido +='<li>'
            contenido +='<a href="/html/track.html">'
            contenido +='<img src="'+element.album.cover_medium+'" alt="imagen">'
            contenido +='<h5 class="nombre-track">'+element.title +'</h5>'
            contenido +='<i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i>'
             contenido +=' <a href="/html/artista.html"><h6 class="nombre-track">'+element.artist.name +'</h6></a>'
            contenido +='</a> '
            contenido +='</li> '
      
       contenedorTracks.innerHTML = contenido;
      
  
      }
  
  
      })
  
    .catch(function(error) {
    console.log("Error: " + error);
    })
  
  
  
  
  
  
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 3000); 
    }
  
    // var slideIndex = 1;
    // showSlides(slideIndex);
    
    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    // }
  
  }