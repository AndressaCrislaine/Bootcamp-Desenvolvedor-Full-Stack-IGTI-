window.addEventListener ('load', start);

var rangeRed = document.querySelector ('#red');
var rangeGreen = document.querySelector ('#green');
var rangeBlue = document.querySelector ('#blue');
var vermelho = 0;
var verde = 0;
var azul = 0;

function start () {
  console.log ('Página totalmente carregada.');
  modificador ();
}

function preventFormSubmit () {
  //Funcao para nao ficar recarregando a pagina
  function handleFormSubmit (event) {
    event.preventDefault ();
  }
  var form = document.querySelector ('form');
  form.addEventListener ('submit', handleFormSubmit);
}
//Funcao que modifica os input desabilitados
function modificador () {
  function atualizaInputVermelho (event) {
    var inputRed = document.querySelector ('#inputRed');
    vermelho = event.target.value;
    inputRed.value = vermelho;
    modicadorQuadrado ();
  }
  function atualizaInputVerde (event) {
    var inputGreen = document.querySelector ('#inputGreen');
    verde = event.target.value;
    inputGreen.value = verde;
    modicadorQuadrado ();
  }
  function atualizaInputAzul (event) {
    var inputBlue = document.querySelector ('#inputBlue');
    azul = event.target.value;
    inputBlue.value = azul;
    modicadorQuadrado ();
  }

  //funcao que modifica a cor do quadrado
  function modicadorQuadrado (event) {
    var div = document.querySelector ('#boxcolor');
    div.style.backgroundColor =
      'rgb(' + vermelho + ',' + verde + ',' + azul + ')';
  }

  rangeRed.addEventListener ('change', atualizaInputVermelho);
  rangeGreen.addEventListener ('change', atualizaInputVerde);
  rangeBlue.addEventListener ('change', atualizaInputAzul);
}
