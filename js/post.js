// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(data => displayPost(data))
// }

// const postContainer = document.getElementById('post-container');
// function displayPost(data){
//     for(const post of data){
//         console.log(post)
//         const postDiv =document.createElement('div');
//         postDiv.classList.add('post') 
//         postDiv.innerHTML= `
//         <h4>user- ${post.userId}</h4>
//         <h5>post:${post.title}</h5>
//         <p>Post Description: ${post.body}</p>

//         `;
//         postContainer.appendChild(postDiv);
//     }
// }

// loadPost();



function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

function displayPost(posts){
    const postContainer =document.getElementById('post-container');
    
for(const post of posts){
    console.log(post)
   const postDiv = document.createElement('div');
   postDiv.classList.add('post');
   postDiv.innerHTML=  `
   <h4>users: ${post.userId} </h4>
   <h3>title: ${post.title} </h3>
   <p>description: ${post.body} </p>
   
   `
   postContainer.appendChild(postDiv)
}
}
loadPost();