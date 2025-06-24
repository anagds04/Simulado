/* 09) Dia da Semana com Switch
Considere a variável:
let dia = 4;

Usando switch, exiba o dia da semana correspondente, considerando:
1-Domingo, 2-Segunda, 3-Terça, 4-Quarta, 5-Quinta, 6-Sexta, 7-Sábado.*/




let dia = "4";

switch (dia) {

    case "1":
        console.log("Domingo");
        break;

    case "2":
        console.log("Segunda-Feira");
        break;


    case "3":
        console.log("Terça-Feira");
        break;

    case "4":
        console.log("Quarta-Feira");
        break;

    case "5":
        console.log("Quinta-Feira");
        break;

    case "6":
        console.log("Sexta-Feira");
        break;

    case "7":
        console.log("Sábado");
        break;

    default:
        console.log(" dia inexistente.")
}