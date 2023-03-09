const notas = [10, 6, 8];

notas.push(5.5, 10);
notas.pop(); // deleta ultimo elemento do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


console.log(notas);
console.log(`A média é de ${media}`);