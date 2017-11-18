var text = document.getElementById('text');
var contador = 140;
var button = document.getElementById('button');
var counter = document.getElementsByClassName('counter')[0];
var container = document.getElementById('container');
//Agregando evento click al boton para q te retorne el contenido ingresado
button.addEventListener('click', function(event) {
    var firstBox = document.createElement('div');
    var content = document.createElement('a');
    content.textContent = text.value;
//Agregando los estilos con css
    firstBox.classList.add('styleBox');
    content.classList.add('styleLetter');
if (text.value == false) {
  alert('Ingrese contenido:');
}else{
  firstBox.appendChild(content);
  container.appendChild(firstBox);
    text.value = '';
  }
});

//button.removeEventListener('click', function(event));

//Cambio de color del boton al ingresar texto
text.addEventListener('keyup', function() {
  var contenido = text.value;
  if (contenido == '' || contenido === ' ') {
    button.classList.remove('buttonColor');

  }else {
    button.classList.add('buttonColor');
  }
  //Agregando el contador
  var letters = text.value.length;
  var restaContador = 140 - letters;
  counter.textContent = restaContador;
  //Agregando colores a los caracteres
}) ;
text.addEventListener('keyup', function() {
  var letters = text.value.length;
  var negative = -1;
  if (letters >= 0 && letters <= 120) {
  counter.className = 'original';
} else if(letters = 122 && letters <= 130){
  counter.className = 'green';
} else if(letters = 131 && letters <= 140){
  counter.className = 'red';
}
}) ;
