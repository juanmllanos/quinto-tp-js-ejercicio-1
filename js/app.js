const $botonComenzar = document.getElementById('comenzarJuego');
const $areaInput = document.getElementById('areaInput');
const $botonConfirmarNumero = document.getElementById('botonOk');
const $numeroUsuario = document.getElementById('numero');

let numeroParaAdivinar = null;
let contadorIntentos = 0;

function compararNumeros(numero) {
	if (numero === numeroParaAdivinar) {
		alert(`Adivinaste el numero! (${contadorIntentos} intentos)`);
		$areaInput.className = 'd-none';	
	} else if (numero > numeroParaAdivinar) {
		alert(`El numero es menor que ${numero}`);
	} else alert(`El numero es mayor que ${numero}`);
};

$botonComenzar.onclick = function() {
	if (!numeroParaAdivinar) numeroParaAdivinar = Math.ceil(Math.random() * 100)
	$areaInput.className = '';
};

$botonConfirmarNumero.onclick = function(event) {
	const numeroElegido = Number($numeroUsuario.value);
	contadorIntentos ++;
	compararNumeros(numeroElegido);
	$numeroUsuario.value = '';
	event.preventDefault();
};