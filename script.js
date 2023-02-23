// var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area); 

// let

let forma = "retangulo";
let altura = 5;
let comprimento = 7;
let area;

if (forma === "retangulo"){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2
}

console.log(area);


// const se não atribuir valor vira 'var', usar let nesse caso é a melhor opção

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado"){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2
}

console.log(area);

// tipagem dinamica não precisa definir o tipo da var
// untyped

let minhaVar = 567;
minhaVar = "texto";

