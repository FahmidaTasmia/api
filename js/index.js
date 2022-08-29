// fetch('https://jsonplaceholder.typicode.com/users')

function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json()) 
    .then(data => displayUser(data))
}

function displayUser(data){
    const ul =document.getElementById('users-list');
    for(user of data){
    console.log(user.name)
    const li = document.createElement('li');
    li.innerText=user.name;
    ul.appendChild(li);
}
}