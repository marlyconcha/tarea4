// Tarea parte 1 a - Mostrar en consola los números del 1 al 100 de 1 en 1.

const sumar = (n) => {
    if (n > 100) return 
    console.log(n)
    sumar(n + 1)
}
sumar(1)

// Tarea parte 1 b - Mostrar en consola los números del 1000 al 500 de 2 en 2.

const restar = () => {

    for (let i = 1000; i >= 500; i -=2 ){
        console.log(i);
    };
};

restar();

// Tarea parte 2.
// Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una función 
// y el promedio el retorno de otra función. 
// Las notas son: 6,8,9,2,5,10.

const notas = [6, 8, 9, 2, 5, 10];

function promedio(notas) {
	let sumar = 0;

	for (let i = 0; i < notas.length; i++) {
		sumar += notas[i];
	}

	let promediar = sumar / notas.length;
	return promediar;
}
console.log("El promedio de notas es de", promedio(notas));