function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data))
}

function displayComment(comments){
const commentContainer = document.getElementById('comment-container');
for(const comment of comments){
const commentDiv = document.createElement('div');
commentDiv.innerHTML=`
<h4>postId:${comment.postId} </h4>
<h5>id:${comment.id} </h5>
<p> name: ${comment.name} </p>
<p> email: ${comment.email} </p>
<p> body: ${comment.body} </p>
`;
commentContainer.appendChild(commentDiv);
}

}


loadComment();