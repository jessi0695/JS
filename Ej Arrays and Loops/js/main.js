//Part 1
let nombres = ["Sofia","David","Juan",];
console.log(nombres);

//Part 2
nombres.push("Sara", "Augustin");
console.log(nombres);
let firstElement = nombres.shift();
console.log(nombres);

//Part 3
nombres.push("Elena");
console.log(nombres);
console.log(nombres.unshift(Renata));

//Ejercicio 2

for (let i = 1; i <= 6; ++i){
    let resultado = '';

    for (let j =1; j <= i; ++j){
        resultado += '*';
    }
    console.log(resultado);
}
