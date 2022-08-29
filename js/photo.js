function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayPhoto(data) )
}

function displayPhoto(photos){

    const photoContainer = document.getElementById('photo-container');
for (const photo of photos){
const photoDiv= document.createElement('div');
photoDiv.innerHTML=`
<h4>albumId:${photo.albumId} </h4>
<h5>Id:${photo.id} </h5>
<p>title:${photo.title} </p>
<p>url:${photo.url} </p>
<p>thumbnailUrl:${photo.thumbnailUrl} </p>
`
photoContainer.appendChild(photoDiv)
}
}

loadPhoto();