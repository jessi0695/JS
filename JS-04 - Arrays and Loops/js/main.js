//Ejercicio 1
//Part 1
console.log("***EXERCISE 1***");
let nombres = ["Sofia","David","Juan",];
console.log(nombres);

//Part 2
nombres.push("Sara", "Augustin");
console.log(nombres);
let firstElement = nombres.shift();
console.log(nombres);

//Part 3
nombres.splice(1,0, "Renata");
nombres.push("Elena");
console.log(nombres);

//Ejercicio 2
console.log("***EXERCISE 2***");
for (let i = 1; i <= 5; ++i){
    let resultado = '';

    for (let j =1; j <= i; ++j){
        resultado += '*';
    }
    console.log(resultado);
}

//Ejercicio 3
console.log("***EXERCISE 3***");
//Parte 1
// console.log("***P1***");
// let xValue = 0;
// let y = xValue-0.5;
// while (xValue > 0) {
//   y = xValue-0.5;
//   console.log(xValue);
// }

console.log("***P2***");
//Parte 2
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

console.log("***P3***");
//Parte 3
let i =5, n= 6;
while(i<= n){
    console.log(i);
    i += 1;
}

console.log("***P4***");
//Parte 4
let number = parseInt(prompt('Ingresa un numero entero positivo: '));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log('Resultado de la suma:', sum);
