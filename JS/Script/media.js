let nota = prompt('Digite a nota do aluno: ');
let faltas = prompt('Digite a quantidade de faltas do aluno: ');

const media = 7;
const faltas_maximas = 15;

// cuidado com o ===(identico)
/*if (nota >= media && faltas <= faltas_maximas) {
  document.write('Aprovado');
} else {
  document.write('Reprovado')
}*/


//operador ternário
let resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Falso';
document.write(resultado)
