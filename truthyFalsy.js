// boolean

const userLogado = true;
const contaPaga = false;             

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null == vazio ou nada
// undefined é algo indefinido como exemplo "let minhaVar", é um valor indefinido.

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let txt = "alura";

console.log(typeof numero);
console.log(typeof txt);

console.log(typeof minhaVar);
console.log(typeof varNull);
