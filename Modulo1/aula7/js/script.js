console.log ('Manipulação do DOM');

var titulo = document.querySelector ('h1');
titulo.textContent = 'Modificado para Andressa Cavalcanti';

var city = document.querySelector ('#cidade');
city.textContent = 'Campinas(SP)';

var dadosPessoais = document.querySelectorAll ('.dados');
console.log (dadosPessoais);

//Mutabilidade - não é o ideal
dadosPessoais = Array.from (dadosPessoais);

//Posso fazer diretamente
var meusDados = Array.from (document.querySelectorAll ('.dados'));

for (var i = 0; i < meusDados.length; i++) {
  var elemento = meusDados[i];
  //elemento.style.color = 'pink';
  elemento.classList.add ('destaque');
}
