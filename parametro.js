//parametros de função

function soma(num1 , num2){
    return num1 + num2;
}
console.log(soma(2, 2));
console.log(soma(15, 10));
console.log(soma(-310, 560));


// parametros x argumentos

function nomeIdade(nome, idade){
    return `meu nome é ${nome}, e minha idade é ${idade}`;
}
console.log(nomeIdade("lucas", 21))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 8))) // em caso de não passar um paramentro prenche o 'numero1/2' com o valor neutro = 1