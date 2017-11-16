var text = document.getElementById('text');
var button = document.getElementById('button');
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
});

text.onSelect = function(event){
  text.classList.add('buttonColor');
}
    /*return this.each(function(){

      if(!$(this).is('select')){
        // this plug-in is only for Select elements.
        return;
      }
/*selectText.attachEvent("onselect", );
window.onselect = 'text.classList.add('buttonColor')';*/
/*function selectText(event) {
  if (text.value)
  text.classList.add('buttonColor');
}*/
