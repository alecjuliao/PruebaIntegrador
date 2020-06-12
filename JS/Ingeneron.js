

window.onload = function(){
    console.log(location.search)
    var queryString=location.search
    
    var queryStringOBJ=new this.URLSearchParams(queryString)
    var IdArtist=queryStringOBJ.get('IdArtista')


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists")
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log(information)

        var contenedorArtistas= document.querySelector(".contenido")
        var contenido=""
        for (let i = 0; i < information.data.length; i++) {
            const element = information.data[i];
            console.log(element)
            console.log(element.name)
            console.log(element.picture)

            
            
            //<li class="artistas">
                    //<img src="../img/Artistas/ed-sheeran.jpg" alt="foto" class="artistas-img">
                    //<h3 class="nombreArtista">queen</h3>
            //</li>
            
            
            
            contenido+= '<li class="artistas">'
            contenido+= '<a class="link-img-artista" href="artista.html?IdArtista='+IdArtist+'"><img src="'+element.picture+'"></a>'
            contenido+='<a class="link-h3-artista" href="artista.html?IdArtista='+IdArtist+'"><h3 class="nombreArtista">'+element.name+'</h3></a>'
            contenido+='</li>'
            
            




        }
        contenedorArtistas.innerHTML=contenido





    })























}// no borrar 
