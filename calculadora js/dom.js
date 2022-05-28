console.log(document.title);
document.title='Prueba de titulo';
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = "Prueba";
console.log(h1);

var button = document.getElementById('button');
console.log(button);

button.addEventListener('click', mensaje);

function mensaje(){
    alert('mensaje');
}