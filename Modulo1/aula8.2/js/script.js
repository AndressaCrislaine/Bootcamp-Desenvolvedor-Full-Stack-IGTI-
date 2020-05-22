window.addEventListener ('load', start);

function start () {
  console.log ('Página totalmente carregada.');

  var nome = document.querySelector ('#nome');
  nome.addEventListener ('keyup', contadorNome);

  var form = document.querySelector ('form');
  form.addEventListener ('submit', preventSubmit);
}

function contadorNome (event) {
  var cont = event.target.value;
  var span = document.querySelector ('#nomeLength');
  span.textContent = cont.length;
}

function preventSubmit (event) {
  event.preventDefault ();

  var nameInput = document.querySelector ('#nome');
  alert (nameInput.value + ' cadastrado com sucesso!');
}
