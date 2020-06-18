

window.onload = function(){

    var querystring = location.search;
    var query2 = new URLSearchParams(querystring)
    var id = query2.get("id")
    //console.log(location.search)
    //var queryString=location.search
    
    //var queryStringOBJ=new this.URLSearchParams(queryString)
    //var IdArtist=queryStringOBJ.get('IdArtista')

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ id + "")
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log(information)
        document.querySelector(".titulo").innerHTML=information.name



    })
    .catch(function(error){
        console.log("el error es: "+error);



    })
    document.querySelector(".contenido").innerHTML = '<img src="../img/loading gif.gif" alt="gif"></img> '
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ id +"/artists")
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
            var IdArtist=element.id

            
            
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
    .catch(function(error){
        console.log("el error es: "+error);



    })























}// no borrar 

