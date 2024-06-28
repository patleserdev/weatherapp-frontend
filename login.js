// Insert your code here
let websiteUrl="https://weatherapp-backend-indol-pi.vercel.app/"
/*
Au clic sur le bouton #register, envoyez les informations renseignées dans les différents champs vers le backend avec la toute POST /signup.

Si les informations sont correctes, renvoyez true et redirigez votre page vers index.html (en utilisant window.location.assign()).
*/

document.querySelector('#register').addEventListener('click',function(){
    // récupérer les données
let name=document.querySelector('#registerName').value
let email=document.querySelector('#registerEmail').value
let password=document.querySelector('#registerPassword').value
    // les transmettre
    fetch(`${websiteUrl}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name : name,email: email,password: password}),
    }).then(response => response.json()).then((data) => {
        console.log(data) 
        if (data.result == true)
        {
            window.location.assign("index.html") 
        }  
    })  
})

document.querySelector('#connection').addEventListener('click',function(){
    // récupérer les données
let emailverification=document.querySelector('#connectionEmail').value
let passwordverification=document.querySelector('#connectionPassword').value
    // les transmettre
    fetch(`${websiteUrl}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: emailverification,password: passwordverification}),
    }).then(response => response.json()).then((data) => {
        console.log(data) 
        if (data.result == true)
        {
            window.location.assign("index.html") 
        }  
    })  
})
