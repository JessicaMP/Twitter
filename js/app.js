var text = document.getElementById('text');
var button = document.getElementById('button');
var counter = document.getElementsByClassName('counter')[0];
var container = document.getElementById('container');

button.addEventListener('click', function(event) {

  if (text.value) {
    var firstBox = document.createElement('div');
    var content = document.createElement('a');
//Agregando los estilos con css
    content.textContent = text.value;
    firstBox.classList.add('styleBox');
    content.classList.add('styleLetter');

    firstBox.appendChild(content);
    container.appendChild(firstBox);

    text.value = '';
  }

  //text.onKeypress = text;
   //button.classList.add('buttonColor');
});

text.addEventListener('keyup', function() {
  var contenido = text.value;
  if (contenido == '') {
    button.classList.remove('buttonColor');
  }else {
    button.classList.add('buttonColor');
  }

});

/*text.addEventListener('keyup', function(ke) {
  numLetter = text.value.lenght;
if (numLetter = 1 && numLetter < 120) {
})
}*/
