/** @format */

alert("BIENVENIDO A MI RESTAURANTE");

function nombreApellido() {
	let nombre = prompt("Ingrese su nombre");
	let apellido = prompt("Ingrese su apellido");
	let nombreCompleto = nombre + " " + apellido;
	console.log("Hola" + " " + nombreCompleto + "!");
}

function obtenerEdad() {
	let edad = parseInt(prompt("Ingrese su edad"));
	let anioNacimiento = 2023 - edad;
	console.log(`Su año de nacimiento es ${anioNacimiento}`);
	for (i = 0; i < 1; i++) {
		if (edad >= 18) {
			alert("Es mayor de edad. Puede hacer la reserva.");
		} else {
			alert("Es menor de edad. No podemos tomar su reserva.");
		}
	}
}

function cantidadComensales() {
	let pax = parseInt(prompt("Ingrese cantidad de comensales"));
	if (pax >= 10) {
		alert("Debrá realizar un seña de $3000 para que podamos tomar su reserva.");
	} else {
		alert("Debrá realizar un seña de $1500 para que podamos tomar su reserva.");
	}
}

function fechaReserva() {
	let fecha = prompt("Ingrese día, mes y año de reservacion");
	console.log("Su fecha de reserva es " + fecha);
}

function hora() {
	let hora = prompt(
		"Elija su turno de reservacion:\n A] 21,00hs \n B]21,30hs \n c]22,00hs \n D] 22,30hs"
	).toUpperCase();
	console.log("Usted eligió  la opcion " + hora);
}

function sector() {
	let sector = prompt(
		"Ingrese el sector que prefiera: \n A]Salon \n  B]Terraza"
	).toUpperCase();
	console.log("Eligió el sector " + sector);
}

function telefono() {
	let nroTelefono = prompt("Introduzca su numero de telefono.");
	console.log("El numero ingresado es " + nroTelefono);
}

function comentario() {
	let comentario = prompt("Deje aquí sus observaciones");
	console.log("Su comentario fue: " + comentario);
}

nombreApellido();
obtenerEdad();
cantidadComensales();
fechaReserva();
hora();
sector();
telefono();
comentario();
