window.onload = function(){
  arrayIdsCanciones = JSON.parse(window.localStorage.getItem("listaPlaylist"))

  console.log(arrayIdsCanciones)


 if (arrayIdsCanciones == null || arrayIdsCanciones == "") {
   document.querySelector('.vacia').innerHTML = '<p class="tituloVacia">Todavia no agregaste canciones a tu Playlist... <br><br><br> ¡Explora la pagina y armala con tu musica favorita!</p><br><h4><a href="home.html">Home<a/></h4>'
 } else {
   // hacer un for en el array creado (idcancionesplaylist) y agregar las canciones a la playlist
 }






////////// ELIMINAR CANCION DE PLAYLIST
//  var eliminar = document.querySelector('#eliminar-de-playlist')

//  eliminar.onclick = function(){




//  }








}// no borrar. window.onload





//   var idCancionesPlaylist = [
  
//   ];



// JSON.parse(localStorage.getItem("idCancionesPlaylist"))
// console.log(idCancionesPlaylist);

// // idCancionesPlaylist.push(1)
// // idCancionesPlaylist.push(2)
// // idCancionesPlaylist.push(3)
// // idCancionesPlaylist.push(4)
// // idCancionesPlaylist.push(5)


// console.log(idCancionesPlaylist)

// localStorage.setItem("idCancionesPlaylist",JSON.stringify(idCancionesPlaylist.push(1,2,3,4,5)))

//   // idCancionesPlaylist.push("834756");
  
//   // localStorage.setItem("idCancionesPlaylist", idCancionesPlaylist.push(JSON.stringify(7)));
//   // // localStorage.setItem("idCancionesPlaylist", idCancionesPlaylist.push(JSON.stringify(IDCANCION)));
  
  
//   // localStorage.setItem("idCancionesPlaylist", JSON.stringify(7))
//   // // localStorage.setItem("idCancionesPlaylist", JSON.stringify("0"))
//   // // localStorage.setItem("idCancionesPlaylist", JSON.stringify("29"))
  
//   // localStorage.getItem("idCancionesPlaylist")
  
  
  
//   // console.log(idCancionesPlaylist);
//   // idCancionesPlaylist.push("834756");
//   // idCancionesPlaylist.push("56"); 
//   // idCancionesPlaylist.push("86");
//   // idCancionesPlaylist.push("26");
  


