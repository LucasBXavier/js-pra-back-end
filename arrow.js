function apresentacao(nome){
    return `meu nome é ${nome}`
}

// arrow function

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

//arrow function com mais de 1 linha

const somaNumPqn = (numero1, numero2) =>{
    if (numero1>10 || numero2>10){
        return "somente numeros de 1 a 10";
    }else{
        return numero1 + numero2
    }
}