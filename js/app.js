const $botonComenzar = document.getElementById('comenzarJuego');
const $areaInput = document.getElementById('areaInput');
const $botonConfirmarNumero = document.getElementById('botonOk');
const $numeroUsuario = document.getElementById('numero');
const $espacioRespuesta = document.getElementById('espacioRespuesta');

function borrarRespuestas() {
	const $respuestas = document.querySelectorAll('.respuesta');
	$respuestas.forEach(respuesta => respuesta.remove());
};

function crearRespuesta() {
	const $respuesta = document.createElement('div');
	$respuesta.className = 'alert alert-info respuesta';
	$respuesta.role = 'alert';
	$espacioRespuesta.appendChild($respuesta);
};

function textoRespuesta(numero) {
	const $textoRespuesta = document.querySelector('.respuesta');

	if (numero === numeroParaAdivinar) {
		$textoRespuesta.innerText = `Adivinaste el numero! Era el ${numeroParaAdivinar}. (${contadorIntentos} intentos)`;
		$areaInput.className = 'd-none';
		nuevoJugo = true;
	};
	if (numero > numeroParaAdivinar) {
		$textoRespuesta.innerText = `El numero es menor que ${numero}`;
	};
	if (numero < numeroParaAdivinar) {
		$textoRespuesta.innerText = `El numero es mayor que ${numero}`;
	};
};

function compararNumeros(numero) {
	if (numero > 99) {
		alert('El numero tiene que ser de dos digitos!')
	} else {
		borrarRespuestas();
		crearRespuesta(numero);
		textoRespuesta(numero);
	};
};

let numeroParaAdivinar = null;
let nuevoJugo = true;
let contadorIntentos = 0;

$botonComenzar.onclick = function () {
	borrarRespuestas();
	contadorIntentos = 0;
	if (!numeroParaAdivinar || nuevoJugo === true) {
		numeroParaAdivinar = Math.floor(Math.random() * 100);
		nuevoJugo = false;
	};
	$areaInput.className = '';
};

$botonConfirmarNumero.addEventListener('click', (event) => {
	const numeroElegido = Number($numeroUsuario.value);
	contadorIntentos++;
	compararNumeros(numeroElegido);
	$numeroUsuario.value = '';
	event.preventDefault();
});