const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2)

const alunosReprovados = new Array( //cria uma nova array com 'new'
    'João',
    'Ana',
    'Marjorie'
)

alunosReprovados.pop(3)
console.log(sala1);
console.log(sala2);
console.log("os alunos reprovados foram:" ,alunosReprovados)