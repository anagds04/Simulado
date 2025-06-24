/*07) Classificação de Idade
Considere a variável:
let idade = 45;

Crie uma estrutura if/else if/else que:
● Se a idade for menor que 12, exiba "Criança";
● Se for entre 12 e 17 (inclusive), exiba "Adolescente";
● Se for entre 18 e 59 (inclusive), exiba "Adulto";
● Se for 60 ou mais, exiba "Idoso".*/

var idade = 45

if (idade <= 12) {
    console.log(" Criança!!")
}
else if (idade >= 12 && idade <=17) {
    console.log("Adolescente!!")
}
else if (idade >= 18 && idade <=59 ) {
    console.log("Adulto!! ")

} else {
    console.log("Idoso!!")
}


